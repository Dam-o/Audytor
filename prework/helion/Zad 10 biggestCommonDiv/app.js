const biggestCommon = function (num, num2) {
    if (num > num2) return biggestCommon(num2, num);
    else {
        if (num === 0) return num2;
        else return biggestCommon(num2 % num, num);
    };
};

console.log(biggestCommon(2, 4));
console.log(biggestCommon(4, 2));
console.log(biggestCommon(111, 1049));
console.log(biggestCommon(0, 775));
console.log(biggestCommon(244, 1000));

