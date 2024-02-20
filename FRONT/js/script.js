let tokenCookieName = "accesstoken";
let roleCookieName = "roles";
let signOutBtn = document.getElementById('signoutBtn');
signOutBtn.addEventListener("click", signout);

function getRoles() {
    return getCookie(roleCookieName);
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function setToken(token) {
    setCookie(tokenCookieName, token, 7);
}

function getToken() {
    return getCookie(tokenCookieName);
}

function isConnected() {
    return getToken() != null && getToken != undefined
}

function showAndHideElementsForRoles() {
    let userConnected = isConnected();
    console.log(userConnected)
    let roles = []
    if (getRoles()?.length) {
        roles = getRoles().split(",");
    }
    console.log(roles);

    let allElementsToEdit = document.querySelectorAll('[data-show]');

    allElementsToEdit.forEach(element => {
        console.log(element)
        switch (element.dataset.show) {
            case 'disconnected':
                if (userConnected) {
                    element.classList.add("d-none");
                }
                break;
            case 'ROLE_USER':
                if (!userConnected) {
                    element.classList.add("d-none");
                }
                break;
            case 'ROLE_ADMIN':
                if (!userConnected || !roles.includes("ROLE_ADMIN")) {
                    element.classList.add("d-none");
                }
                break;
        }
    })
}

function signout() {
    eraseCookie(tokenCookieName);
    eraseCookie(roleCookieName);
    window.location.replace('/');
}

// if (isConnected()) {
//     alert("je suis connecté");
// } else {
//     alert("oupsi");
// }

isConnected();
// create a new instance of MutationObserver named observer,
// passing it a callback function
const observer = new MutationObserver(() => {
    showAndHideElementsForRoles();
});

// call observe(), passing it the element to observe, and the options object
observer.observe(document.querySelector("body"), {
    attributeFilter: ["data-show"],
    subtree: true,
    childList: true,
});
// showAndHideElementsForRoles();
//document.on("ready", () => showAndHideElementsForRoles())