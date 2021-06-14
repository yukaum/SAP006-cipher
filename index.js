import cipher from './cipher.js';

console.log(cipher);

const input = document.getElementById("string-input");
const offset = document.getElementById("rot");
const outputMessage = document.getElementById("message");


const slider = document.getElementById("slider");
const range =[-33,-24,-23,-22,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

/*let range = [];
for (let i=-25; i<26; i++){
  range.push(i);
  if (range[i] === 0){ 
    range.splice(i, 1); //(index, how many)
  }
}*/

offset.innerHTML = range[offset.innerHTML.value]
slider.oninput = function (){
offset.value = range[slider.value];
}    
slider.oninput();

function  startCipher() {
  return outputMessage.innerHTML = cipher.encode(parseInt(offset.value), input.value);
}
document.getElementById("submit-cipher").addEventListener("click", startCipher);  
  

function  startDecipher() {
  return outputMessage.innerHTML = cipher.decode(parseInt(offset.value), input.value);
}
document.getElementById("submit-decipher").addEventListener("click", startDecipher);  


document.getElementById("btn-copy").addEventListener("click", copy);
function copy(){
  outputMessage.select();
  document.execCommand("copy");
}


console.log(input.value);
console.log(offset.value);