let color = 'black';

function populateGrid(size) {
    let gridContainer = document.querySelector(".grid-container");
    let squares = gridContainer.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    gridContainer.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    for(let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        gridContainer.insertAdjacentElement('beforeend', square);
    };
};

populateGrid(16);

function changeSize(input) {
    if (input >= 2 || input <= 100) {
        populateGrid(input);
    } else {
        console.log('too many squares');
    }
};

function colorSquare() {
    this.style.backgroundColor = color;
};