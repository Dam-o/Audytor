function digits(number) {
    let sum = 0;
    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
};

function isPrime(number) {
    for (let i = 2; i < number; i++)
        if (number % i === 0) return false;
    return number > 1;
}

function superPrime(number) {
    return isPrime(number) && isPrime(digits(number));
}

function binary(number) {
    let s = 0;
    let r;
    while (number > 0) {
        r = number % 2;
        s = s + r;
        number = Math.floor(number / 2);
    }
    return s;
}

function isBSuperPrime(number) {
    return isPrime(number) && isPrime(digits(number)) && isPrime(binary(number));
}

console.log(isBSuperPrime(1291));
console.log(isBSuperPrime(21));