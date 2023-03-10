const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//event listner
form.addEventListener('submit', function(e){
    e.preventDefault();

    if(username.value == '') {
        showError(username, 'Username is required')
    } else {
        showSuccess(username);
    }

    if(email.value == '') {
        showError(email, 'Email is required')
    } else {
        showSuccess(email);
    }

    if(password.value == '') {
        showError(password, 'Password is required')
    } else {
        showSuccess(password);
    }

    if(password2.value == '') {
        showError(password2, 'Please confirm password')
    } else {
        showSuccess(password2);
    }

    if(password.value != password2.value) {
        showError(password2, 'Passwords do not match')
    }
});

