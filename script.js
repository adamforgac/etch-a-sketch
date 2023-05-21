const container = document.querySelector('.grid-playground');
const slider = document.querySelector('.slider-move');
const palette = document.querySelector('.color-palette');

// DEFAULT GAME GRID

for (let i = 0; i <= 63; i++) {
  const cell = document.createElement('div');
  container.appendChild(cell);
  container.style['grid-template-columns'] = 'repeat(8, 1fr)';
  container.style['grid-template-rows'] = 'repeat(8, 1fr)';
}

// CHANGE THE GRID COLOR IF HOVERING
// CHANGE THE GRID COLOR IF HOVERING
// CHANGE THE GRID COLOR IF HOVERING

const allCells = document.querySelectorAll('.grid-playground div');

allCells.forEach((item) => {
  item.addEventListener('mouseover', (event) => {
    item.style.backgroundColor = 'black';
  });
});

// REMOVE THE GRID
// REMOVE THE GRID
// REMOVE THE GRID

function resetGrid() {
  const allDivs = document.querySelectorAll('.grid-playground div');
  allDivs.forEach((item) => {
    container.removeChild(item);
  });
}

// CLEAR THE GRID
// CLEAR THE GRID
// CLEAR THE GRID

const cleanButton = document.querySelector('#cleaner');

cleanButton.addEventListener('click', cleaner);

function cleaner() {
  allCells.forEach((item) => {
    item.style.backgroundColor = 'white';
  });

  allCells.forEach((item) => {
    item.addEventListener('mouseover', (event) => {
      item.style.backgroundColor = currentColor;
    });
  });
}

// LET THE PLAYER CHOOSE HIS OWN GRID
// LET THE PLAYER CHOOSE HIS OWN GRID
// LET THE PLAYER CHOOSE HIS OWN GRID

slider.addEventListener('input', createCustomGrid);

function createCustomGrid() {
  resetGrid();

  const currentColor = palette.value;
  currentValue = slider.value;

  for (let i = 0; i <= currentValue * currentValue - 1; i++) {
    const customCell = document.createElement('div');
    container.appendChild(customCell);
    container.style['grid-template-columns'] = `repeat(${currentValue}, 1fr)`;
    container.style['grid-template-rows'] = `repeat(${currentValue}, 1fr)`;
  }

  // CORRECT COLOR

  const allCells = document.querySelectorAll('.grid-playground div');

  allCells.forEach((item) => {
    item.addEventListener('mouseover', (event) => {
      item.style.backgroundColor = currentColor;
    });
  });

  palette.addEventListener('input', changeColor);

  function changeColor() {
    const currentColor = palette.value;

    allCells.forEach((item) => {
      item.addEventListener('mouseover', (event) => {
        item.style.backgroundColor = currentColor;
      });
    });
  }

  // CLEAN BUTTON

  const cleanButton = document.querySelector('#cleaner');

  cleanButton.addEventListener('click', cleaner);

  function cleaner() {
    const currentColor = palette.value;

    allCells.forEach((item) => {
      item.style.backgroundColor = 'white';
    });

    allCells.forEach((item) => {
      item.addEventListener('mouseover', (event) => {
        item.style.backgroundColor = currentColor;
      });
    });
  }

  // ERASER BUTTON

  eraser.addEventListener('click', eraseGrid);

  function eraseGrid() {
    allCells.forEach((item) => {
      item.addEventListener('mouseover', (event) => {
        item.style.backgroundColor = 'white';
      });
    });
  }

  // RAINBOW BUTTON

  rainbow.addEventListener('click', createRainbow);

  function createRainbow() {
    allCells.forEach((item) => {
      item.addEventListener('mouseover', (event) => {
        item.style.backgroundColor = rainbowColors[randomColor()];
      });
    });
  }

  const slideInfo = document.querySelector('#grid-value-text');
  slideInfo.textContent = `${currentValue} x ${currentValue}`;
}

// LET THE USER CHANGE THE COLOR
// LET THE USER CHANGE THE COLOR
// LET THE USER CHANGE THE COLOR

palette.addEventListener('input', changeColor);

function changeColor() {
  const currentColor = palette.value;

  allCells.forEach((item) => {
    item.addEventListener('mouseover', (event) => {
      item.style.backgroundColor = currentColor;
    });
  });
}

// LET THE PLAYER ERASE THE GRID
// LET THE PLAYER ERASE THE GRID
// LET THE PLAYER ERASE THE GRID

const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', eraseGrid);

function eraseGrid() {
  allCells.forEach((item) => {
    item.addEventListener('mouseover', (event) => {
      item.style.backgroundColor = 'white';
    });
  });
}

// RAINBOW MODE

const rainbow = document.querySelector('#rainbow');
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'orange', 'pink', 'purple', 'brown', 'salmon', 'tomato', 'khaki', 'lime', 'olive', 'teal', 'aqua', 'cyan', 'navy'];

function randomColor() {
  const randomPicker = (Math.floor(Math.random() * rainbowColors.length));
  return randomPicker;
}

rainbow.addEventListener('click', createRainbow);

function createRainbow() {
  allCells.forEach((item) => {
    item.addEventListener('mouseover', (event) => {
      item.style.backgroundColor = rainbowColors[randomColor()];
    });
  });
}

// CHANGE GRID SIZE
// CHANGE GRID SIZE
// CHANGE GRID SIZE

const zoomer = document.querySelector('.screen-size');
zoomer.addEventListener('click', zoomIt);
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

function zoomIt() {
  container.classList.toggle('grid-full');
  minus.classList.toggle('visible');
  plus.classList.toggle('invisible');
}
