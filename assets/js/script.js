//Function to choose a length of at least 8 characters and no more than 128 characters

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
  var input = ['Yes', 'Y', 'yes', 'YES', 'y'];

  var number = window.prompt('Would you like to include numbers?');
  if (input.includes(number)) {
    characters += "0123456789";
  }

  var symbols = window.prompt('Would you like to include symbols?');
  if (input.includes(symbols)) {
    characters += "!@#$%^&*()-_=+~/?`><";
  }

  var lowercase = window.prompt('Would you like to include lowercase letters?');
  if (input.includes(lowercase)) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  var uppercase = window.prompt('Would you like to include uppercase letters?');
  if (input.includes(uppercase)) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  return characters;
}
//Function to create random characters
function randomCharacters(characterString) {
  var randomCharacters = characterString[Math.floor(Math.random() * characterString.length)]
  return randomCharacters;
}

//Main function that creates the string of the random characters
function constructPassword(characterString) {
  var passwordLength = passLength();
  var password = ' ';

  for (var i = 0; i < passwordLength; i++) {
    var generatedCharacters = randomCharacters(characterString);
    password += generatedCharacters
  }
  return password;
}

//Main function that generates and writes the password from the given information 
function writePassword() {
  var characterString = characteristicType();
  var password = constructPassword(characterString);

  if (characterString.length == 0) {
    alert('You must choose at least one character type.');
    var characterString = characteristicType();
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button- Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);



