`strict`;

// dom
const container = document.getElementById(`container`);
const rows = document.getElementsByClassName(`gridrow`);
const cells = document.getElementsByClassName(`cell`);

// create a row

function createRow(size) {
  for (let i = 0; i < size; i++) {
    let row = document.createElement(`div`);
    container.appendChild(row).className = `gridrow`;
  }
}

// create columns

function createColumn(size) {
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < size; j++) {
      let column = document.createElement(`div`);
      rows[j].appendChild(column).className = `cell`;
    }
  }
}

defaultGrid();
// make a default grid

function defaultGrid() {
  createRow(16);
  createColumn(16);
}
