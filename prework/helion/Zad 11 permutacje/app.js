const exp = function (n) {
    let i;
    let pot = 1;
    if (n > 0) for (i = 1; i <= n; i++) pot = pot * 10;
    return pot; //potęga liczby 10
};

const generator = function (n) {
    let x = 0;
    let y = 0;
    let z;
    let i;
    let j;
    let k;
    let czy;
    let stary = "";
    let nowy = "";
    let zn = "";


    //generowanie liczb x =1234...n i y =n..321
    for (k = 1; k <= n; k++) x = x + k * exp(n - k);
    for (k = n; k >= 1; k--) y = y + k * exp(n - 1);

    //pętla od x do y z wykorzystaniem zmiennych tekstowych 
    for (z = x; z <= y; z++) {
        stary = z.toString();
        czy = 0; nowy = "";
        for (i = 0; i < n; i++) {
            zn = "";
            zn = stary[i];

            //sprawdzenie czy cyfry się powtarzają
            for (j = 0; j < n; j++) if (j != i && zn[0] == stary[j]) czy = 1;

            //odejmujemy 48, gdyż kod cyfyr zero to 48, kod 1=49 itd.
            if (czy == 0 && zn.charCodeAt() - 48 > 0 && zn.charCodeAt(0) - 48 <= n)
                nowy = nowy + zn;
        }
        //drukowanie perumatcji w konsoli
        if (nowy.length == n) console.log(nowy, "\n");
    }
};


const perumatcja = function (A) {
    if (A.length == 1) { return [A] }
    else {
        let wynik = [];
        for (let i = 0; i < A.length; i++) {
            let N = perumatcja(A.filter(function (k) { return (k != A[i]) }));
            let n = N.length;
            for (let j = 0; j < n; j++)
                wynik.push([A[i]].concat(N[j]));
        }
        return wynik;
    }
};

//console.log(perumatcja([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(perumatcja([1, 2]));
console.log(perumatcja([1, 2, 3]));
