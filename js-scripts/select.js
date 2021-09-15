const selectbyStateBtn = document.getElementById('selectByState');
let search;
let stateSelected 

function createSelect() {
    let result= item.map(i => i.adress.state)

    let set = new Set(result);
    let arrFromSet = Array.from(set).sort()
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
    search = item;
if (inputContainer.value !== ''){
    search= found;
}
    stateSelected = search.filter(function(i){
        if (stateSelect === i.adress.state) {
            return true
        }
    })
    inputContainer.value === '';
    renderView(0)
    getPersonForView(stateSelected);
    disableBtn(startIndex);
}

function resetFilter(){
    selectbyStateBtn.options[0].selected = 'selected';
    getPersonForView(item);
    disableBtn(startIndex);
    inputContainer.value = '';
}
