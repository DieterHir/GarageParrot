let formData = document.getElementById('temoignagesForm');
let addButton = document.getElementById('add-button');
addButton.addEventListener("click", addTemoignage);
let nameInput = document.getElementById('nameInput');
let firstNameInput = document.getElementById('firstNameInput');
let messageInput = document.getElementById('messageInput');
let noteInput = document.getElementById('noteInput');
nameInput.addEventListener("keyup", (evt) => { validateForm(nameInput) });
firstNameInput.addEventListener("keyup", (evt) => { validateForm(firstNameInput) });
messageInput.addEventListener("keyup", (evt) => { validateForm(messageInput) });
noteInput.addEventListener("keyup", (evt) => { validateForm(noteInput) });

function addTemoignage() {

    let dataForm = new FormData(formData);

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "FirstName": dataForm.get("firstName"),
        "LastName": dataForm.get("lastName"),
        "Commentary": dataForm.get("message"),
        "Note": Number(dataForm.get("note")),
        garage_id: 1,
        "Approved": 0,
    })

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    fetch("http://127.0.0.1:8000/api/temoignages", requestOptions)
        .then(response => {
            if (response.ok) {
                alert('Merci pour votre témoignage !');
            } else {
                alert('Erreur lors de la création du témoignage');
            }
        })
}

function validateForm(input) {
    let str = input.value.replace(/\s/g, "");
    validateRequired(input, str);
    disableButton(input);
}

function validateRequired(input, str) {
    if (str != "") {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    } else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }
}

function disableButton(input) {
    if (input.classList.contains("is-invalid")) {
        addButton.classList.add("disabled");
    } else {
        addButton.classList.remove("disabled");
    }
}