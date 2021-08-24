var generateBtn = document.querySelector("#generate");
var upCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowCase = ["abcdefghijklmnopqrstuvwxyz"];
var txtSymbols = ["!@#$%^&*()_+{}|:<>?~"];
var numbers = ["1234567890"];
var charactersString = ''
var characterArray = []
var passwordLength

function generatePassword(){
    passLength = prompt("How many long do you want your password to be? \n(Enter a number between 8 and 128)") ; 
    if (passLength >= 8 && passLength <= 128){
      console.log("My password length is " + passLength + " characters long");
    passwordLength = parseInt(passLength);
    console.log(passwordLength);
    var chooseUpCase = confirm("Do you want to include capital letters?");
    var chooseLowCase = confirm("Do you want to include lower case letters?");
    var chooseTxtSymbols = confirm("Do you want to include symbols? (i.e.: !@#$%^&*)");
    var chooseNumbers = confirm("Do you want to include numbers?"); 
    console.log(password)} else if (passLength < 8 || passLength > 128) {
          alert("Please enter a valid number between 8 and 128."); 
          generatePassword();
      } 
      if (chooseUpCase) {
        charactersString += upCase; }
      if (chooseLowCase) {
        charactersString += lowCase; }
      if (chooseTxtSymbols ) {
      charactersString += txtSymbols; } 
      if (chooseNumbers) {
        charactersString += numbers;
        } 
        
      console.log ("My password now includes " + charactersString + " as options to choose from")

      characterArray = charactersString.split('');
      console.log(characterArray)

      let generatedPassword = ''
      for (let i = 0 ; i < passwordLength; i++) {
        var randomizing = Math.floor(Math.random() * characterArray.length);
        generatedPassword += characterArray[randomizing]
      }
      console.log(generatedPassword);

      var passwordText = document.querySelector("#password");
      passwordText.value = generatedPassword;
    
}
//I have no clue why my FOR LOOP is not working UGGGHHHH  

// Write password to the #password input
function writePassword(){
  var password = generatePassword();}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//steps to help me understand how to make this: 

// I want to create differrent arrays for each option of imput to the password

// create a prompt asking how long the user wants the password to be, with the condidtion that it must be between 8 and 128 

//if else - if the user inputs a number between 8 and 128 then continue to next prompts, if not, alert the user that they must imput a number between 8 and 128. 

// create a prompt for each variation of letters and symbols asking if the user wants to use those in their password with a yes or no answer

//after each prompt JS will add each string of characters the user says yes to, to the main string that the user's password will be chosen from

// I then want the JS to randomly chose randomly from the combined string, the amount of times that the user specified

//if the user tries and cancel the prompt it will ask the user "are you sure you want to exit?" then when okay is hit it will exit, and not generate a password

//add yes and y as possible answers, then add a thing to convert the value to all lowercase. 

// once the password is generated, write it out in the box in the password section 

//steps to help me understand how to make this: 

// I want to create differrent arrays for each option of imput to the password

// create a prompt asking how long the user wants the password to be, with the condidtion that it must be between 8 and 128 

//if else - if the user imputs a number between 8 and 128 then continue to next prompts, if not, alert the user that they must imput a number between 8 and 128. 

// create a prompt for each variation of letters and symbols asking if the user wants to use those in their password with a yes or no answer

//after each prompt JS will add each string of characters the user says yes to, to the main string that the user's password will be chosen from

// I then want the JS to randomly chose randomly from the combined string, the amount of times that the user specified

//if the user tries and cancel the prompt it will ask the user "are you sure you want to exit?" then when okay is hit it will exit, and not generate a password

//add yes and y as possible answers, then add a thing to convert the value to all lowercase. 

// once the password is generated, write it out in the box in the password section 

