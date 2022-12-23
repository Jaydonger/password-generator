// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = '0123456789';
var symbols = '!@#$%^&*()_+=<>';
var letters = 'abcdefghijklmnopqrstuvwxyz';
var capLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var userNumbers;
var userSymbols;
var userCap;
var length;
// Write password to the #password input
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Add functionality to generate password function call.
function generatePassword() {
  retVal = "";
  for(i = 0, n = letters.length; i < length; i++){
    retVal += letters.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function writePassword() {
  // prompts user for length of password.
  letters = 'abcdefghijklmnopqrstuvwxyz';
  length = prompt('Enter a number between 8 and 128 for your passwords length.');

  // checks that number falls between 8 and 128.
    while(length < 8 || length > 128) {
      length = prompt('That number is invalid. Please enter a number between 8 and 128.');
    }
  
  // prompts user asking if they want numbers in their password.
  userNumbers = prompt('Would you like your password to have numbers? (yes or no)');
  userNumbers = capitalizeFirstLetter(userNumbers);
    if(userNumbers !== 'Yes' && userNumbers !== 'Y' && userNumbers !== 'No' && userNumbers !== 'N') {
      alert('Please enter a valid response');
      writePassword();
    }

    // adds numbers variable to letters variable if user chose yes
    if(userNumbers === 'Yes' || userNumbers === 'Y' || userNumbers === 'yes' || userNumbers === 'y') {
      letters = letters.concat(numbers);
    }

    // check to see if variables were added or not.
    console.log(letters);


    // prompts user for symbols
    userSymbols = prompt('Would you like your password to have special symbols? (yes or no')
    userSymbols = capitalizeFirstLetter(userSymbols);
      while(userSymbols !== 'Yes' && userSymbols !== 'Y' && userSymbols !== 'No' && userSymbols !== 'N') {
        alert('Please enter a valid response.');
        userSymbols = prompt('Would you like your password to have special symbols? (yes or no')
        userSymbols = capitalizeFirstLetter(userSymbols);
      }

    // adds symbols variables to letters variable if user chose yes.
    if(userSymbols === 'Yes' || userSymbols === 'Y' || userSymbols === 'yes' || userSymbols === 'y') {
      letters = letters.concat(symbols);
    }

    // check to see that symbols was added or not.
    console.log(letters);

    // prompt user for capital letters.
    userCap = prompt('Would you like your password to contain capital letters as well? (yes or no)')
    userCap = capitalizeFirstLetter(userCap);
    while(userCap !== 'Yes' && userCap !== 'Y' && userCap !== 'No' && userCap !== 'N') {
      alert('Please enter a valid response.');
      userCap = prompt('Would you like your password to contain capital letters as well? (yes or no)')
      userCap = capitalizeFirstLetter(userCap);
    }

    if(userCap === 'Yes' || userCap === 'Y' || userCap === 'yes' || userCap === 'y') {
      letters = letters.concat(capLetters);
    }

    // check to see that capital letters were added or not.
    console.log(letters);

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
