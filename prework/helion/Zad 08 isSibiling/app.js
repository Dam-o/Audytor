function isPrime(number) {
    for (let i = 2; i < number; i++)
        if (number % i === 0) return false;
    return number > 1;
};

//console.log(isPrime(2));
//console.log(isPrime(67));
//console.log(isPrime(4));

function sum(num, num2) {
    return num2 - num === 2;
}

//console.log(sum(5, 6));
//console.log(sum(5, 7));
//console.log(sum(7, 5));

function isSibiling(num, num2) {
    return isPrime(num) && isPrime(num2) && sum(num, num2);
};

console.log(isSibiling(3, 5));
console.log(isSibiling(3, 6));
console.log(isSibiling(7, 5));
console.log(isSibiling(11, 13));