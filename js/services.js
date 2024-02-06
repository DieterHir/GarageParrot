let content = document.getElementById('services');
let services = [];

function getServices() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    fetch("http://localhost:5000/Services", requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                alert("Erreur dans la récupération des données");
            }
        })
        .then(result => {
            services = result;
            displayServices();
        })
        .catch(error => console.log('error', error))
}

function displayServices() {
    content.innerHTML = "";
    for (const service of services) {
        content.innerHTML += `
        <li class="row" id="${service.Id}">
            <img class="col-2" src="${service.Icon}" width="30" height="30"></img>
            <h4 class="col-6">${service.Title}</h4>
            <p class="col-4 text-center">${service.Price}</p>
        </li>`
    }
}

getServices();