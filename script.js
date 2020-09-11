// Assignment Code
var generateBtn = document.querySelector("#generate");


var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  console.log(numeric)

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  console.log(lowercase)

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log(uppercase)

var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
console.log(symbols)

function generatePassword() {
  var length = parseInt(
  prompt("How many characters do you want in your password?")
  );
  }

  if (length < 8) {
    alert("Password length must be at least 8 characters!")
  }

  if (length > 129) {
    alert("Password length must be no more than 129 characters!")
  }

  if (length === "") {
    alert("Password must contan characters!")
  }

// if (aka else) (user?)choice is between 8 and 129 characters
//   then go to the next prompt

  var lowercase = confirm("Do you want your password to include lowercase letters?")
//   if (user?)choice = yes to lowercase
//   then include lowercase array to choose from

//   else (user?)choice = no to lowercase
//   then don't include lowercase array to choose from

  var uppercase = confirm("Do you want your password to include uppercase letters?")
//   if (user?)choice = yes to uppercase
//   then include uppercase array to choose from

//   else (user?)choice = no to uppercase
//   then don't include uppercase array to choose from

  var symbols = confirm("Do you want your password to include special characters?")
//   if (user?)choice = yes to symbols
//   then include symbols array to choose from

//   else (user?)choice = no to symbols
//   then don't include symbols array to choose from


  
  var together = [Math.floor(Math.random() * 9)]
  

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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}