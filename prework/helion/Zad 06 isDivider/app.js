function digits(number) {
    let sum = 0;
    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
};


function isDivider(number) {
    return number % digits(number) === 0;
}

console.log(isDivider(21));
console.log(isDivider(27)); 