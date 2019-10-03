function game() {
    var passwordLength = parseInt(prompt("How many characters, 8-128?"));
    //need to take the passwordLength variable and convert to number

    var passwordUpper = confirm("Do you want to include uppercase letters?");

    var passwordSpecial = confirm("Do you want to include special characters?");

    if (passwordLength > 128 || passwordLength < 8) {
        alert("Please pick a number between 8 and 128")
        game()

    } else {
        alert(passwordLength + " Is a great choice")
        //call password generation function
        passwordGeneration(passwordLength, passwordUpper, passwordSpecial)
    }
}
function setPassword(setWord){
    console.log("setit: " + setWord);
    var apples = document.getElementById("display");
    apples.innerHTML = setWord;
}
game()

function passwordGeneration(passwordLength, passwordUpper, passwordSpecial) {
    console.log(passwordLength, passwordUpper, passwordSpecial)
    console.log(typeof passwordLength)

    var allCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "&"]

    var upperNoSpecial = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "&"]

    var lowerNoSpecial = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    
    var pickedArray;
    if (passwordUpper === true && passwordSpecial === true) {
        pickedArray = allCharacters;

    } else if (passwordUpper != true && passwordSpecial === true) {
        pickedArray = lowerCharacters;        
    
    } else if (passwordUpper === true && passwordSpecial != true) {
        pickedArray = upperNoSpecial;
    }
    
    else {
        pickedArray = lowerNoSpecial;
    }
    console.log(pickedArray)

    var password = [];

    for (var i = 0; i < passwordLength; i++){
        var randomNum = Math.floor((Math.random() * pickedArray.length - 1) +0);

        password.push(pickedArray[randomNum]);
    
    }
    var pw = password.join("");
    setPassword(pw);
    //trying to get pw to print in the "display" id from the html
    // console.log("meeee" + pw)
    // var apples = document.getElementById("display");
    // apples.innerHTML = pw;
    console.log(password);
    console.log(pw + "password");
}

function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");
    
    alert("Password copied to clipboard");
}



// passwordGeneration()