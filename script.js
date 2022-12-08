const container = document.querySelector(".grid-playground");
const slider = document.querySelector(".slider-move")


// DEFAULT GAME GRID


for(let i = 0; i <=  63; i++) {
    const cell = document.createElement("div");
    container.appendChild(cell);
    container.style["grid-template-columns"] = "repeat(8, 1fr)";
    container.style["grid-template-rows"] = "repeat(8, 1fr)";
}


// CHANGE THE GRID COLOR IF HOVERING


const allCells = document.querySelectorAll(".grid-playground div");


allCells.forEach(item => {
    item.addEventListener('mouseover', event => {
      item.style.backgroundColor = "black"
    })
})


// CLEAR THE GRID 


function resetGrid() {
    let allDivs = document.querySelectorAll(".grid-playground div")
    allDivs.forEach(item => {
        container.removeChild(item)
    })
}





