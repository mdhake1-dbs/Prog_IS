let intinp = (strid) => {

  validateInput(strid);
  return parseInt(document.getElementById(strid).value);
}

let strinp = (strid) => {

  validateInput(strid);
  return document.getElementById(strid).value;
}

let intarrinp = (strid) => {

  validateInput(strid);
  return document.getElementById(strid).value.split(" ").map((x => parseInt(x)));
}

let strarrinp = (strid) => {

  validateInput(strid);
  return document.getElementById(strid).value.split(" ");
}

let strdarrinpvalue = (id) => {

    const inputString = document.getElementById(id).value;
    const parts = inputString.split(":");

    if (parts.length !== 2) {
      
        throw new Error("Input must be in the format 'Factors : Number List'");
    }

    const divarr = parts[0].split(" ").filter(s => s.trim() !== "").map(Number);
    const numlist = parts[1].split(" ").filter(s => s.trim() !== "").map(Number);

    if (divarr.some(isNaN) || numlist.some(isNaN)) {

        throw new Error("All factors and numbers must be valid integers.");
    }

    return [divarr, numlist];
}


// let strdarrinpvalue = (strid) => {

//   validateInput(strid);

//   return document.getElementById(strid).value.split(":").map(row => row.trim().split(" ").map(Number));

// }
/*
let strdarrinpvaluesafe = (strid) => {
  try {
    
    validateInput(strid);

    let result = document.getElementById(strid).value.split(":").map(row => {

        let numbers = row.trim().split(" ").map(numStr => {
          let n = Number(numStr);
          if (Number.isNaN(n) || !Number.isInteger(n)) {
            throw new Error(`Invalid integer value: "${numStr}"`);
          }
          return n;
        });
        return numbers;
      });

    return result;

  } catch (error) {
    
    console.error("Error parsing input:", error.message);
    return []; // or rethrow / return null depending on your use case
  }
};
*/

let validateInput = (strid) => {

  const input = document.getElementById(strid).value.trim();

  if (input === "") {

    alert("Input cannot be empty!");
    return false;
  }
  else {

    return true;
  }
}
