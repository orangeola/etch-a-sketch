const mainContainer = document.querySelector(".container");
let gridSize = 25;
mainContainer.style.gridTemplateColumns = "repeat(" + gridSize + ", 1fr)";

for(let i = 0; i < gridSize*gridSize; i++)
{
    let newDiv = document.createElement("div");
    newDiv.classList.add("block");

    newDiv.addEventListener("mouseenter", () => {
        newDiv.style.backgroundColor = "black";
    });

    mainContainer.appendChild(newDiv);
}