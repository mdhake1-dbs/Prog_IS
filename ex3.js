let eulerList1 = (str1, str2, str3) => {

    let m1 = intinp(str1);
    let m2 = intinp(str2);
    alert("M1 = " + m1 + " M2 = " + m2);

    let myar1 = intarrinp(str3);

    let sum = 0;
    for (let i = 0; i < myar1.length; i++) {
        if (myar1[i] % m1 == 0 || myar1[i] % m2 == 0) {

            sum += myar1[i];
        }
    }
    alert("Sum of Multiples = " + sum);
}

let eulerList2 = (str1, str2) => {

    let divarr = intarrinp(str1);
    let numlist = intarrinp(str2);

    let sum = 0;

    //Logic - 1
    for (let i = 0; i < numlist.length; i++) {
        if (divarr.some(d => numlist[i] % d === 0)) {
            sum += numlist[i];
        }
    }

    //Logic - 2
    /*
    sum = myar1.reduce((acc, val) => {
        return divisors.some(d => val % d === 0) ? acc + val : acc;
    }, 0);
    */


    alert("Sum of Multiples = " + sum);
}
