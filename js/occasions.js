let content = document.getElementById('cars');
let cars = [];

function getOccasions() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    fetch("http://localhost:5000/Vehicule", requestOptions)
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
}

function displayCars() {
    content.innerHTML = "";
    for (const car of cars) {
        content.innerHTML += `
        <div class="card g-0 col-4 offset-4 mt-3">
            <img src="/images/voiture.jpg" class="card-img-top" alt = "...">
            <div class="card-body">
                <div class="text-center">
                    <h2 class="card-title card-title-occas">${car.Title}</h2>
                    <p class="card-text">${car.Caracteristics}</p>
                </div>
                <div class="row d-flex justify-content-center mt-2">
                    <p class="price-text col-6 text-center">${car.Price} €</p>
                    <button href="#" class="btn ps-3 pe-3 col-4 rounded" id="btn.car.${car.Id}">Voir plus</button>
                </div>
            </div>
        </div>`
    }
}

getOccasions();