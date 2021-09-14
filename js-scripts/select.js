const selectbyStateBtn = document.getElementById('selectByState');


function createSelect() {
    let result= item.map(i => i.adress.state)

    let set = new Set(result);
    let arrFromSet = Array.from(set)
    let option = '';
    for (let i = 0; i < set.size; i++) {
        option += `
        <option value="${arrFromSet[i]}">${arrFromSet[i]}</option>` 
    }
    const disableOption = `
        <option value=""selected disabled="disabled">Filter by State</option>` 
    selectbyStateBtn.innerHTML = disableOption+option;
    
}


function selectbyState(stateSelect) {

    let stateSelected = item.filter(function(i){
        if (stateSelect === i.adress.state) {
            return true
        }
    })
    renderView(0)
    getPersonForView(stateSelected);
    disableBtn(startIndex);
    inputContainer.value = '';
}

function resetFilter(){
    selectbyStateBtn.options[0].selected = 'selected';
    getPersonForView(item);
    disableBtn(startIndex);
    inputContainer.value = '';
}
