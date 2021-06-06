import cipher from './cipher.js';

console.log(cipher);

const toCipher = document.getElementById("string-input");
const offset = document.getElementById("rot");
const outputCode = document.getElementById("code");



toCipher.onkeyup = function() {upperCipher()};
function upperCipher() {
  toCipher.value = toCipher.value.toUpperCase();
  return toCipher.value;
}

document.getElementById("submitToCipher").addEventListener("click", startCipher);
function  startCipher() {
  return outputCode.innerHTML = cipher.encode(parseInt(offset.value), toCipher.value);
}

const decipher = document.getElementById("decipher");
const outputMessage = document.getElementById("message");

decipher.onkeyup = function() {upperDecipher()};
function upperDecipher() {
  decipher.value = decipher.value.toUpperCase();
  return decipher.value;
}

document.getElementById("submitDecipher").addEventListener("click", startDecipher);
function  startDecipher() {
   return outputMessage.innerHTML = cipher.decode(parseInt(offset.value), decipher.value);
  }
  


document.getElementById("clean").addEventListener("click", clean);
function clean(){
  document.getElementById("myForm").reset();
  document.getElementById("code").innerHTML = "";
  document.getElementById("message").innerHTML = "";
  
}
