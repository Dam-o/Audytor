function sum1(n) {
    let i;
    let sum = 0;
    for (i = 1; i <= n; i++) sum = sum + i;
    return sum;
};
console.log(sum1(10));

function sum2(n) {
    let i;
    let sum = 1;
    for (i = 2; i <= n; i++) if (i % 2 === 0) sum = sum + i; else sum = sum - i;
    return sum;
};

console.log(sum2(5));
console.log(sum2(10));