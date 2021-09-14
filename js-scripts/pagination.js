const previous= document.getElementById('previous');
const next= document.getElementById('next');


renderView(startIndex)


function renderView(newIndex) {
        startIndex= newIndex
        localStorage.setItem('startIndex', startIndex);
        getPersonForView(personArray);
        disableBtn(startIndex);
}

function disableBtn(startIndex) {
    if (startIndex===0) {
        previous.setAttribute('disabled', 0)
    }
    else {
    previous.removeAttribute('disabled', 0)
    }
    if (startIndex >= personArray.length-itemsPerPage) {
        next.setAttribute('disabled', 0)
    }
    else 
    next.removeAttribute('disabled', 0)
}

function generatePaginationButtons(total) {
    const selectedButtonIndex = startIndex / itemsPerPage;
    const buttonLength = total / itemsPerPage;
    let html = ''
    for (let i = 0; i < buttonLength; i++) {
        const buttonClasses = i === selectedButtonIndex
            ? 'pagination-button  selected'
            : 'pagination-button';
        html+=`<button class="${buttonClasses}" 
                       onclick="renderView(itemsPerPage*${i})">${i+1}</button>`
    }
    paginationButtonContainer.innerHTML = html;
}