// Assignment code here
//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page




//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
function passLength() {
  var passwordLength = window.prompt('How many characters are in your password?');

  if (passwordLength <= 8) {
    window.alert("Passowrd must be at least 8 characters.")
    passLength();
  }
  else if (passwordLength >= 128) {
    window.alert("Password must be less than 128 characters.")
    passLength();
  }
  return passwordLength;
}

//Function to ask why type of characters they want in the password 
function characteristicType() {

  var characters = " "
  var input = [ 'Yes', 'Y', 'yes', 'YES', 'y']

  var number = window.prompt('Would you like to include numbers?')
  if (input.includes(number)) {
    characters += "0123456789"
  }

  var symbols = window.prompt('Would you like to include symbols?')
  if (input.includes(symbols)) {
    characters += "!@#$%^&*()-_=+~/?`><"
  }

  var lowercase = window.prompt('Would you like to include lowercase letters?')
  if (input.includes(lowercase)) {
    characters += "abcdefghijklmnopqrstuvwxyz"
  }
  
  var uppercase = window.prompt ('Would you like to include uppercase letters?')
  if (input.includes(uppercase)) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  return characters;
}

//CALL FUNCTION
passLength();
// Write password to the #password input
//this is the main function- it will generate final password
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;
///}

// Add event listener to generate button
// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");
//generateBtn.addEventListener("click", writePassword);


