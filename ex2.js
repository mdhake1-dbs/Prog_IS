let euler1=()=> {
    
    let sum = 0;
    for (let i = 1; i < 10; i++) {
        
        if (i%3 == 0 || i%5 ==0){

            sum+=i;
        }
    }
    alert("The sum of numbers upto 10 divisible by 3 or 5 is "+sum);
}

let eulerCustom=(str1,str2,str3)=>{
    
    let d1 = intinp(str1);
    let d2 = intinp(str2);
    let n = intinp(str3);
    let sum = 0;
    for (let i = 1; i < n; i++) {
        
        if (i%d1 == 0 || i%d2 ==0){

            sum+=i;
        }
    }
    alert("The sum of numbers upto " + n + " divisible by " +d1 +" or " +d2+ " is "+sum);
}