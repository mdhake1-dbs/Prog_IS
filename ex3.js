let euler1 = (str1, str2, str3) => {

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
