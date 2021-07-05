function isPrime(number) {
    for (let i = 2; i < number; i++)
        if (number % i === 0) return false;
    return number > 1;
}

console.log(isPrime(2));
console.log(isPrime(44));
console.log(isPrime(3));
console.log(isPrime(27));
console.log(isPrime(9));