// Clear the pad or reload it!!!

var clear = document.getElementById("clear");

clear.addEventListener('click', function() {
    window.location.reload();
    alert("Start from scratch!")
})

// Creating grid

var grid = document.getElementById("sketch");
var input_color = document.getElementById("input-color");

var color_choices = document.querySelectorAll(".color_type");

function createGrid(num) {
    var gridArea = num * num;
    for(var i=1; i<gridArea; i++) {
        var gridItem = document.createElement("div");
        grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        grid.insertAdjacentElement('beforeend', gridItem);
    }
    var pixels = grid.querySelectorAll('div');
    pixels.forEach(pixel => {
        pixel.style.border = "1px solid lightgray";
        pixel.addEventListener('mouseover', colorPick);
    })
}

// Pick the color
var color = randomColorGenerator();

function colorPick() {
    switch(color) {
        case 'black':
            this.style.backgroundColor = '#000000';
            break;
        case 'random':
            var col = randomColorGenerator();
            this.style.backgroundColor = col;
            break;
        case 'eraser':
            this.style.backgroundColor = '#ffffff';
            break;
        default:
            this.style.backgroundColor = color;
            break;
    }
}

// Resizing the grids
const resize = document.getElementById("resize");
resize.addEventListener('click', function() {
    var num = prompt("Select a size for the grid!");
    var resizepixels = grid.querySelectorAll("div");
    resizepixels.forEach(resizePixel=> resizePixel.remove())
    createGrid(num);
});

// Color Picker
function userColorSelection(event) {
    color = event.target.value;
}


// Creating a default grid
createGrid(16);


//  Random color generator
function randomColorGenerator() {
    var a = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var c = Math.floor(Math.random()*256);
    var k = "rgb(" + a + "," + b + "," + c + ")";
    return k;
}

// Adding events for each button click

color_choices.forEach(color_choice => color_choice.addEventListener('click', function() {
    var k=color_choice.id;
    if(k=='black') {
        color = 'black';
    } else if(k=='random') {
        color = 'random';
    } else if(k=='eraser') {
        color = 'eraser';
    } else {
        color = 'cadetblue';
    }
}));

// Input color for user pick

input_color.addEventListener('change', userColorSelection, false);
input_color.addEventListener('input', userColorSelection, false);






















