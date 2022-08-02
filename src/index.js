const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let str = expr.split("**********");
  return str
    .map((value) => {
      const lettersAmount = value.length / 10;
      let decodedWord = "";
      for (let i = 0; i < lettersAmount; i++) {
        const letter = value.substr(i * 10, 10);

        let morzeLetter = [...letter].reduce((acc, element, index) => {
          if (index % 2 !== 0) {
            return acc;
          }
          const symbol = letter.substr(index, 2);

          if (symbol === "00") {
            return acc;
          } else if (symbol === "10") {
            return acc + ".";
          } else if (symbol === "11") {
            return acc + "-";
          }
        }, "");

        decodedWord = decodedWord + MORSE_TABLE[morzeLetter];
      }
      return decodedWord;
    })
    .join(" ");
}

module.exports = {
  decode,
};
