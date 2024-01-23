// create an array of objects to store x, y & isActive flag
const pixels: {x: number, y: number, isActive: boolean}[] = []

// Create a canvas with pixel buttons and adding isActive as false by default
function createCanvas(): void {
    const canvasSize = 8
    const canvas = document.getElementById('canvas')

    for(let x = 0; x < canvasSize; x++) {
        for(let y = 0; y < canvasSize; y++) {
            pixels.push({x: x, y: y, isActive: false})

            const pixelBtn = createPixels({x: x, y: y, isActive: false})
            canvas?.append(pixelBtn)
        }
    }
}

createCanvas()

// Create the pixels with x & y coordinates
function createPixels(pixel: {
    x: number,
    y: number,
    isActive: boolean
}) : HTMLButtonElement {
    const pixelBtn = document.createElement('button')
    pixelBtn.id = `${pixel.x}-${pixel.y}`

    pixelBtn.onclick = function() {
        updateState(pixel.x, pixel.y)
    }

    return pixelBtn
}

// Update the state of pixel (change color) from active to inactive or vice versa
function updateState(x: number, y: number): void {
    const pixelToUpdate = pixels.find(p => p.x === x && p.y === y)
    if(pixelToUpdate) 
        pixelToUpdate.isActive = !pixelToUpdate.isActive
    updateCanvas(pixelToUpdate?.x, pixelToUpdate?.y, pixelToUpdate?.isActive)
}

function updateCanvas(x: number | undefined, y: number | undefined, isActive: boolean | undefined) {
    const pixelBtn = document.getElementById(`${x}-${y}`)
    if(pixelBtn)
        pixelBtn.style.backgroundColor = isActive ? '#28bb84' : '#efefe1'
}

