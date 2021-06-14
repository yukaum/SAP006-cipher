const cipher = {
  
  encode:
    function (offset, string){
      if (typeof offset !== "number" || typeof string !== "string"){
        throw TypeError("O valor é incompatível") 
      } 
                
      let code = "";
      let i;
      for (i=0; i < string.length; i++){
        const ascii = string[i].charCodeAt();
      
        if (offset <0){
          if (ascii >= 65 && ascii<= 90){
            code += String.fromCharCode(((ascii - 90 + offset)% 26) + 90);
          }
          else { 
            if (ascii >= 97 && ascii<= 122){
              code += String.fromCharCode(((ascii - 122 + offset)% 26) + 122);
            }
            else {
              code += string[i];
            }   
          }
        } 
        else {
          if (ascii >= 65 && ascii<= 90){
            code += String.fromCharCode(((ascii - 65 + offset)% 26) + 65);
          } 
          else {
            if (ascii >= 97 && ascii<= 122){
              code += String.fromCharCode(((ascii - 97 + offset)% 26) + 97);
            }
            else {
              code += string[i];
            }   
          }
        }
      }
    return code;
  }, 

  decode:
    function (offset, string){
      if (typeof offset !== "number" || typeof string !== "string"){
        throw new TypeError("O valor é incompatível")
      }

      let decode = "";
      let i;
      for (i=0; i < string.length; i++){
        const ascii = string[i].charCodeAt();
        
        if (offset <0){
          if (ascii >= 65 && ascii<= 90){
            decode += String.fromCharCode(((ascii - 65 - offset)% 26) + 65);
          }
          else {
            if (ascii >= 97 && ascii<= 122){
              decode += String.fromCharCode(((ascii - 90 - offset)% 26) + 90);
            }
            else {
              decode += string[i];
            }   
          }
        }
        else {
          if (ascii >= 65 && ascii<= 90){
            decode += String.fromCharCode(((ascii - 90 - offset)% 26) + 90);
          }
          else{
            if (ascii >= 97 && ascii<= 122){
              decode += String.fromCharCode(((ascii - 122 - offset)% 26) + 122);
            }
            else {
              decode += string[i];
            }
          }
        }
      }
    return decode;
  },       
};

export default cipher;