// Password generator

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

// arrays for character groups
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Prompts define which character types to include
var includelowercase = confirm("Include lowercase characters in password?");
var includeuppercase = confirm("Include uppercase characters in password?");
var includenumeric = confirm("Include numberical characters in password?");
var includespecial = confirm("Include special characters in password?");

// Creating an array that stores user selections
var passwordChars = [];
if (includelowercase) { passwordChars = passwordChars.concat(lowercase); }
if (includeuppercase) { passwordChars = passwordChars.concat(uppercase); }
if (includenumeric) { passwordChars = passwordChars.concat(numeric); }
if (includespecial) { passwordChars = passwordChars.concat(special); }

// Alert if no options were selected
if (passwordChars.length === 0) {
  alert("You must select at least one character option.");
  return;
}


// Password length prompt
var passwordLength = prompt("Enter a password length between 12 and 32");
// Validating that input is within specified range
var passwordLengthNum = parseInt(passwordLength);
if (isNaN(passwordLengthNum) || passwordLengthNum < 12 || passwordLengthNum > 32) {
  alert("Invalid input, please enter a number between 12 and 32");
  console.log(passwordLengthNum);
  return;
}


// Password generation with for loop
var password = "";
for (var i = 0; i < passwordLengthNum; i++) {
  var randomIndex = Math.floor(Math.random() * passwordChars.length);
  var randomChar = passwordChars[randomIndex];
  password += randomChar;
}

console.log("Generated password: " + password);

var passwordInput = document.querySelector("#password");
passwordInput.value = password;

var confirmPassword = confirm("Your password is: " + password + " Click OK to use this password, or click Cancel to generate a new password.");

  if (confirmPassword) {
    return password;
  } else {
    return generatePassword();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);