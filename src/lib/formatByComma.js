//Formatting the number by the comma for better readability
const formatByComma = (number) => {
    let formatted = number
        .split('')
        .reverse()
        .map((digit, index) => (index > 0 && index % 2 === 0 ? `,${digit}` : digit))
        .reverse()
        .join('');

    if (formatted.charAt(0) === ',') {
        return formatted.slice(1)
    }
    return formatted
}

export default formatByComma