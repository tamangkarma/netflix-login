
const emailInput = document.getElementById('email');
const error_email = document.getElementById('error-email');


emailInput.addEventListener('blur', ()=>{
    if (emailInput.trim === '') {
        error_email.textContent = 'Please enter a valid email';
    }
    else {
        error_email.textContent = '';
    }

})









