// Input Fields
const nameOne = document.getElementById("first-name");
const nameTwo = document.getElementById("last-name");
const emailField = document.getElementById("email-field");
const passwordField = document.getElementById("password-field");
// Error Icons
const firstErrorIcon = document.getElementById("first-icon");
const lastErrorIcon = document.getElementById("last-icon");
const emailErrorIcon = document.getElementById("email-icon");
const passwordErrorIcon = document.getElementById("password-icon");
// Error Messages
const nameOneError = document.getElementById("first-name-error");
const nameTwoError = document.getElementById("last-name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

function validateLettersOne() {


    if (nameOne.value == "") {
        nameOneError.style.display = "block";
        nameOneError.innerHTML = "First Name cannot be empty";
        nameOne.style.borderColor = "hsl(0, 100%, 74%)";
        nameOne.style.border = "solid 2px  hsl(0, 100%, 74%)";
        firstErrorIcon.style.display = "block";
        return false;

    } else if (!nameOne.value.match(/^[a-zA-Z]+$/)) {
        nameOneError.style.display = "block";
        nameOneError.innerHTML = "Name can only contain letters";
        nameOne.style.borderColor = "hsl(0, 100%, 74%)";
        nameOne.style.border = "solid 2px  hsl(0, 100%, 74%)";
        firstErrorIcon.style.display = "block";
        return false;
    }
    else {
        nameOneError.style.display = "none";
        nameOne.style.borderColor = "limegreen";
        nameOne.style.border = "solid 2px limegreen";
        firstErrorIcon.style.display = "none";
        return true;
    }
};
function validateLettersTwo() {
    if (nameTwo.value == "") {
        nameTwoError.style.display = "block";
        nameTwoError.innerHTML = "Last Name cannot be empty";
        nameTwo.style.borderColor = "hsl(0, 100%, 74%)";
        nameTwo.style.border = "solid 2px  hsl(0, 100%, 74%)";
        lastErrorIcon.style.display = "block";
        return false;

    } else if (!nameTwo.value.match(/^[a-z A-Z]+$/)) {
        nameTwoError.style.display = "block";
        nameTwoError.innerHTML = "Name can only contain letters";
        nameTwo.style.borderColor = "hsl(0, 100%, 74%)";
        nameTwo.style.border = "solid 2px  hsl(0, 100%, 74%)";
        lastErrorIcon.style.display = "block";
        return false;
    }
    else {
        nameTwoError.style.display = "none";
        nameTwo.style.borderColor = "limegreen";
        nameTwo.style.border = "solid 2px limegreen";
        lastErrorIcon.style.display = "none";
        return true;
    }
};
function validateEmail() {
    if (!emailField.value.match(/^[a-zA-Z\._\-0-9]*[@][a-zA-Z]*[\.][a-z]{2,4}$/)) {
        emailError.style.display = "block";
        emailError.innerHTML = "Looks like this is not an email";
        emailField.style.borderColor = "hsl(0, 100%, 74%)";
        emailField.style.border = "solid 2px  hsl(0, 100%, 74%)";
        emailErrorIcon.style.display = "block";
        return false;
    } else {
        emailError.style.display = "none";
        emailField.style.borderColor = "limegreen";
        emailField.style.border = "solid 2px limegreen";
        emailErrorIcon.style.display = "none";
        return true;
    }
};
function validatePassword() {
    if (!passwordField.value == "") {
        passwordError.style.display = "none";
        passwordField.style.borderColor = "limegreen";
        passwordField.style.border = "solid 2px limegreen";
        passwordErrorIcon.style.display = "none";
        return true;
    } else {
        passwordError.style.display = "block";
        passwordField.style.borderColor = "hsl(0, 100%, 74%)";
        passwordField.style.border = "solid 2px  hsl(0, 100%, 74%)";
        passwordError.innerHTML = "Password cannot be empty";
        passwordErrorIcon.style.display = "block";
        return false;
    }
};
