
let calSum = (str1, str2) => {

    let inparr = strdarrinpvalue(str1);
    let divarr = inparr[0];
    let numlist = inparr[1];

    let sum = 0;
    
    for (let i = 0; i < numlist.length; i++) {

        if (divarr.some(d => numlist[i] % d === 0)) {

            sum += numlist[i];
        }
    }
    const str = [sum, ...inparr.map(row => row.join(" "))].join(":");
    setvalue(str2, str);
}