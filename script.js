// Assignment Code
var generateBtn = document.querySelector("#generate");

  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

  passwordText.value = password;

  var numeric = prompt("How many characters do you want in your password?");
  var lowercase = confirm("Do you want your password to include lowercase letters?");
  var uppercase = confirm("Do you want your password to include uppercase letters?");
  var symbols = confirm("Do you want your password to include special characters?");

  var password = [Math.floor(Math.random()]


  for (let i = 0; i < 27; i++) {
    const element = lowercase[i];
  }

  for (let i = 0; i < 27; i++) {
    const element = uppercase[i];
  }

  for (let i = 0; i < 10; i++) {
    const element = numeric[i];
  }

  for (let i = 0; i < 31; i++) {
    const element = symbols[i];
  }

}

// Conditional for the next prompts after password length
if (user?)choice <= 7 characters
  then display alert saying password must be at least 8 characters

if (user?)choice >+ 129 characters
  then display alert saying password must be no more than 129 characters

if (user?)choice is between 8 and 129 characters
  then go to the next prompt

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
function generatePassword()


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);