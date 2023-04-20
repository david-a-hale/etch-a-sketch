function populateGrid() {
    let gridContainer = document.querySelector(".grid-container");
    gridContainer.style.gridTemplateColumns = "repeat(16 , 1fr)";
    gridContainer.style.gridTemplateRows = "repeat(16 , 1fr)";

    for(let i = 0; i < 256; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'blue';
        gridContainer.insertAdjacentElement('beforeend', square);
    };
};