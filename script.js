function validateForm(){

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if(name == ""){
        alert("Name should not be empty");
        return false;
    }

    if(email.indexOf("@") == -1){
        alert("Email must contain @");
        return false;
    }

    if(mobile.length != 10 || isNaN(mobile)){
        alert("Mobile number must contain exactly 10 digits");
        return false;
    }

    if(password.length < 8){
        alert("Password must be at least 8 characters");
        return false;
    }

    if(password != confirmPassword){
        alert("Password and Confirm Password must match");
        return false;
    }

    document.getElementById("message").innerHTML =
    "Registration Successful!";

    return false;
}