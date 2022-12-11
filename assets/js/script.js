// Password generator

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

// arrays for character groups
var special = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/~`";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";

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
if (isNaN(passwordLength) || passwordLength < 12 || passwordLength > 32) {
  alert("Invalid input, please enter a number between 12 and 32");
  return;
}

// Password generation with for loop

for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * passwordChars.length);
  var randomChar = passwordChars[randomIndex];
  password += randomChar;
}

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