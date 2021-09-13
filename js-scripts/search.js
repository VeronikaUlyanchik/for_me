const inputContainer = document.getElementById('input')


function onSearchingChange(InputValue) {
    
    selectbyStateBtn.options[0].selected = 'selected';
    const inputArray = InputValue.toLocaleLowerCase().replace(/\s/g, '');
    
    let found = item.filter(function(i) {

        if (( i.firstName.toLocaleLowerCase().includes(inputArray)== 1) ||
        (i.lastName.toLocaleLowerCase().includes(inputArray)== 1) || 
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
    } else {
        renderView(0)
        getPersonForView(found)
    }
    disableBtn(startIndex)
}