let pixelCount = 16;
let color = 'black';
let mode = 'normal';
buildBoard(pixelCount);
setButtonListeners();

function generateRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function setButtonListeners() {
    const clearBtn = document.querySelector('#clearBtn');
    const pixelCountBtn = document.querySelector('#pixelCountBtn');
    const rainbowBtn = document.querySelector('#rainbowBtn');
    
    clearBtn.addEventListener('click', () => {
        clearBoard();
        buildBoard(pixelCount);
    });

    pixelCountBtn.addEventListener('click', () => {
        getPixelCountFromUser();
    });

    rainbowBtn.addEventListener('click', () => {
        toggleRainbowMode();
    });

}

function toggleRainbowMode() {
    if(mode === 'rainbow') {
        mode = 'normal';
        color = 'black';
    } else
        mode = 'rainbow';
}

function getPixelCountFromUser() {
    let count = prompt("Input number between 1 and 100: ");
    count = parseInt(count);

    if (!Number.isInteger(count) || count > 100 || count < 1 ) {
        alert("Please enter a number between 1 and 100");
    } else {
        pixelCount = count;
        clearBoard();
        buildBoard(pixelCount);
    }
}

function clearBoard() {
    const board = document.querySelector('#board');
    while(board.firstChild) {
        board.removeChild(board.lastChild);
    }
}

function buildPixel() {
    const pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');

    pixel.addEventListener('mousemove', () => {
        if(mode === 'rainbow') {
            generateRandomColor();
        }

        pixel.setAttribute('style', 'background-color: ' + color);

    });

    return pixel;
}

function buildRow(length) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');

    for(let i = 0; i < length; i++) {
        const pixel = buildPixel();
        row.appendChild(pixel);
    }

    return row;
}

function buildBoard(size) {
    const board = document.querySelector('#board');

    for(let i = 0; i < size; i++) {
        const row = buildRow(size);
        board.appendChild(row);
    }

}