let euler1=()=> {
    
    let sum = 0;
    for (let i = 1; i < 10; i++) {
        
        if (i%3 == 0 || i%5 ==0){

            sum+=i;
        }
    }
    alert("The sum of numbers upto 10 divisible by 3 or 5 is "+sum);
}

let eulerCustom=()=>{
    
    let d1 = parseInt(document.getElementById('a').value);
    let d2 = parseInt(document.getElementById('b').value);
    let n = parseInt(document.getElementById('n').value);
    let sum = 0;
    for (let i = 1; i < n; i++) {
        
        if (i%d1 == 0 || i%d2 ==0){

            sum+=i;
        }
    }
    alert("The sum of numbers upto " + n + " divisible by " +d1 +" or " +d2+ " is "+sum);
}