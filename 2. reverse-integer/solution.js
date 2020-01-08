/**
 * @param {number} x
 * @return {number}
 */
const reverse = integer => {
    const str = String(integer);
    const negativeSign = "-"
    const signDigit = str.substr(0, 1);
    let isNegative = false;
    let reverseInteger = "";

    if (signDigit === negativeSign) {
        str.replace(negativeSign, "");
        console.log(str);
        isNegative = true;
    }

    for (let i = 0; i < str.length; i += 1) {
        reverseInteger += str.substr(str.length - i - 1, 1);
    }

    if (isNegative) Number(negativeSign + reverseInteger);
    return Number(reverseInteger);
};

console.log(reverse(23));