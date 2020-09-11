

// All of the values available to be part of the password
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
//  

// Created function to group together if else statements, confirms, and prompts
function getPasswordOptions() {
var length = parseInt(
  prompt("How many characters do you want in your password?")
  );

  if (isNaN(length) === true) {
alert("Password length must be a number");
return;
  }

  if (length < 8) {
    alert("Password length must be at least 8 characters!");
    return;
  }

  if (length > 129) {
    alert("Password length must be no more than 129 characters!");
    return;
  }

  if (length === "") {
    alert("Password must contan characters!");
    return;
  }
}

var hasNumeric = confirm(
  "Do you want your password to include numbers?")
//   if (user?)choice = yes to numeric
//   then include numeric array to choose from
//   else (user?)choice = no to numeric
//   then don't include numeric array to choose from

  var hasLowercase = confirm(
    "Do you want your password to include lowercase letters?");
//   if (user?)choice = yes to lowercase
//   then include lowercase array to choose from
//   else (user?)choice = no to lowercase
//   then don't include lowercase array to choose from

  var hasUppercase = confirm(
    "Do you want your password to include uppercase letters?");
//   if (user?)choice = yes to uppercase
//   then include uppercase array to choose from
//   else (user?)choice = no to uppercase
//   then don't include uppercase array to choose from

  var hasSymbols = confirm(
    "Do you want your password to include special characters?");
//   if (user?)choice = yes to symbols
//   then include symbols array to choose from
//   else (user?)choice = no to symbols
//   then don't include symbols array to choose from


function generatePassword() {
var options = getPasswordOptions ();

}
  
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

  var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}