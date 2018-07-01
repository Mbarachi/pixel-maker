// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
const height = document.getElementById("inputHeight").value;
const weight = document.getElementById("inputWeight").value;
document.getElementById("pixelCanvas").innerHTML = "<p></p>";

	for (var i = 1; i <= height; i++) {
		for (var j = 1; j <= weight; j++) {
			node = document.createElement("td")
			document.getElementById("pixelCanvas").appendChild(`<td id="${i}x${j}"></td>`);
		}
	}


}


