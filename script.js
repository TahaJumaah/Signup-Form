let btn = document.getElementById('submit');
let pass1 = document.getElementById('password');
let pass2 = document.getElementById('confirm-password');


btn.addEventListener('click' , submitFunction);

function submitFunction() {

    if (pass1.value != pass2.value) {
        pass1.setCustomValidity('Passwords Do Not Match.');
        
    }

    else{
        pass1.setCustomValidity('');
    }
    
}