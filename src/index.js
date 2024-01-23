"use strict";
// create an array of objects to store x, y & isActive flag
const pixels = [];
// Create a canvas with pixel buttons and adding isActive as false by default
function createCanvas() {
    const canvasSize = 8;
    const canvas = document.getElementById('canvas');
    for (let x = 0; x < canvasSize; x++) {
        for (let y = 0; y < canvasSize; y++) {
            pixels.push({ x: x, y: y, isActive: false });
            const pixelBtn = createPixels({ x: x, y: y, isActive: false });
            canvas === null || canvas === void 0 ? void 0 : canvas.append(pixelBtn);
        }
    }
}
createCanvas();
// Create the pixels with x & y coordinates
function createPixels(pixel) {
    const pixelBtn = document.createElement('button');
    pixelBtn.id = `${pixel.x}-${pixel.y}`;
    pixelBtn.onclick = function () {
        updateState(pixel.x, pixel.y);
    };
    return pixelBtn;
}
// Update the state of pixel (change color) from active to inactive or vice versa
function updateState(x, y) {
    const pixelToUpdate = pixels.find(p => p.x === x && p.y === y);
    if (pixelToUpdate) {
        pixelToUpdate.isActive = !pixelToUpdate.isActive;
        updateCanvas(pixelToUpdate);
    }
}
function updateCanvas(pixel) {
    const pixelBtn = document.getElementById(`${pixel.x}-${pixel.y}`);
    if (pixelBtn)
        pixelBtn.style.backgroundColor = pixel.isActive ? '#28bb84' : '#efefe1';
}
function userSelection() {
    const colorInput = document.getElementById('color-input');
    const refreshBtn = document.getElementById('refresh-btn');
    colorInput === null || colorInput === void 0 ? void 0 : colorInput.addEventListener('change', function () {
        console.log(colorInput.value);
    });
}
