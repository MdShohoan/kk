import styles from './CountUp.module.css';
import { useState, useEffect } from 'react';

export default function CountUp({ end }) {
    const [count, setCount] = useState(0);

    const formatByComma = (number) => {
        let fromatted = number
            .split('')
            .reverse()
            .map((digit, index) => (index > 0 && index % 2 === 0 ? `,${digit}` : digit))
            .reverse()
            .join('');

        if (fromatted.charAt(0) === ',') {
            return fromatted.slice(1)
        }
        return fromatted
    }

    const toBanglaDigits = (number) => {
        const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        const converted = number.toString().split('').map(digit => banglaDigits[digit]).join('');
        return converted
    }

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
      1. Targeted number divided by 15 will be the increment number.
      2. If targeted number minus current counted state less than incrementBy number then set state to the targeted number
      3. interval will be same for all the counter
    */

    const targetedCount = toEnglishDigits(end)
    const incrementBy = Math.floor(targetedCount / 15)

    useEffect(() => {
        const interval = setInterval(() => {
            if (count < targetedCount) { // Change the upper limit as needed

                // setCount(count + incrementBy);
                setCount(prev => targetedCount - prev < incrementBy ? targetedCount : prev + incrementBy)
            } else {
                clearInterval(interval);
            }
        }, 100); // Change the interval as needed

        return () => clearInterval(interval);
    }, [count]);
    return (
        <p className={styles.data}>{formatByComma(toBanglaDigits(count))}</p>
    )
}