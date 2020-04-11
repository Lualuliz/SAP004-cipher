import cipher from './cipher.js'

let button1 = document.getElementById("button1")

function text() {
  

  let firstText = document.getElementById("box1").value
  
  let key = document.getElementById('roll').valueAsNumber

  let secondText = document.getElementById("box2")

  let message = secondText.value = firstText


  let encodeMessage = cipher.encode(key,message)

 secondText.value = encodeMessage

}

let button2 = document.getElementById("button2")

function text2(){

  let firstText = document.getElementById("box1").value
  
  let key = document.getElementById('roll').valueAsNumber

  let secondText = document.getElementById("box2")

  let message = secondText.value = firstText


  let decodeMessage = cipher.decode(key,message)

 secondText.value = decodeMessage


}


button1.addEventListener("click",text)
button2.addEventListener("click",text2)



console.log(cipher)
