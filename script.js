

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

  // May have to change this to booleans with false for each variable hasNumeric, hasLowercase, hasUppercase, hasSymbols
  if (length === " ") {
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


  var passwordOptions = {
  length: length,
  hasNumeric: hasNumeric,
  hasLowercase: hasLowercase,
  hasUppercase: hasUppercase,
  hasSymbols: hasSymbols
  };
  return PasswordOptions;
}

// function to get random element from array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

// function to generate password with what answers user gives
function generatePassword() {
var options = getPasswordOptions ();

// variable that stores password while concatenating 
var result = [];

// variable that stores character types to include in password
var characterTypes = [];

// variable that includes one of each type of character to make sure it's used
var charactersUsed = [];


// Condition statements for array usage
//  ----------------------------------

// adds numeric characters array to characterTypes
// Use getRandom to add random numeric character to charactersUsed

if (options.hasNumericCharacters) {
characterTypes = characterTypes.concat (numeric); charactersUsed.push(getRandom(numeric));
}

// repeated same pattern from above, just updated variable properties
if (options.hasLowerCasedCharacters) {
    characterTypes = characterTypes.concat (lowercase); charactersUsed.push(getRandom(lowercase));
}

// repeated same pattern from above, just updated variable properties
if (options.hasUpperCasedCharacters) {
    characterTypes = characterTypes.concat (uppercase); charactersUsed.push(getRandom(uppercase));
}

// repeated same pattern from above, just updated variable properties
if (options.hasSpecialCharacters) {
    characterTypes = characterTypes.concat (symbols); charactersUsed.push(getRandom(symbols));
}

// for loop to select random values from the character types
for (var i = 0; i < options.length; i++) {
var characterTypes = getRandom
(characterTypes);
result.push(characterTypes);
}

// for loops to include at least one of the charactersUsed
for (var i = 0; i < charactersUsed.length; i++) {
  result[i] = charactersUsed[i];
  }

// return result as a string and send to the function writePassword to write the password
return result.join('');

// generate password button
  var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}