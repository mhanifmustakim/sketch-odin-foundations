const sketchBox = document.querySelector("#sketch-box");
let isMouseDown = false;
let currentState = "black";

const colorPixel = (pixel, color) => {
    pixel.style.backgroundColor = color;
}

// Detects if mouse is pressed in the global scope
document.addEventListener("mousedown", (e) => {
    isMouseDown = true;
})

document.addEventListener("mouseup", (e) => {
    isMouseDown = false;
})

// AddEventListener for settings
const clearBtn = document.querySelector("#clear-btn");
const eraseBtn = document.querySelector("#erase-btn");
const boxSize = document.querySelector("#box-size");

clearBtn.addEventListener("click", (e) => {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => pixel.removeAttribute("style"));
})

boxSize.addEventListener("change", (e) => {
    const input = e.target.value;
    if (input < 10 || input > 64) {
        return
    }

    clearSketchBox();
    createGrids(sketchBox, input);
})

eraseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    eraseBtn.classList.toggle("activated");
    if (currentState !== "eraser") {
        currentState = "eraser";
    } else {
        currentState = "black";
    }
})

// Function to handle DOM
function clearSketchBox() {
    sketchBox.innerHTML = "";
}

function handleState(pixel, currentState) {
    switch (currentState) {
        case "black":
            colorPixel(pixel, "black");
            return
        case "eraser":
            pixel.removeAttribute("style");
            return
    }
}

function createGrids(sketchBox, dimension) {
    // Insert all the grids og the sketchBox
    for (let i = 0; i < dimension; i++) {
        // Create a row
        const row = document.createElement("div");
        row.classList.add("container");
        row.classList.add("pixel-row");
        for (let j = 0; j < dimension; j++) {
            // Create and insert all pixels in Row
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");

            //Handle mouse event listeners on the pixels
            pixel.addEventListener("mousemove", (e) => {
                e.preventDefault();
                if (isMouseDown) {
                    const pixel = e.target;
                    handleState(pixel, currentState);
                }
            })

            pixel.addEventListener("click", (e) => {
                e.preventDefault();
                const pixel = e.target;
                handleState(pixel, currentState);
            })

            row.appendChild(pixel);
        }
        sketchBox.appendChild(row);
    }
}

createGrids(sketchBox, 16);