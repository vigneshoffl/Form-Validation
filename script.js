let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName(){
    let name = document.getElementById("contact-name").value;

    if(name.length === 0){
        nameError.innerHTML = "Name id required";
        return false;
    }
    else if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write Full Name";
        return false
    }
    nameError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true
}

function validatePhone(){
    let phone = document.getElementById("contact-phone").value;

    if(phone.length === 0){
        phone.innerHTML = "Phone No is required";
        return false;
    }
    else if(phone.length!==10){
        phoneError.innerHTML = "Phone No should be 10 digit";
        return false;
    }
    else if(!phone.match(/^[0-9]{10}$/)){

        phoneError.innerHTML = "only digits please";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true;
}

function validateEmail(){
    let email = document.getElementById("contact-email").value;

    if(email.length === 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    else if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email Invalid";
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true;
}

function validateMessage(){
    let message =document.getElementById("contact-message").value;
    let required = 30;
    let left = required - message.length;

    if(message.length === 0){
        messageError.innerHTML = "Message is required";
        return false;
    }
    else if(left > 0){
        messageError.innerHTML = left + " More characters required"
        return false;
    }
    else if(message.length != required){
        messageError.innerHTML = "Message Should be 30 characters";
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML  = "Please Fix this Error";
        setTimeout(function(){submitError.style.display = "none";},3000);
        return false;
    }
}