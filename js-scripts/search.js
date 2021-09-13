let selectedInputFirst = 'firstName';
let selectedInputSec = 'lastName';
const inputContainer = document.getElementById('input')


function onSearchingChange(InputValue) {
    
    selectbyStateBtn.options[0].selected = 'selected';
    [selectedInputFirst, selectedInputSec] = InputValue.split(' ');
    if (typeof selectedInputSec === 'undefined') {
        selectedInputSec = 'lastName'
    }
    let found = item.filter(function(i) {
         
        if ((selectedInputSec.toUpperCase() === i.firstName.toUpperCase()) || (selectedInputSec.toUpperCase() === i.lastName.toUpperCase()
        || (selectedInputFirst.toUpperCase() === i.firstName.toUpperCase()) || (selectedInputFirst.toUpperCase() === i.lastName.toUpperCase())
        )) {
            return true
        }
        else 
        personContainer.innerHTML = '';
    })
    if (InputValue.length==0) {
        getPersonForView(item)
    } else {
        renderView(0)
        getPersonForView(found)
    }
    disableBtn(startIndex)
}