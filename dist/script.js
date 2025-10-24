/**
 * Checks if a given password meets the strong password criteria
 * @param {string} password The password string to validate
 * @returns {boolean} returns true if all conditions are met, otherwise false
 */

// This is a simple JavaScript file that adds interactivity to the HTML page
function isStrongPassword(password) {
    // checks if the password is at least 8 characters long
    const isLongEnough = password.length >= 8;

    //check if the password contains the string "password"
    // convert the password to lowercase before checking for substring
    const containsPassword = password.toLowerCase().includes('password');
    const doesNotContainPassword = !containsPassword;

    //check if the password contains at least one uppercase character
    const hasUpperCase = password !== password.toLowerCase();

    //the password is "strong" only if ALL three checks are true
    return isLongEnough && doesNotContainPassword && hasUpperCase;
}

//helper function
function checkPasswordStrength() {
    //get the password from the input field
    const passwordInput = document.getElementById('password-input');
    const password = passwordInput.value;

    //check the strength using function from task 1
    const isStrong = isStrongPassword(password);

    //display the result as an alert 
    if (isStrong) {
        alert("Password is strong");
    } else {
        alert("Password is weak");
    }
}

