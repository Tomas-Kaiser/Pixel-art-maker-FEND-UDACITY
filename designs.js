// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Select value of height 
const height = document.querySelector('#inputHeight').value;

// Select value of width
const width = document.querySelector('#inputWeight').value;

// Select table
const table = document.querySelector('#pixelCanvas');

// Delete table if there is
table.innerHTML = '';

// Create table
for (let i = 1; i <= height; i++){
    const newTr = document.createElement('tr');
    table.appendChild(newTr);

        for (let j = 1; j <= width; j++){
            const newTd = document.createElement('td');
            table.lastElementChild.appendChild(newTd)
        }
    }

// set event listener for table - adding color
table.addEventListener('click', function(event) {
    if (event.target.nodeName === 'TD'){
        const colorVal = document.querySelector('#colorPicker').value;
        event.target.style.backgroundColor = colorVal;
    }
});

}

// invoke table - click the submit button
document.querySelector('#button').addEventListener('click', function (event) {
    event.preventDefault();
    makeGrid();
});

