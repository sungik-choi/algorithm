/**
 * @param {number} x
 * @return {number}
 */
const reverse = integer => {
    let str = String(integer);
    const negativeSign = "-"
    const signDigit = str.substr(0, 1);
    let isNegative = false;
    let reverseInteger = "";

    if (signDigit === negativeSign) {
        const pureNum = str.replace(negativeSign, "");
        str = pureNum;
        isNegative = true;
    }

    for (let i = 0; i < str.length; i += 1) {
        reverseInteger += str.substr(str.length - i - 1, 1);
    }

    if (isNegative) return Number(negativeSign + reverseInteger);
    return Number(reverseInteger);
};

console.log(reverse(23243000000));
console.log(Number("-" + "13"));