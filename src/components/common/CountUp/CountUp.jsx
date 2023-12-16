import { useState, useEffect } from 'react';
import toBengaliDigits from '../../../lib/toBanglaDigits';
import formatByComma from '../../../lib/formatByComma';

export default function CountUp({ end }) {
    const [count, setCount] = useState(0);

    //Convert bangla digit to english digit.
    const toEnglishDigits = (banglaNumber) => {
        const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        const converted = banglaNumber.toString().split('').map(digit => {
            const digitIndex = banglaDigits.indexOf(digit);
            return digitIndex !== -1 ? englishDigits[digitIndex] : digit;
        }).join('');

        return parseInt(converted)
    }

    /*
      1. Targeted number divided by 17 will be the increment number.
      2. If targeted number minus current counted state less than incrementBy number then set state to the targeted number
      3. interval will be same for all the counter
    */

    const targetedCount = toEnglishDigits(end)
    const incrementBy = Math.floor(targetedCount / 17)

    //Handling counter update
    useEffect(() => {
        const interval = setInterval(() => {
            if (count < targetedCount) { // Change the upper limit as needed
                setCount(prev => targetedCount - prev < incrementBy ? targetedCount : prev + incrementBy)
            } else {
                clearInterval(interval);
            }
        }, 50); // Change the interval as needed

        return () => clearInterval(interval);
    }, [count]);

    return (
        <p className='md:text-xl lg:text-2xl text-base mb-2 text-primary font-bold'>
            {count === 0? formatByComma(toBengaliDigits(targetedCount)) : formatByComma(toBengaliDigits(count))}
        </p>

    )
}


