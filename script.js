let addRow = () => {
    let tempTr = document.createElement('tr');
    let listOfTr = document.getElementsByTagName('tr');
    if (listOfTr.length === 0){
        let tempTd = document.createElement('td');
        tempTd.innerHTML = "row";
        tempTr.append(tempTd);
    }else{
        for (let i = 0; i < listOfTr[0].getElementsByTagName('td').length; i++){
            let tempTd = document.createElement('td');
            tempTd.innerHTML = "row";
            tempTr.append(tempTd);
        }
    }
    document.getElementById('main').append(tempTr);
}

let removeRow = () => {
    let listOfTr = document.getElementById('main').lastChild.remove();
}

let addColumn = () =>{
    let listOfTr = document.getElementsByTagName('tr');
    if (listOfTr.length === 0){
        addRow();
    }else{
        for ( let i = 0; i < listOfTr.length; i++){
            let tempTd = document.createElement('td');
            tempTd.innerHTML = "row";
            listOfTr[i].append(tempTd);
        }
    }

}

let removeColumn = () => {
    let listOfTr = document.getElementsByTagName('tr');
    for ( let i = 0; i < listOfTr.length; i++){
        listOfTr[i].lastChild.remove();
    }
}
let fillAll = () => {
    let listOfTr = document.getElementsByTagName('td');
    for ( let i = 0; i < listOfTr.length; i++){
        listOfTr[i].style.backgroundColor = "blue";
    }
}

//style.backgroundColor = "blue";