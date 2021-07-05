function power(num) {
    let k;
    let pot = 1;
    if (num > 0) for (k = 1; k <= num; k++) pot = pot * 2;
    return pot;
};

function isPrime(number) {
    let i;
    if (number < 2) return false;
    for (i = 2; i * i <= number; i++) if (number % i == 0) return false;
    return true;
};

function Mersenne(n) {
    let x;
    let k = 1;
    do { x = power(k) - 1; k++ }
    while (x < n);
    return x == n && isPrime(k - 1);
};


console.log(Mersenne(3));
console.log(Mersenne(2));
console.log(Mersenne(7));