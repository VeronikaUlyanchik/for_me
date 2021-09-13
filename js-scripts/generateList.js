const personContainer = document.getElementById('personContainer');
const personInfoContainer = document.getElementById('personInfoContainer');
const dataContainer = document.getElementById('dataContainer');

const paginationButtonContainer = document.getElementById('paginationButtonContainer');
let startIndex = parseInt(localStorage.getItem('startIndex')) || 0;
let itemsPerPage = 20;
let personArray;


getPersonForView(item)

function getPersonForView(item) {
     personArray = item
     generateList()
}

function generateList() {
    const PersonListPerPage = personArray.slice(startIndex, startIndex + itemsPerPage)
    generatePaginationButtons(personArray.length)

    let html = '';

    for (let i = 0; i < PersonListPerPage.length; i++) {
        const person = PersonListPerPage[i];
        html += `
        <div class="container" id="dataContainer" onclick="generatePersonInfo(${i})">
        <div>${person.id}</div>
        <div>${person.firstName}</div>
        <div>${person.lastName}</div>
        <div>${person.email}</div>
        <div>${person.phone}</div>
        <div>${person.adress.state}</div>
        </div>`
                      
    }
    personContainer.innerHTML = html;
}


function generatePersonInfo(i) {
    const PersonListPerPage = personArray.slice(startIndex, startIndex + itemsPerPage)
    const person = PersonListPerPage[i];
        
        
        let html = `
        <p>Profile info:</p>
        <p>Selected profile: ${person.firstName} ${person.lastName}</p>
        <p>Descriprion: ${person.description}</p>
        <p>Adress: ${person.adress.streetAddress} </p>
        <p>City: ${person.adress.city}</p>
        <p>State: ${person.adress.state}</p>
        <p>Index: ${person.adress.zip}</p>`
                      
    personInfoContainer.innerHTML = html;
}



