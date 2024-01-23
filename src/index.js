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
    if (pixelToUpdate)
        pixelToUpdate.isActive = !pixelToUpdate.isActive;
    updateCanvas(pixelToUpdate === null || pixelToUpdate === void 0 ? void 0 : pixelToUpdate.x, pixelToUpdate === null || pixelToUpdate === void 0 ? void 0 : pixelToUpdate.y, pixelToUpdate === null || pixelToUpdate === void 0 ? void 0 : pixelToUpdate.isActive);
}
function updateCanvas(x, y, isActive) {
    const pixelBtn = document.getElementById(`${x}-${y}`);
    if (pixelBtn)
        pixelBtn.style.backgroundColor = isActive ? '#28bb84' : '#efefe1';
}
