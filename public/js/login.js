const signUpButton = document.querySelector('#signUp');
const logInButton = document.querySelector('#logIn');
const signUpInsteadButton = document.querySelector('#signUpInstead');

let signUpInstead = false;

// on sign up button select - create a new user

// on log in button select - log the user in

// on signUpInstead button select - rediect to signup page

function signUpInsteadHandler(event){
    event.preventDefault();

    document.location.replace('/signup');
}

//signUpButton.addEventListener('submit', signUpFormHandler);
//logInButton.addEventListener('submit', logInFormHandler);
signUpInsteadButton.addEventListener('click', signUpInsteadHandler);