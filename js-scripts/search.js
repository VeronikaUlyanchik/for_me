const inputContainer = document.getElementById('input')
let found;
let filter;

function onSearchingChange(inputValue) {
        filter=stateSelected
    if (selectbyStateBtn.options[0].selected) {
        filter=item
    }
    const inputArray = inputValue.split(' ');
    for (let a=0; a<inputArray.length; a++) {

   found = filter.filter(function(i) {

        if ((( i.firstName.toLocaleLowerCase().includes(inputArray[a].toLocaleLowerCase())== 1) ||
        (i.lastName.toLocaleLowerCase().includes(inputArray[a].toLocaleLowerCase())== 1)) && 
        (i.firstName.toLocaleLowerCase()+i.lastName.toLocaleLowerCase()).includes(inputArray[0].toLocaleLowerCase())==1)
        {
            return true
        }
        else {
        personContainer.innerHTML = '';
        }
    })}

    if (inputValue.length==0) {
        getPersonForView(item)
        selectbyStateBtn.options[0].selected = 'selected'
    } else {
        renderView(0)
        getPersonForView(found)
    }
    disableBtn(startIndex)
}