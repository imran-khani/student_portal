
let users = JSON.parse(localStorage.getItem('users')) || [
    { username: 'obaid', password: 'obaid' },
]; // Array to store user signups

//  get form elements
let form = document.querySelector('form');
let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');

// add eventListener to form
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let usernameVal = usernameInput.value;
    let passVal = passwordInput.value;

    // check for authentication
    let user = users.find(user => user.username === usernameVal);
    if (user && user.password === passVal) {
        let successLogin = document.querySelector('#success-login');
        successLogin.textContent = 'Login successful. Redirecting to portal...';
        setTimeout(() => {
            successLogin.innerHTML = '';
            window.location.href = '/portal.html';
        }, 3000);
    } else {
        alert('Username or password incorrect');
    }
});

// Signup functionality
let signupForm = document.querySelector('#signup-form');
let signupUsernameInput = document.getElementById('signup-username');
let signupPasswordInput = document.getElementById('signup-password');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let signupUsernameVal = signupUsernameInput.value;
    let signupPasswordVal = signupPasswordInput.value;

    // Check if username already exists
    if (users.find(user => user.username === signupUsernameVal)) {
        let error = document.querySelector('#signup-error');
        error.innerHTML = 'Username already exists. Please choose a different username.';
        setTimeout(() => {
            error.innerHTML = '';
        }, 3000);
        return;
    }
    // Add user to the array
    users.push({ username: signupUsernameVal, password: signupPasswordVal });

    // Store the updated users array in local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Clear the signup form
    signupUsernameInput.value = '';
    signupPasswordInput.value = '';

    // Show success message
    let success = document.querySelector('#signup-success');
    success.innerHTML = 'Signup successful. Please login to continue.';
    setTimeout(() => {
        success.innerHTML = '';
    }, 3000);
});
