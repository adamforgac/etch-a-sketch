const container = document.querySelector(".grid-playground");
const slider = document.querySelector(".slider-move");
const palette = document.querySelector(".color-palette");


// DEFAULT GAME GRID


for(let i = 0; i <=  63; i++) {
    const cell = document.createElement("div");
    container.appendChild(cell);
    container.style["grid-template-columns"] = "repeat(8, 1fr)";
    container.style["grid-template-rows"] = "repeat(8, 1fr)";
}


// CHANGE THE GRID COLOR IF HOVERING
// CHANGE THE GRID COLOR IF HOVERING
// CHANGE THE GRID COLOR IF HOVERING


const allCells = document.querySelectorAll(".grid-playground div");


allCells.forEach(item => {
    item.addEventListener('mouseover', event => {
      item.style.backgroundColor = "black"
    })
})


// REMOVE THE GRID
// REMOVE THE GRID
// REMOVE THE GRID 


function resetGrid() {
    let allDivs = document.querySelectorAll(".grid-playground div")
    allDivs.forEach(item => {
        container.removeChild(item)
    })
}


// CLEAR THE GRID
// CLEAR THE GRID
// CLEAR THE GRID


const cleanButton = document.querySelector("#cleaner")
cleanButton.addEventListener("click", cleaner)
function cleaner() {
    allCells.forEach(item => {
        item.style.backgroundColor = "white";
    })

    allCells.forEach(item => {
        item.addEventListener('mouseover', event => {
          item.style.backgroundColor = currentColor
        })
    })
}


// LET THE PLAYER CHOOSE HIS OWN GRID
// LET THE PLAYER CHOOSE HIS OWN GRID
// LET THE PLAYER CHOOSE HIS OWN GRID


slider.addEventListener("input", createCustomGrid)

function createCustomGrid() {
    resetGrid()


    let currentColor = palette.value
    currentValue = slider.value
    
    for(let i = 0; i <= currentValue*currentValue-1; i++) {
        const customCell = document.createElement("div");
        container.appendChild(customCell);
        container.style["grid-template-columns"] = `repeat(${currentValue}, 1fr)`;
        container.style["grid-template-rows"] = `repeat(${currentValue}, 1fr)`;
    }


    const allCells = document.querySelectorAll(".grid-playground div");

    allCells.forEach(item => {
        item.addEventListener('mouseover', event => {
          item.style.backgroundColor = currentColor
        })
    })


    palette.addEventListener("input", changeColor);

    function changeColor() {
        let currentColor = palette.value

        allCells.forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = currentColor
        })
     })
    }


    const cleanButton = document.querySelector("#cleaner")
    cleanButton.addEventListener("click", cleaner)
    function cleaner() {
        let currentColor = palette.value

        allCells.forEach(item => {
        item.style.backgroundColor = "white";
        })

        allCells.forEach(item => {
            item.addEventListener('mouseover', event => {
              item.style.backgroundColor = currentColor
            })
        })
    }


    eraser.addEventListener("click", eraseGrid)

    function eraseGrid() {
        allCells.forEach(item => {
            item.addEventListener('mouseover', event => {
                item.style.backgroundColor = "white"
            })
        })
    }


    const slideInfo = document.querySelector("#grid-value-text")
    slideInfo.textContent = `${currentValue} x ${currentValue}`
}


// LET THE USER CHANGE THE COLOR
// LET THE USER CHANGE THE COLOR
// LET THE USER CHANGE THE COLOR


palette.addEventListener("input", changeColor);

function changeColor() {
    let currentColor = palette.value

    allCells.forEach(item => {
        item.addEventListener('mouseover', event => {
          item.style.backgroundColor = currentColor
        })
    })
}


// LET THE PLAYER ERASE THE GRID
// LET THE PLAYER ERASE THE GRID
// LET THE PLAYER ERASE THE GRID


const eraser = document.querySelector("#eraser")
eraser.addEventListener("click", eraseGrid)

function eraseGrid() {
    allCells.forEach(item => {
        item.addEventListener('mouseover', event => {
          item.style.backgroundColor = "white"
        })
    })
}









