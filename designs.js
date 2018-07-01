// Select color input
const colorPicker = $("#colorPicker").val();

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function (e) {
	e.preventDefault();
	makeGrid();
})

function makeGrid() {

	// Your code goes here!
	$("table").html("")

	const height = $("#inputHeight").val();
	const width = $("#inputWeight").val();
	const canvasSize = {height: height, width: width};

	for (var i = canvasSize.height; i >= 1; i--) {
		const row = document.createElement("tr");
		row.setAttribute("id", i);
		for (var j = canvasSize.width; j >= 1; j--) {
			const id = i + "_" + j;
			const td = document.createElement("td");
			td.setAttribute("id", id);
			row.prepend(td);
		}
		$("table").prepend(row);
	}
}
