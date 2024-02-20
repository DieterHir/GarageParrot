let content = document.getElementById('content');
let contentToCheck = document.getElementById('content_to_check');
let temoignagesToCheck = [];
let validTemoignages = [];
let approveButton = document.getElementById('approve');
let disapproveButton = document.getElementById('disapprove');
// approveButton.addEventListener("click", (evt) => { approveTemoignage(true, approveButton.data-id) });
// disapproveButton.addEventListener("click", (evt) => { approveTemoignage(false, approveButton.data-id) });


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
                alert('Une erreur est survenue lors de la récupération des avis')
            }
        })
        .then(results => {
            temoignagesToCheck = results;
            displayTemoignages();
        })
        .catch(error => console.log('error', error));
}

function displayTemoignages() {
    contentToCheck.innerHTML = "";
    content.innerHTML = "";
    for (const temoignage of temoignagesToCheck) {
        if (temoignage.Approved == 0) {
            contentToCheck.innerHTML += `
            <div style="margin-bottom: 5px; margin-top: 5px";>
                <div class="card">
                    <div class="card-body row">
                        <h5 class="card-title col-12">${temoignage.LastName} ${temoignage.FirstName}</h5>
                        <p class="card-text col-12">« ${temoignage.Commentary} »</p>
                        <div class="d-flex justify-content-between col-4 offset-4">
                            <button class="button-approve" id="approve" onclick="approveTemoignage(true, ${temoignage.id})">Approuver</a>
                            <button class="button-disapprove" id="disapprove" onclick="approveTemoignage(false, ${temoignage.id})">Supprimer</a>
                        </div>
                    </div>
                </div>
            </div>
            `
        } else {
            content.innerHTML += `
            <div style="margin-bottom: 5px; margin-top: 5px";>
                <div class="card">
                    <div class="card-body row">
                        <h5 class="card-title col-12">${temoignage.LastName} ${temoignage.FirstName}</h5>
                        <p class="card-text col-12">« ${temoignage.Commentary} »</p>
                        <div class="d-flex justify-content-center col-4 offset-4">
                            <button class="button-disapprove" id="disapprove" onclick="approveTemoignage(false, ${temoignage.id})">Supprimer</a>
                        </div>
                    </div>
                </div>
            </div>
            `
        }

    };
};

function approveTemoignage(evt, id) {
    if (evt == true) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify({
            'id': id,
            'Approved': 1,
        })

        let requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
        };

        fetch("http://127.0.0.1:8000/api/temoignages", requestOptions)
            .then(response => {
                if (response.ok) {
                    getTemoignages();
                } else {
                    alert('Erreur dans l\'approbation du témoignage');
                }
            })
    } else {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify({
            'id': id,
        })

        let requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
        };

        fetch("http://127.0.0.1:8000/api/temoignages", requestOptions)
            .then(response => {
                if (response.ok) {
                    getTemoignages();
                } else {
                    alert('Erreur dans la suppression du témoignage');
                }
            });
    }
}

getTemoignages();

// <div class="row col-10">
//     <div class="col-3 border-div">
//         <p>${temoignage.LastName}</p>
//     </div>
//     <div class="col-3 border-div">
//         <p>${temoignage.FirstName}</p>
//     </div>
//     <div class="col-6 border-div">
//         <p>${temoignage.CreatedAt}</p>
//     </div>
//     <div class="col-9 border-div">
//         <p>${temoignage.Commentary}</p>
//     </div>
//     <div class="col-3 text-center border-div">
//         <p>${temoignage.Note}</p>
//     </div>
// </div>

