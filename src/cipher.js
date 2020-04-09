const cipher = {
  encode:(offset, string) => {
    let result = '';
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    for (let i = 0; i < string.length; i++) {
        let char = string[i].toUpperCase();
        let alphabetIndex = alphabet.indexOf(char);
        let newChar = alphabet[(alphabetIndex + offset) % alphabet.length];
      
      if (char === ' ') {
        result += ' ';
      } else {
        result += newChar;
      };
    };
  
    return result;
  
},

decode:(string,offset) => {
  let result = "";
  offset = (26 - offset) % 26;
  result = encode(string,offset);
  return result;


},
}




export default cipher;
