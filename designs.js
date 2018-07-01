// Select color input
const colorPicker = $("#colorPicker").val();

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function (e) {
	e.preventDefault();
	makeGrid()
})

function makeGrid() {

// Your code goes here!
const height = $("#inputHeight").val()
const width = $("#inputWeight").val()
const canvasSize = {height: height, width: width};

console.log(canvasSize)

}


