import cipher from './cipher.js';

let button1 = document.getElementById("button1");



function text() {
  

  let firstText = document.getElementById("box1").value;
  
  let key = document.getElementById('rolagem').value;

  let secondText = document.getElementById("box2");

  let message = secondText.value = firstText;


  let encodeMessage = cipher.encode(key,message);

 secondText.value = encodeMessage
;
  

  


}
  


button1.addEventListener("click",text);


console.log(cipher);
