const inputContainer = document.getElementById('input')
let found;
let filter;

function onSearchingChange(InputValue) {
        filter=item
    if (selectbyStateBtn.options[0].selected === 'selected') {
        filter=stateSelected
    }
    const inputArray = InputValue.toLocaleLowerCase().replace(/\s/g, '');
    
    found = filter.filter(function(i) {

        if (( i.firstName.toLocaleLowerCase().includes(inputArray)== 1) ||
        (i.lastName.toLocaleLowerCase().includes(inputArray)== 1) 
        || 
        ((i.firstName.toLocaleLowerCase()+i.lastName.toLocaleLowerCase()).includes(inputArray)==1) ||
        ((i.lastName.toLocaleLowerCase()+i.firstName.toLocaleLowerCase()).includes(inputArray)==1))
        {
            return true
        }
        else 
        personContainer.innerHTML = '';
        
    })

    if (InputValue.length==0) {
        getPersonForView(item)
        selectbyStateBtn.options[0].selected = 'selected'
    } else {
        renderView(0)
        getPersonForView(found)
    }
    disableBtn(startIndex)
}