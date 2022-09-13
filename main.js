const sketchBox = document.querySelector("#sketch-box");

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
            row.appendChild(pixel);
        }
        sketchBox.appendChild(row);
    }
}

createGrids(sketchBox, 16);