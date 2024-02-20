let content = document.getElementById('content');
let temoignages = [];

function getTemoignages() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    fetch("http://127.0.0.1:8000/api/temoignages", requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                alert('Une erreur s\'est produite dans la récupération des témoignages')
            }
        })
        .then(results => {
            temoignages = results;
            showTemoignages();
        })
        .catch(error => console.log('error', error));
}

function showTemoignages() {
    let filteredTemoignages = temoignages.filter((t) => t.Approved == 1)
    content.innerHTML = "";
    let random = (Math.floor(Math.random()*filteredTemoignages.length));
    let temoignage = filteredTemoignages[random]; 
    let date = new Date(temoignage.CreatedAt);
    let formatedDate = date.toLocaleDateString("fr");

    content.innerHTML += `
    <button class="page-link previous-next align-self-center" aria-label="Previous" onclick="showTemoignages()">
        <span aria-hidden="true">&laquo;</span>
    </button>
    <div style="width: 100%;">
        <div class="card-body">
            <h5 class="card-title">${temoignage.LastName} ${temoignage.FirstName}</h5>
            <p class="card-text">${temoignage.Commentary}</p>
        </div>
        <div class="card-footer text-body-secondary">
            ${formatedDate}
        </div>
    </div>
    <button class="page-link previous-next align-self-center" aria-label="Previous" onclick="showTemoignages()">
        <span aria-hidden="true">&raquo;</span>
    </button>`
}

getTemoignages();