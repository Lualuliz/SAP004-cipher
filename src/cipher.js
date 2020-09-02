const cipher = {
  encode: (offset, string) => {
    if (typeof offset != typeof 0) {
      throw new TypeError();
    } else if (typeof string != typeof "") {
      throw new TypeError();
    }

    let result = "";
    let alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    for (let i = 0; i < string.length; i++) {
      let char = string[i].toUpperCase();
      let alphabetIndex = alphabet.indexOf(char);
      let newChar = alphabet[(alphabetIndex + offset) % alphabet.length];

      if (char === " ") {
         result += " ";
      } else {
       result += newChar;
      }
    }

    return result;
  },

  decode: (offset, string) => {
    if (typeof offset != typeof 0) {
      throw new TypeError();
    } else if (typeof string != typeof "") {
      throw new TypeError();
    }
    let result = "";
    let alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    for (let i = 0; i < string.length; i++) {
      let char = string[i].toUpperCase();
      let alphabetIndex = alphabet.indexOf(char);

      let newChar =
        alphabet[
          (alphabetIndex + alphabet.length + alphabet.length - offset) %
            alphabet.length
        ];

      if (char === " ") {
        result += " ";
      } else {
        result += newChar;
      }
    }

    return result;
  },
};

export default cipher;




