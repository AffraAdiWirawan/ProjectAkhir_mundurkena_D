function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === "temenkudecul" || password === "10") {
        window.location.href = 'flag.html';
        return false;
    }
    return true;
}
