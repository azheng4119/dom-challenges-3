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