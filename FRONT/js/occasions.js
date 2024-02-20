const content = document.getElementById('cars');
let cars = [];
const click = document.getElementById('addButton');
click.addEventListener("click", addVehicule);
const formData = document.getElementById('formAddVehicule');
const deleteClick = document.getElementById('btn-delete');
deleteClick.addEventListener("click", deleteVehicule);
let selectedCar = [];
const updateClick = document.getElementById('btn-update');
updateClick.addEventListener("click", updateVehicule);
const formUpdatedData = document.getElementById('formUpdateVehicule');

function getOccasions() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    fetch("http://localhost:8000/api/vehicules", requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                alert("Erreur dans la récupération des données");
            }
        })
        .then(result => {
            cars = result;
            displayCars();
        })
        .catch(error => console.log('error', error))
};

function displayCars() {
    content.innerHTML = "";
    for (const car of cars) {
        content.innerHTML += `
        <div class="card g-0 col-4 offset-4 mt-3">
            <div class="img-card">
                <img src="/images/voiture.jpg" class="card-img-top" alt = "...">
                <div class="img-card-buttons" data-show="ROLE_USER">
                    <button type="button" data-id=${car.id} id="btn-update" data-bs-toggle="modal" data-bs-target="#updateVehiculeModal" class="ms-3 col-4 img-card-button" onclick="findSelectedCar(${car.id})"><i class="bi bi-pencil-fill icon-white"></i></button>
                    <button type="button" data-id=${car.id} id="btn-delete" data-bs-toggle="modal" data-bs-target="#deleteVehiculeModal" class="ms-3 col-4 img-card-button" onclick="findSelectedCar(${car.id})"><i class="bi bi-x-circle icon-white"></i></button>
                </div>
            </div>
            </img>
            <div class="card-body">
                <div class="text-center">
                    <h2 class="card-title card-title-occas">${car.Title}</h2>
                    <p class="card-text">${car.Caracteristics}</p>
                </div>
                <div class="row d-flex justify-content-center mt-2">
                    <p class="price-text col-6 text-center">${car.price} €</p>
                    <button href="#" class="btn ps-3 pe-3 col-4 rounded" id="btn.car.${car.id}">Voir plus</button>
                </div>
            </div>
        </div>`
    }
};

function addVehicule() {
    let dataForm = new FormData(formData);

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "Title": dataForm.get("title"),
        "price": Number(dataForm.get("price")),
        "Year": Number(dataForm.get("year")),
        "Mileage": Number(dataForm.get("mileage")),
        "Caracteristics": [dataForm.get("caracs")],
        "Equipments": [dataForm.get("equipments")],
        garage_id: 1,
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };


    fetch("http://localhost:8000/api/vehicules", requestOptions)
        .then(response => {
            if (response.ok) {
                getOccasions();
            } else {
                alert('Une erreur s\'est produite lors de la récupération des données');
            }
        })
};

function deleteVehicule() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: JSON.stringify(selectedCar),
    };

    fetch("http://localhost:8000/api/vehicules", requestOptions)
        .then(async response => {
            if (response.ok) {
                getOccasions();
            } else {
                alert('Une erreur s\'est produite lors de la suppression.');
            }
        })
};

function updateVehicule() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let dataForm = new FormData(formUpdatedData);

    let raw = JSON.stringify({
        "Title": dataForm.get("title"),
        "price": Number(dataForm.get("price")),
        "Year": Number(dataForm.get("year")),
        "Mileage": Number(dataForm.get("mileage")),
        "Caracteristics": [dataForm.get("caracs")],
        "Equipments": [dataForm.get("equipments")],
        garage_id: 1,
        "id": selectedCar.id,
    });

    let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
    };

    fetch("http://localhost:8000/api/vehicules", requestOptions)
        .then(response => {
            if (response.ok) {
                getOccasions();
            } else {
                alert('Une erreur est survenue lors de la modification');
            }
        })
}

function findSelectedCar(id) {
    selectedCar = cars.find((car) => car.id == id)
}

getOccasions();