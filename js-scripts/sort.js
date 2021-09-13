const idDiv = document.getElementById('idDiv');
const state = document.getElementById('state');


function sortId() {
    

    personArray.sort(function(a , b){
        if (idDiv.classList.contains('asc')){
        return a.id - b.id 
    }
    else {
        return b.id - a.id}
    })

    generateList () 
    idDiv.classList.toggle('asc')
}

function sortText(selectedKey) {

    const classDiv = document.getElementById(selectedKey);
    
    personArray.sort(function(a , b){
       
        if (classDiv.classList.contains('asc')){
            if (a[selectedKey] > b[selectedKey]) return 1
             if (a[selectedKey] < b[selectedKey]) return -1
        }
        else {
            if (a[selectedKey] > b[selectedKey]) return -1
            if (a[selectedKey] < b[selectedKey]) return 1
        }})

    generateList ()
    classDiv.classList.toggle('asc')
}

function sortState() {
    
    personArray.sort(function(a , b){
       
       const aFiltred = a.adress.state
       const bFiltred = b.adress.state

    if (state.classList.contains('asc')){
        if (aFiltred > bFiltred) return 1
     if (aFiltred < bFiltred) return -1
    }
    else {
        if (aFiltred > bFiltred) return -1
     if (aFiltred < bFiltred) return 1
    }})
     
    generateList ()
state.classList.toggle('asc')

}