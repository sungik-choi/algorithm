/**
 * @param {number} x
 * @return {number}
 */
const reverse = (integer) => {
  let strInteger = String(integer);
  let reverseInteger = '';
  let isNegative = false;
  const negativeSign = '-';
  const signDigit = strInteger.substr(0, 1);
  const integerLimit = 2147483648;

  if (signDigit === negativeSign) {
    const pureNum = strInteger.replace(negativeSign, '');
    strInteger = pureNum;
    isNegative = true;
  }

  for (let i = 0; i < strInteger.length; i += 1) {
    reverseInteger += strInteger.substr(strInteger.length - i - 1, 1);
  }

  if (Math.abs(parseInt(reverseInteger, 10)) > integerLimit) return 0;
  if (isNegative) return parseInt(negativeSign + reverseInteger, 10);
  return parseInt(reverseInteger, 10);
};
