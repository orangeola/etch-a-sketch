let rainbow = 0;
let black = 1;
let eraser = 0;

document.getElementById("rainbowbtn").addEventListener("click", function(){ rainbow = 1; black = 0; eraser = 0 });

document.getElementById("blackbtn").addEventListener("click", function(){ black = 1; rainbow = 0; eraser = 0 });

document.getElementById("eraserbtn").addEventListener("click", function(){ eraser = 1; rainbow = 0; black = 0 });

document.getElementById("clearbtn").addEventListener("click", function(){ createGrid(slider.value) });

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
                executeAction(newDiv);
            });

            mainContainer.appendChild(newDiv);
        }
}

function executeAction(myself)
{
    myself.removeAttribute('style');
    if(black === 1){
        myself.style.backgroundColor = "black";
    }
    else if(rainbow === 1){   
        let temp = Math.floor(Math.random()*16777215).toString(16)
        myself.style.backgroundColor = "#" + temp;
    }
    else {
        myself.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    }
    
}

createGrid(25);