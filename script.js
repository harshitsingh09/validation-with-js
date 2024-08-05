document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    var username = document.getElementById("username").value;
    var password = document.getElementById("pwd").value;
    var errorMessage = document.getElementById("error-message");

    // Clear previous error messages
    errorMessage.textContent = "";

    // Basic validation
    // Works without JavaScript
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required.";
        return;
    }

    // Username length check
    if (username.length < 3 || username.length > 20) {
        // errorMessage.textContent = "Username must be between 3 and 20 characters.";
        alert("Username must be between 3 and 20 characters.",);
        return;
    }

    //Username shouldnt include numbers
    if (username.match(/\d+/g)) {
        errorMessage.textContent = "Username cannot contain numbers.";
        return;
    }

    // Username shouldnt include special characters
    if (username.match(/[!@#$%^&*(),.?":{}|<>]/g)) {
        errorMessage.textContent = "Username cannot contain special characters.";
        return;
    }

    // Username no spaces
    if (/\s/.test(username)) {
        errorMessage.textContent = "Username cannot contain spaces.";
        return;
    }

    // Password length check
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        return;
    }

    // Password complexity check
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(password)) {
        errorMessage.textContent = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
        return;
    }

    // Password no spaces
    if (/\s/.test(password)) {
        errorMessage.textContent = "Password cannot contain spaces.";
        return;
    }

    // Check against common passwords (example list, you might want a more comprehensive list)
    var commonPasswords = ["password", "123456", "123456789", "12345678", "12345", "1234567", "qwerty", "abc123"];
    if (commonPasswords.includes(password.toLowerCase())) {
        errorMessage.textContent = "Please choose a stronger password.";
        return;
    }

    // If all validations pass, redirect to welcome page
    errorMessage.textContent = "";
    window.location.href = "welcome.html";
});
