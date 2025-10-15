let func1 = (str1, str2) => {

    setvalue(str1, document.getElementById(str2).innerText)
}

let func2 = (str1) => {

    document.getElementById(str1).innerHTML = "Hello World!";
}

let func3 = (str1, lastelm) => {

    const newDiv = document.createElement('div');
    newDiv.textContent = "I’m a new element!";
    newDiv.id = str1;
    const ref = document.getElementById(lastelm);
    ref.parentNode.insertBefore(newDiv, ref.nextSibling);
    //document.body.appendChild(newDiv);
}

let func4 = (str1) => {

    const box = document.getElementById(str1);
    if (box) {
        box.style.backgroundColor = "aquamarine";
        box.style.color = "black";
        box.style.padding = "10px";
        box.style.borderRadius = "8px";
    } else {
        console.log("Element not found!");
    };

};

let func5 = (str1) => {
    const newDiv = document.createElement('div');
    newDiv.textContent = "I’m Child of 2nd Element acting as the container!";
    document.getElementById(str1).appendChild(newDiv);
};



let func6 = (str1) => {

    const host = document.getElementById(str1);
    const shadow = host.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
    <style>
      p { color: beige; font-weight: bold; }
    </style>
<slot></slot>
    <p>This content lives inside the Shadow DOM!</p>
  `;
}


