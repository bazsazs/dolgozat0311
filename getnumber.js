function getNumberFromString(s) {
    const digitsOnly = s.replace(/\D/g, '');
    const result = parseInt(digitsOnly, 10);
    return result;
}

const inputString = "Hell5o wor6ld";
const result = getNumberFromString(inputString);
console.log(result);

console.log("----- 1. feladat -----");
console.log(getNumberFromString("1"), 1);
console.log(getNumberFromString("123"), 123);
console.log(getNumberFromString("this is number: 7"), 7);