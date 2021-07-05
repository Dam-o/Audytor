function dividers(number) {
    let k;
    let s = 0;
    for (k = 1; k < number; k++) if (number % k == 0) s = s + k;
    return s;
}

function isPerfect(number) {
    return number == dividers(number);
}


console.log(isPerfect(6));
console.log(isPerfect(10));
console.log(isPerfect(28));
console.log(isPerfect(27));
