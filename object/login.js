
document.getElementById("redirect-to-login").onclick = function () {
    document.getElementById("register-form").hidden = true;
    document.getElementById("login-form").hidden = false;
}

document.getElementById("redirect-to-register").onclick = function () {
    document.getElementById("register-form").hidden = false;
    document.getElementById("login-form").hidden = true;
}
