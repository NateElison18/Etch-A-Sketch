let pixelCount = 16;
buildBoard(pixelCount);
setButtonListeners();


function setButtonListeners() {
    const clearBtn = document.querySelector('#clearBtn');
    const pixelCountBtn = document.querySelector('#pixelCountBtn');

    clearBtn.addEventListener('click', () => {
        clearBoard();
        buildBoard(pixelCount);
    });

    pixelCountBtn.addEventListener('click', () => {
        let count = prompt("Input number between 1 and 100: ");
        count = parseInt(count);

        if (!Number.isInteger(count) || count > 100 || count < 1 ) {
            alert("Please enter a number between 1 and 100");
        } else {
            pixelCount = count;
            clearBoard();
            buildBoard(pixelCount);
        }
    });
}

function clearBoard() {
    const board = document.querySelector('#board');
    console.log('inside clear board');
    while(board.firstChild) {
        board.removeChild(board.lastChild);
    }
}

function buildPixel() {
    const pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');

    pixel.addEventListener('mousemove', () => {
        pixel.setAttribute('style', 'background-color: black');

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