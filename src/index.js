import cipher from './cipher.js';

let button1 = document.getElementById("button1");


function text() {
  let firstText = document.getElementById("box1").value;
  let secondText = document.getElementById("box2");
  
  secondText.value = firstText;
}
firstText = result;

button1.addEventListener("click",text);


console.log(cipher);
