const passwordBox = document.getElementById("password");
const length = 12;

//variables that store different password characters
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialSymbols = "@#$%&_()+<>?:;=!^*?.-";

const allChars = upperCase + lowerCase + number + specialSymbols;

//function that generates random password
function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];


    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

//function that copies password
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");

    alert("password copied!");
}
