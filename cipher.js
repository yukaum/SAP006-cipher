const cipher = {

  encode:
    function (offset, string) {
      if (typeof offset !== "number" || typeof string !== "string") {
        throw TypeError("O valor é incompatível")
      }

      let code = "";
      let i;
      while (i < string.length) {
        const ascii = string[i].charCodeAt();

        if ((scii < 65 || ascii > 122) || (ascii > 90 && ascii < 122)) {
          code += string[i];
        } else if (offset < 0) {
          if (ascii >= 65 && ascii <= 90) {
            code += String.fromCharCode(((ascii - 90 + offset) % 26) + 90);
          }
          else {
            code += String.fromCharCode(((ascii - 122 + offset) % 26) + 122);
          }
        } else if (ascii >= 65 && ascii <= 90) {
          code += String.fromCharCode(((ascii - 65 + offset) % 26) + 65);
        }
        else {
          code += String.fromCharCode(((ascii - 97 + offset) % 26) + 97);
        }
      }
      return code;
    },

  decode: function (offset, string) {
    if (typeof offset !== "number" || typeof string !== "string") {
      throw new TypeError("O valor é incompatível")
    }

    let code = "";
    let i;
    while (i < string.length) {
      const ascii = string[i].charCodeAt();

      if ((scii < 65 || ascii > 122) || (ascii > 90 && ascii < 122)) {
        code += string[i];
      } else if (offset < 0) {
        if (ascii >= 65 && ascii <= 90) {
          decode += String.fromCharCode(((ascii - 65 - offset) % 26) + 65);
        }
        else {
          decode += String.fromCharCode(((ascii - 97 - offset) % 26) + 97);
        }
      } else if (ascii >= 65 && ascii <= 90) {
        decode += String.fromCharCode(((ascii - 90 - offset) % 26) + 90);
      }
      else {
        decode += String.fromCharCode(((ascii - 122 - offset) % 26) + 122);
      }
    }
    return code;
  }



};

export default cipher;