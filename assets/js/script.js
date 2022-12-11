// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function generatePassword() {

// variable group for password complexity
var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";

// Defining password as empty string
var password = "";

// Prompts for which character types to include

var includelowercase = confirm("Include lowercase characters in password?");
var includeuppercase = confirm("Include uppercase characters in password?");
var includenumeric = confirm("Include numberical characters in password?");
var includespecial = confirm("Include special characters in password?");

// Creating an array that stores user selections
var passwordvars = [];
if (includelowercase) { passwordvars = passwordvars.concat(lowercase);}
if (includeuppercase) { passwordvars = passwordvars.concat(uppercase);}
if (includenumeric) { passwordvars = passwordvars.concat(numeric);}
if (includespecial) { passwordvars = passwordvars.concat(special);}

// Alert if no options were selected
if (passwordvars.length === 0) {
  alert("You must select at least one character option.");
  return;
}

// Password length prompt
var PasswordLength = prompt("Enter a password length between 12 and 128");
// Validating that input is within specified range
if (isNaN(PasswordLength) || PasswordLength < 12 || PasswordLength > 128) {
  alert("Invalid input, please enter a number between 12 and 128");
  return;
}

// Password generation with for loop
for (var i = 0; i < PasswordLength; i++) {
  var randomIndex = Math.floor(Math.random() * passwordvars.length);
  var randomPass = passwordvars[randomIndex];

// Adding result to password variable
  password += randomPass;
}

return password;

}


// var password = writePassword();
// var passwordText = document.querySelector("#password");

//  passwordText.value = password;





// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
