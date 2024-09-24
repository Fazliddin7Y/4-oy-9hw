//2
let num = 256;
let str = num.toString();
console.log(str); // "256"

//3
function toNegative(n) {
    return n > 0 ? -n : n;
}
console.log(toNegative(7)); // -7
console.log(toNegative(-8)); // -8

//4
let numbers = [1, 2, -3, 4, 5, -6, -7];
let positiveSum = numbers.filter(n => n > 0).reduce((acc, curr) => acc + curr, 0);
console.log(positiveSum); // 12

//5
function evenOrOdd(n) {
    return n % 2 === 0 ? "juft son" : "toq son";
}
console.log(evenOrOdd(5)); // "toq son"
console.log(evenOrOdd(6)); // "juft son"

//6
function opposite(n) {
    return -n;
}
console.log(opposite(9)); // -9
console.log(opposite(-9)); // 9

//7
let arr = [true, 1, true];
let trueCount = arr.filter(Boolean).length;
console.log(trueCount); // 2

//9
function boolToWord(bool) {
    return bool ? "yes" : "no";
}
console.log(boolToWord(true)); // "yes"
console.log(boolToWord(false)); // "no"

//10
let strr = "Salom qalesan";
let upperStr = strr.toUpperCase();
console.log(upperStr); // "SALOM QALESAN"

//11
function sumUpTo(n) {
    return (n * (n + 1)) / 2;
}
console.log(sumUpTo(5)); // 15

//12
let strrr = "QWERTY";
let reversedStr = strrr.split('').reverse().join('');
console.log(reversedStr);
