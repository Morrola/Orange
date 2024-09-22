function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
}

function validateForm() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const dobInput = document.getElementById('datebirth');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const dobError = document.getElementById('dob-error');

    const email = emailInput.value;
    const password = passwordInput.value;
    const dob = new Date(dobInput.value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const isUnderage = (today.getMonth() < dob.getMonth() || 
        (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate()));

    let isValid = true;

    if (!validateEmail(email)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (!validatePassword(password)) {
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    // Check for age
    if (isUnderage || age < 18) {
        dobError.style.display = 'block';  // Show error if under 18
        isValid = false;
    } else {
        dobError.style.display = 'none';   // Hide error if 18 or older
    }

    if (isValid) {
        alert("Login successful");
    }
}
