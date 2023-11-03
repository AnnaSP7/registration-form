let label = document.querySelector('.label')
let error = document.querySelector('.error')
let email = document.querySelector('.email')
let button = document.querySelector('.submit');


function validateEmail(){
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        error.innerHTML = "Valid email required";
        return false;
    }
    error.innerHTML = "";
    return true
}

function newDoc() {
    if (validateEmail() == true) {
        window.location.assign("http://127.0.0.1:5500/agree.html")
    }
}
button.addEventListener("click", newDoc)
email.addEventListener("keyup", validateEmail)












