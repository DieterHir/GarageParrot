let content = document.getElementById('users');
let formData = document.getElementById('newUser');
let addButton = document.getElementById('add-button');
addButton.addEventListener("click", newUser);
let users = [];
let updatedData = document.getElementById('formUpdateUser')
let updateButton = document.getElementById('btn-update');
updateButton.addEventListener("click", updateUser);
let selectedUser = [];
let deleteButton = document.getElementById('btn-delete');
deleteButton.addEventListener("click", deleteUser);

function newUser() {
    let dataForm = new FormData(formData);

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-AUTH-TOKEN", getToken())

    let raw = JSON.stringify({
        "firstName": dataForm.get("firstName"),
        "lastName": dataForm.get("lastName"),
        "email": dataForm.get("mail"),
        "password": dataForm.get("password"),
        garage_id: 1,
        role: 0,
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    fetch("http://127.0.0.1:8000/api/users", requestOptions)
        .then(response => {
            if (response.ok) {
                getUsers();

            } else {
                alert("Erreur dans la création de l'utilisateur");
            }
        })
}

function getUsers() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-AUTH-TOKEN", getToken())

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    fetch("http://localhost:8000/api/users", requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                alert("Erreur dans la récupération des données");
            }
        })
        .then(result => {
            users = result;
            displayUsers();
        })
        .catch(error => console.log('error', error))
}

function displayUsers() {
    content.innerHTML = "";
    for (const user of users) {
        content.innerHTML += `
        <div class="card-body">
            <div class="row">
                <p class="userDisplay col-2" style="margin: 0;">${user.FirstName}</p>
                <p class="userDisplay col-2" style="margin: 0;">${user.LastName}</p>
                <p class="userDisplay col-4" style="margin: 0;">${user.Email}</p>
                <p class="col-1 offset-3 d-flex justify-content-between" style="margin: 0;">
                    <button type="button" data-id=${user.id} id="btn-update-modal" data-bs-toggle="modal" data-bs-target="#updateUserModal" style="border: none; background: none;" class="ms-3 col-4" onclick="findSelectedUser(${user.id})">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button type="button" data-id=${user.id} id="btn-delete-modal" data-bs-toggle="modal" data-bs-target="#deleteUserModal" style="border: none; background: none;" class="ms-3 col-4" onclick="findSelectedUser(${user.id})">
                        <i class="bi bi-x-circle"></i>
                    </button>
                </p>
            </div>
        </div>`
    }
}

function deleteUser() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-AUTH-TOKEN", getToken())
    let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: JSON.stringify(selectedUser),
    };

    fetch("http://127.0.0.1:8000/api/users", requestOptions)
        .then(response => {
            if (response.ok) {
                getUsers();
            } else {
                alert('Erreur lors de la suppression du compte employé');
            }
        })
}

function updateUser() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-AUTH-TOKEN", getToken())
    let dataForm = new FormData(updatedData);

    let raw = JSON.stringify({
        "FirstName": dataForm.get('firstName'),
        "LastName": dataForm.get('lastName'),
        "Email": dataForm.get('mail'),
        "Password": dataForm.get('password'),
        "Role": 0,
        "id": selectedUser.id,
        garage_id: 1,
    })

    let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
    };

    fetch("http://127.0.0.1:8000/api/users", requestOptions)
        .then(response => {
            if (response.ok) {
                getUsers();
            } else {
                alert('Une erreur s\'est produite lors de la modification du compte employé');
            }
        })
}

function findSelectedUser(id) {
    selectedUser = users.find((user) => user.id == id);
}

getUsers();