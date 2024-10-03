function registerUser() {
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    if (firstName && lastName && email && password) {
        
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
        localStorage.setItem('user', JSON.stringify(user));

        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';

        
        setTimeout(() => {
            document.getElementById('registration').style.display = 'none';
            document.getElementById('login').style.display = 'block';
        }, 2000); 
    } else {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block'; 
    }
}

function loginUser() {
    const emailInput = document.getElementById('login-email').value;
    const passwordInput = document.getElementById('login-password').value;
    const errorMessage = document.getElementById('login-error-message');


    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === emailInput && storedUser.password === passwordInput) {
        errorMessage.style.display = 'none';
        alert("Login successful!");

        
        document.getElementById('login').style.display = 'none';
        document.getElementById('welcome').style.display = 'block';
    } else {
        errorMessage.style.display = 'block'; 
    }
}
