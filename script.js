let color = 'black';
let click = true;

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
    if (input >= 2 && input <= 100) {
        populateGrid(input);
    } else {
        console.log('Error: input must be between 2 and 100');
    };
};

function colorSquare() {
    if (click) {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
};

function changeColor(choice) {
    color = choice;
};

function resetGrid() {
    let gridContainer = document.querySelector('.grid-container');
    let squares = gridContainer.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
};

document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != 'BUTTON') {
        click = !click;
        if (click) {
            document.querySelector('.mode').textContent = "Coloring: On";
        } else {
            document.querySelector('.mode').textContent = "Coloring: Off";
        };
    };
});