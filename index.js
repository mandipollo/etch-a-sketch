///

`strict`;

let color = `black`;
// populate board
function etch(size) {
  let board = document.querySelector(`.board`);
  let squares = board.querySelectorAll(`div`);
  squares.forEach((div) => div.remove());

  let amount = size * size;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < amount; i++) {
    let square = document.createElement(`div`);
    square.addEventListener(`mouseover`, colorBoard);
    square.style.backgroundColor = `white`;
    board.appendChild(square);
  }
}

// input size for board
function changeSize(input) {
  if (input >= 16 && input <= 100) {
    etch(input);
  } else {
    console.log(`please input between 16 and 100`);
  }
}

// color the board

function colorBoard() {
  this.style.backgroundColor = color;
}

// change color
function changeColor(choice) {
  color = choice;
}

/// random color

function colorSquare() {
  if (color === `random `) {
    this.style.backgroundColor = `hs1($(Math.random() * 360), 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

// reset

function reset() {
  let board = document.querySelector(`.board`);
  let squares = board.querySelectorAll(`div`);
  squares.forEach((div) => (div.style.backgroundColor = `white`));
}
