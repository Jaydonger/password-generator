// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = '0123456789';
var symbols = '!@#$%^&*()_+=<>';
var letters = 'abcdefghijklmnopqrstuvwxyz';
// Write password to the #password input
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function writePassword() {
  var userNumbers = prompt('Would you like your password to have numbers? (yes or no)');
    if(userNumbers !== 'Yes' && userNumbers !== 'Y' && userNumbers !== 'No' && userNumbers !== 'N') {
      userNumbers = capitalizeFirstLetter(userNumbers);
      if(userNumbers !== 'Yes' && userNumbers !== 'Y' && userNumbers !== 'No' && userNumbers !== 'N') {
        alert('Please enter a valid response');
        writePassword();
      }
    }
    // adds numbers variable to letters variable if user chose yes
    if(userNumbers === 'Yes' || userNumbers === 'Y' || userNumbers === 'yes' || userNumbers === 'y') {
      letters = letters.concat(numbers);
    }
    // check to see if .concat worked.
    console.log(letters);

    //var userSymbols = prompt('Would you like your password to have special symbols? (yes or no') {
      
    //}

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
