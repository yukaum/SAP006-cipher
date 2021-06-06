const cipher = {
  
  encode:
    function (offset, string){
      let code = "";
      let i;
      for (i=0; i < string.length; i++){
        const ascii = string[i].charCodeAt();

        if (ascii >= 65 && ascii<= 90){
          code += String.fromCharCode(((ascii - 65 + offset)% 26) + 65);
        }
        else {
          code += string[i];
        }   
      }
      return code;
    }, 

  decode:
    function (offset, string){
      let decode = "";
      let i;
      for (i=0; i < string.length; i++){
        const ascii = string[i].charCodeAt();
        
        if (ascii >= 65 && ascii<= 90){
          decode += String.fromCharCode(((ascii - 90 - offset)% 26) + 90);
        }
        else {
          decode += string[i];
        }
      }
    return decode;
  },  
           
};



export default cipher;
