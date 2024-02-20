let boutonConnexion = document.getElementById('btn-connexion');
boutonConnexion.addEventListener("click", checkId);
let mailInput = document.getElementById('inputEmail');
let passwordInput = document.getElementById('inputPassword');
let form = document.getElementById('connexionForm');

function checkId() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let formData = new FormData(form);

    let raw = JSON.stringify({
        'username': formData.get("mail"),
        'password': formData.get("password")
    });

    let requestOptions = {
        headers: myHeaders,
        method: 'POST',
        body: raw,
    };

    fetch("http://127.0.0.1:8000/api/users/connexion", requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                mailInput.classList.add("is-invalid");
                passwordInput.classList.add("is-invalid");
            }
        })
        .then(result => {
            let token = result.apiToken;
            setToken(token);
            setCookie(roleCookieName, result.roles, 7);
            window.location.replace("/");
        })
        .catch(error => console.log('error', error));
}