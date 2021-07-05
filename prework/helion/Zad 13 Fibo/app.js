//funkcja rekurencyjna  
const fibo = function (n) {
    if (n == 1 || n == 2) return 1; else return fibo(n - 1) + fibo(n - 2);
};

console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(3));
console.log(fibo(17));

//użycie wzoru jawnego

// potęga o wykładniku naturalnym  

const expN = function (x, w) {
    let k;
    let pot = 1;
    if (w > 0) for (k = 1; k <= w; k++) pot = pot * x;
    return pot;
};

//obliczanie wartości elementu ciągu ze wzoru 
const zadFibo = function (n) {
    let p, q, r, s;
    p = Math.sqrt(5);
    q = 1 + p;
    r = 1 - p;
    s = 1 / p;
    return Math.floor(s * expN(q / 2, n) - expN(r / 2, n))
};

//Należy zaokrąglić wynik do części całkowitych ponieważ dla wyższych wartości występuje niekorzystny nadmiar wynikający z przybliżenia do liczb rzeczywistych 

console.log(zadFibo(1));
console.log(zadFibo(17));