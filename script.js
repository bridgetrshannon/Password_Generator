// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

  passwordText.value = password;

  for (let i = 0; i < lowercase.length; i++) {
    const element = lowercase[i];
  }

  for (let i = 0; i < uppercase.length; i++) {
    const element = uppercase[i];
  }

  for (let i = 0; i < numeric.length; i++) {
    const element = numeric[i];
  }

  for (let i = 0; i < symbols.length; i++) {
    const element = symbols[i];
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);