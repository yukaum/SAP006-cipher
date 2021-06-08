import cipher from './cipher.js';

console.log(cipher);

const input = document.getElementById("string-input");
const offset = document.getElementById("rot");
const outputMessage = document.getElementById("message");

input.onkeyup = function() {upperCipher()};
function upperCipher() {
  input.value = input.value.toUpperCase();
  return input.value;
}

document.getElementById("submitToCipher").addEventListener("click", startCipher);
function  startCipher() {
  return outputMessage.innerHTML = cipher.encode(parseInt(offset.value), input.value);
}  
  

document.getElementById("submitDecipher").addEventListener("click", startDecipher);
function  startDecipher() {
  return outputMessage.innerHTML = cipher.decode(parseInt(offset.value), input.value);
}
  

 