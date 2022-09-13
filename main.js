const sketchBox = document.querySelector("#sketch-box");
let isMouseDown = false;

const colorPixel = (pixel, color) => {
    pixel.style.backgroundColor = color;
}

// Detects if mouse is pressed in the global scope
document.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isMouseDown = true;
})

document.addEventListener("mouseup", (e) => {
    e.preventDefault();
    isMouseDown = false;
})

function createGrids(sketchBox, dimension) {
    // Empty the sketch box
    sketchBox.innerHTML = "";

    // Insert all the grids og the sketchBox
    for (let i = 1; i < dimension; i++) {
        // Create a row
        const row = document.createElement("div");
        row.classList.add("container");
        row.classList.add("pixel-row");
        for (let j = 1; j < dimension; j++) {
            // Create and insert all pixels in Row
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");

            //Handle mouse event listeners on the pixels
            pixel.addEventListener("mousemove", (e) => {
                e.preventDefault();
                if (isMouseDown) {
                    const pixel = e.target;
                    colorPixel(pixel, "black");
                }
            })

            pixel.addEventListener("click", (e) => {
                e.preventDefault();
                const pixel = e.target;
                colorPixel(pixel, "black");
            })

            row.appendChild(pixel);
        }
        sketchBox.appendChild(row);
    }
}

createGrids(sketchBox, 16);