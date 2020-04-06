const cipher {
  // ...
  function Cesar (offset, string) {
    let result = '';
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWYXZ';
    
    for (let i = 0; i < string.length; i += 1) {
        let char = string[i].toUpperCase();
        let alphabetIndex = alphabet.indexOf(char);
        let newChar = alphabet[(alphabetIndex + offset) % alphabet.length];
      
      if (char === ' ') {
        result += ' ';
      } else {
        result += newChar;
      }
    }
    
    return result;
  }
}

 

export default cipher;
