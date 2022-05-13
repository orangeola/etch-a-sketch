const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = "Grid Size: " + slider.value;

slider.oninput = function() {
  output.innerHTML = "Grid Size: " + this.value;
  createGrid(this.value)
} 

const mainContainer = document.querySelector(".container");

function createGrid(newSize)
{
    mainContainer.innerHTML = "";
    mainContainer.style.gridTemplateColumns = "repeat(" + newSize + ", 1fr)";

    for(let i = 0; i < newSize*newSize; i++)
        {
            let newDiv = document.createElement("div");
            newDiv.classList.add("block");

            newDiv.addEventListener("mouseenter", () => {
                newDiv.style.backgroundColor = "black";
            });

            mainContainer.appendChild(newDiv);
        }
}

createGrid(25);