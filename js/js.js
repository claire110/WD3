// PASSWORD EQUALITY
function passEquality() {
    if(password_one.value.length > 0 &&
       password_two.value.length > 0) {
        if(password_one.value === password_two.value) {
            password_one.setCustomValidity('');
            password_two.setCustomValidity('');
            error_div.innerHTML = '';
            return true;
        } else {
            password_one.setCustomValidity('');
            password_two.setCustomValidity('');
            error_div.innerHTML = 'Passwords do not match!';
            return false;
        }
    }
}

// DEFINING A FUNCTION TO DISPLAY ERROR MESSAGE
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// DEFINING A FUNCTION TO VALIDATE FORM
function validateForm() {

    // VALIDATE NAME
    var name = document.registerform.name.value;
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /(?!.*fuck)[A-Za-z]{3,128}/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name，3 characters at least");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    // VALIDATE EMAIL
    var email = document.registerform.email.value;
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex =/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if(regex.test(email) === false) {
            printError("emailErr", "An email must be in the following order, characters@characters.domain");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    // VALIDATE MOBILE NUMBER
    var mobile = document.registerform.mobile.value;
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /[0-9]{10}/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }  
    // VALIDATE CATNUMBER
    var catnumber = document.registerform.catnumber.value;
    if(catnumber == "") {
        printError("catnumberErr", "Please input your cat numbers");
    } else {
        var regex = /^(?:0|[1-9][0-9]?|1000)$/;
        if(regex.test(catnumber) === false) {
            printError("catnumberErr", "The number of cats must be an integer between 0 to 1000");
        } else{
            printError("catnumberErr", "");
            catnumber = false;
        }
    } 
    // VALIDATE PASSWORD_ONE
    var password_one = document.registerform.password_one.value;
    if(password_one == "") {
        printError("password_oneErr", "Please input your password");
    } else {
        var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if(regex.test(password_one) === false) {
            printError("password_oneErr", "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
        } else{
            printError("password_oneErr", "");
            password_oneErr = false;
        }
    }
    // VALIDATE PASSWORD_TWO
    var password_two = document.registerform.password_two.value;
    if(password_two == "") {
        printError("password_twoErr", "Please comfirm your password");
    } else {
        var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if(regex.test(password_two) === false) {
            printError("password_twoErr", "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
        } else{
            printError("password_twoErr", "");
            password_twoErr = false;
        }
    }
     // // VALIDATE TERMS
     var terms = document.getElementById("terms");
     if(terms.checked == "") {
        printError("termsErr", "Please agree to terms");
    } else {
            printError("termsErr", "");
            termsErr = false;
        }
};


