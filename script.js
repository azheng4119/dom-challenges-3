let addRow = () => {
    let tempTr = document.createElement('tr');
    let tempTd = document.createElement('td');
    tempTd.innerHTML = "row";
    tempTr.append(tempTd);
    document.getElementById('main').append(tempTr);
}

let removeRow = () => {
    let listOfTr = document.getElementById('main').lastChild.remove();
}

let fillAll = () => {
    let listOfTr = document.getElementsByTagName('td');
    for ( let i = 0; i < listOfTr.length; i++){
        listOfTr[i].style.backgroundColor = "blue";
    }
}

//style.backgroundColor = "blue";