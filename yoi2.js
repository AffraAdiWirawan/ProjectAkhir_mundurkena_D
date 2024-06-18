function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === "nikong" || password === "sukakucing") {
        window.location.href = 'flag.html';
        return false;
    }
    return true;
}