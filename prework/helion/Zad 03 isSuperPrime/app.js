function digits(number) {
    let sum = 0;
    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
};

console.log(digits(10));
console.log(digits(111));


function isPrime(number) {
    for (let i = 2; i < number; i++)
        if (number % i === 0) return false;
    return number > 1;
}


function superPrime(number) {
    return isPrime(number) && isPrime(digits(number));
}

console.log(superPrime(101));
console.log(superPrime(22));
console.log(superPrime(5));







