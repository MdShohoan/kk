function toBengaliDigits(number) {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

    // Function to convert each digit of the number
    function convertDigit(digit) {
        if (digit >= 0 && digit <= 9) {
            return bengaliDigits[digit];
        } else {
            return digit; // If not a digit, return as is (for decimal point, etc.)
        }
    }

    // Convert the number to a string and then convert each digit
    const bengaliNumber = number?.toString()?.split('')?.map(convertDigit)?.join('');

    return bengaliNumber;
}

export default toBengaliDigits