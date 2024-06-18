 function validateForm() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            if (username === "berapajumlahuclrealmadrid" || password === "15") {
                window.location.href = 'flag.html';
                return false;
            }
            return true;
        }
