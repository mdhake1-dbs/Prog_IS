let intinp=(strid)=>{

    validateInput(strid);
    return parseInt(document.getElementById(strid).value);
}

let strinp=(strid)=>{

    validateInput(strid);
    return document.getElementById(strid).value;
}

let intarrinp=(strid)=>{

    validateInput(strid);
    return document.getElementById(strid).value.split(" ").map((x=>parseInt(x)));
}

let strarrinp=(strid)=>{

    validateInput(strid);
    return document.getElementById(strid).value.split(" ");
}

let validateInput=(strid)=>{

  const input = document.getElementById(strid).value.trim();

  if (input === "") {

    alert("Input cannot be empty!");
    return false;
  }
  else {

    return true;
  }
}
