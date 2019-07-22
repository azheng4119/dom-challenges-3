// Adds/Create row when user clicks Add Button
let addRow = () => {
    let tempTr = document.createElement('tr');
    let listOfTr = document.getElementsByTagName('tr');
    let amountOfTr = listOfTr.length;
    if (amountOfTr === 0){
        amountOfTr = 1;
    }else{
        amountOfTr = listOfTr[0].getElementsByTagName('td').length;
    }
    for (let i = 0; i < amountOfTr; i++){
        let tempTd = document.createElement('td');
        tempTd.setAttribute("id", "cell");
        tempTd.width = "50px";
        tempTd.height = "50px";
        tempTd.addEventListener("mouseover", function() {
            this.style.backgroundColor = document.getElementById('colordrop').value;          
        });
        tempTr.append(tempTd);   
    }
    document.getElementById('main').append(tempTr);
  
}

// Remove last row when user clicks remove row
let removeRow = () => {
    let listOfTr = document.getElementById('main').lastChild.remove();
}

// Add/Create column when user clicks add column
let addColumn = () =>{
    let listOfTr = document.getElementsByTagName('tr');
    if (listOfTr.length === 0){
        addRow();
    }else{
        for ( let i = 0; i < listOfTr.length; i++){
            let tempTd = document.createElement('td');
            tempTd.setAttribute("id", "cell");
            tempTd.width = "50px";
            tempTd.height = "50px";
            tempTd.addEventListener("mouseover", function() {            
                this.style.backgroundColor = document.getElementById('colordrop').value;              
            });
            listOfTr[i].append(tempTd);
        }
    }

}

// Remove last column when user click remove column
let removeColumn = () => {
    let listOfTr = document.getElementsByTagName('tr');
    for ( let i = 0; i < listOfTr.length; i++){
        listOfTr[i].lastChild.remove();
    }
}

// Fill all column and rows with specified color user selected in drop down menu
let fillAll = (color) => {
    let listOfTr = document.getElementsByTagName('td');
    for ( let i = 0; i < listOfTr.length; i++){
        listOfTr[i].style.backgroundColor = color;
    }
}

// Fill cells without color to user selected color from dropdown menu
let fillUnColored = () => {
    let listOfTr = document.getElementsByTagName('td');
    for ( let i = 0; i < listOfTr.length; i++){
        if (listOfTr[i].style.backgroundColor == 'whitesmoke'){
            listOfTr[i].style.backgroundColor = document.getElementById('colordrop').value;
            
        }
    }
}