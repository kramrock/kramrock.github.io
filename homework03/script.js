function game() {
    var passwordLength = parseInt(prompt("How many characters, 1-128?"));
    //need to take the passwordLength variable and convert to number

    var passwordUpper = confirm("Do you want to include uppercase letters?");

    if (passwordLength > 128 || passwordLength < 1) {
        alert("Please pick a number between 1 and 128")
        game()

    } else {
        alert(passwordLength + " Is a great choice")
        //call password generation function
        passwordGeneration(passwordLength, passwordUpper)
    }
}

game()

function passwordGeneration(passwordLength, passwordUpper) {
    console.log(passwordLength, passwordUpper)
    console.log(typeof passwordLength)

    var allCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    var pickedArray;
    if (passwordUpper === true) {
        pickedArray = allCharacters;

    } else {
        pickedArray = lowerCharacters;
    }
    console.log(pickedArray)

    var password = [];

    for (var i = 0; i < passwordLength; i++){
        var randomNum = Math.floor((Math.random() * allCharacters.length - 1) +0);

        password.push(allCharacters[randomNum]);
        
    }
    var pw = password.join("");
    console.log(password);
    console.log(pw);
}


passwordGeneration()