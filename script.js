// Function to show login form and hide register form
function showLoginForm() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
}

// Function to show register form and hide login form
function showRegisterForm() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
}

// Function to handle login
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve users from localStorage or initialize an empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user exists
    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
        alert(`Welcome back, ${username}!`);
        // Redirect to home page or perform other actions
    } else {
        alert('Invalid username or password. Please try again or register.');
    }
}

// Function to handle registration
function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Retrieve users from localStorage or initialize an empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if username is already taken
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        alert('Username already exists. Please choose another username.');
    } else {
        // Add new user to array and store in localStorage
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration successfull! Please login with your new account.');
        // Automatically switch to login form after registration
        showLoginForm();
    }
}
