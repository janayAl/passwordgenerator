// Assignment Code




var generateBtn = document.querySelector("#generate");
//  var password = generatePassword();
var passwordText = document.querySelector("#password");

//Password Data
var characterNum = "0123456789";
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSpecial = "!@#$%^&*,-;:<>=~`/()_+!?";
var passwordLength = 8-120;
var passwordValue = "";
//var a = 'yiueyrhksjfhksydfiu';

//goal >>> generate password and display it to the user;
//(i) capture user input --done
//(ii) validate input lenght
//(iii) choose a random password from arrayofPasswords
//(iv) display choosen password

// Write password to the #password input
var writePassword = function (e) {
  var characterLength = prompt("How many characters would you like to have in your password? (8-128)")

  var charset = ""

  var confirmNum = confirm("Do you want numbers in your password?")
  var confirmLower = confirm("Do you want lowercase in your password?")
  var confirmUpper = confirm("Do you want uppercase in your password?")
  var confirmSpecial = confirm("Do you want special in your password?")

  if(confirmNum == true) {
    charset += characterNum
  }

  if(confirmLower == true) {
    charset += charLower
  }

  if(confirmUpper == true) {
    charset += charUpper
  }

  if(confirmSpecial == true) {
    charset += charSpecial
  }

  console.log(charset)

  var randomPass = ""
  for(i=0; i<characterLength; i++){
    // console.log(i)
    var randomIndex = Math.floor(Math.random() * charset.length); //0 1 2... however many chars were added to the set
    randomPass += charset.charAt(randomIndex)
  }
  console.log(randomPass)
  passwordText.innerHTML = randomPass
  // passwordText.setAttribute("class", "whateverClass")
  // var userInput = passwordText.value.trim();
  // var chooseItem = arrayOfPasswords[randomIndex];
  // if (userInput.length < passwordLength) {
  //   alert('put more words dude!!!');
  // } else {
  //   console.log(chooseItem)
  // }


  //create password

  // passwordTextValue = "";

  // for (var i = 0; i < passwordLength; i++){
  //   var number = Math.floor(Math.random() * characters.length);
  //   passwordTextValue += characters.substring(number, number + 1);
  // }

  // passwordText.value = password;

  function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    
    // Displaying the value
    alert(inputVal);
}

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//insert place holde value //