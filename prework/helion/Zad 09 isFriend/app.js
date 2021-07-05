const dividers = function (n) {
    let k;
    let suma = 0;
    for (k = 1; k < n; k++) if (n % k === 0) suma = suma + k;
    return suma;
};

const friends = function (num, num2) {
    return dividers(num) === num2 && dividers(num2) === num;
};

console.log(friends(220, 284));
console.log(friends(1, 111));
console.log(friends(1184, 1210));