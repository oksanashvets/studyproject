

var allArgs =  process.argv;
var password = allArgs[2];

function obfuscate(subStr) {
  let obfuscatedPassword = "";

  for (let currentChar = 0; currentChar < subStr.length; currentChar++) {
    let currentLetter = subStr[currentChar];

    if (currentLetter === "a" || currentLetter === "A") {
      currentLetter = 4;
    }
    if (currentLetter === "e" || currentLetter === "E") {
      currentLetter = 3;
    }
    if (currentLetter === "o" || currentLetter === "O") {
      currentLetter = 0;
    }
    if (currentLetter === "l" || currentLetter === "L") {
      currentLetter = 1;
    }
    if (currentLetter === "s" || currentLetter === "S") {
      currentLetter = 5;
    }
    obfuscatedPassword += currentLetter;
  }
  console.log(obfuscatedPassword);
}

obfuscate(password);
