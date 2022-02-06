const container = document.querySelector('#container');

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => reset());

let newSquares = 16;
let squareWidth = 0;
let squareHeight = 0;

const containerWidth = 800;
const containerHeight = 800;

function createGrid () {
    for (let i = 1; i <= newSquares * newSquares; i++) {
        let square = document.createElement('div');
        squareSize();
        square.classList.add('square');
        square.setAttribute('style', `width: ${squareWidth}px`, `height: ${squareHeight}px`);
        square.addEventListener('mouseover', () => square.style.background = 'red');
        container.appendChild(square);
    }
}

function squareSize () {
    squareWidth = containerWidth / newSquares;
    squareHeight = containerHeight / newSquares;
}

function reset() {
    const oldSquare = document.querySelectorAll('.square');
    oldSquare.forEach((square) => {container.removeChild(square)})
    newSquares = prompt('Please enter the desired number of squares per side. Up to 100');
    for (let z = 0; z < 1; z++){
        if (newSquares > 100) {
            newSquares = prompt('Please enter a number of 100 or smaller.')
            --z
        }else {
         
        }
    }
   createGrid();
}

