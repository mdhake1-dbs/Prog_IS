let safecalSum = (str1, str2) => {

    try {
        let inparr = strdarrinpvalue(str1);
        let divarr = inparr[0];
        let numlist = inparr[1];

        let sum = 0;

        for (let i = 0; i < numlist.length; i++) {

            if (divarr.some(d => d !== 0 && numlist[i] % d === 0)) {
                sum += numlist[i];
            }
        }

        const str = [sum, ...inparr.map(row => row.join(" "))].join(":");
        //Optional Alert
        //alert(str2 + str)
        setvalue(str2, str);

    } catch (error) {

        console.error("An error occurred:", error.message);
        setvalue(str2, "ERROR: " + error.message);
        //Optional Alert
        //alert(str2 + "ERROR: " + error.message)
    }
}