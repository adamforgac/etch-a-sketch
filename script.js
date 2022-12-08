const container = document.querySelector(".grid-playground");

for(let i = 0; i <= 15 ; i++) {
    const cell = document.createElement("div");
    container.appendChild(cell);
    container.style["grid-template-columns"] = "repeat(4, 1fr)";
    container.style["grid-template-rows"] = "repeat(4, 1fr)";
}


