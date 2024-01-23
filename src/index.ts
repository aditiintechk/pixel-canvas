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
    
    if(pixelToUpdate) {
        pixelToUpdate.isActive = !pixelToUpdate.isActive
        updateCanvas(pixelToUpdate)
    }
}

function updateCanvas(pixel: {
    x: number,
    y: number,
    isActive: boolean
}): void {
    const pixelBtn = document.getElementById(`${pixel.x}-${pixel.y}`)

    if(pixelBtn)
        pixelBtn.style.backgroundColor = pixel.isActive ? '#28bb84' : '#efefe1'
}

function userSelection(): void {
    const colorInput = document.getElementById('color-input') as HTMLInputElement
    const refreshBtn = document.getElementById('refresh-btn')
    
    colorInput?.addEventListener('change', function() {
        console.log(colorInput.value)
    })
}


