//Convert bengali digit to english digit.
const toEnglishDigits = (banglaNumber) => {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const converted = banglaNumber?.toString()?.split('')?.map(digit => {
        const digitIndex = banglaDigits.indexOf(digit);
        return digitIndex !== -1 ? englishDigits[digitIndex] : digit;
    })?.join('');

    return parseInt(converted)
}

export default toEnglishDigits