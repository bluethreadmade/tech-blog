const signUpButton = document.querySelector('#signUp');
const logInButton = document.querySelector('#logIn');
const signUpInsteadButton = document.querySelector('#signUpInstead');

// on sign up button select - create a new user
const signUpFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#signUpEmailInput').value.trim();

    const password = document.querySelector('#signUpPasswordInput').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up.');
        }
    }
};

// on log in button select - log the user in
const logInFormHandler = async(event) => {
    event.preventDefault();

    const username = document.querySelector('#logInEmailInput').value.trim();

    const password = document.querySelector('#logInPasswordInput').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }

};

// on signUpInstead button select - rediect to signup page
function signUpInsteadHandler(event) {
    event.preventDefault();

    document.location.replace('/signup');
}

if (signUpButton) {
    signUpButton.addEventListener('click', signUpFormHandler);
}
if (logInButton) {
    logInButton.addEventListener('click', logInFormHandler);
}
if (signUpInsteadButton) {
    signUpInsteadButton.addEventListener('click', signUpInsteadHandler);
}
