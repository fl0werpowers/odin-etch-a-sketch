const GRID_DIMENSIONS = 16;

const container = document.getElementById("container");
const boxList = document.getElementsByClassName("box");

let cellHue = 0;

setInterval(() => {
	cellHue++;
	if (cellHue >= 355) cellHue = 0;
}, 10);

function buildCanvas(cells) {
	if (cells <= 0) {
		alert("Cell number cannot be less than 1.");
		return;
	}

	let targetCells = cells ? cells : GRID_DIMENSIONS;

	if (targetCells > 100) {
		alert(
			"Maximum cell count limited to 100 for performance reasons. Defaulting to maximum value.",
		);
		targetCells = 100;
	}

	if (container.childElementCount > 0) {
		for (const childNode of container.childNodes) {
			childNode.remove();
		}
	}

	const gridEl = document.createElement("div");
	gridEl.className = "grid";

	for (let x = 0; x < targetCells; x++) {
		const columnEl = document.createElement("div");
		columnEl.classList.add("column");

		for (let y = 0; y < targetCells; y++) {
			const boxEl = document.createElement("div");
			boxEl.classList.add("row", "box");
			boxEl.dataset.lightValue = 90;
			columnEl.appendChild(boxEl);
		}

		gridEl.appendChild(columnEl);
	}

	container.appendChild(gridEl);

	for (const box of boxList) {
		box.addEventListener("mouseover", (e) => {
			const lightValue = e.target.dataset.lightValue;
			e.target.style.backgroundColor = `hsl(${cellHue}, 100%, ${lightValue}%)`;
			e.target.dataset.lightValue =
				lightValue > 0 ? lightValue - 10 : lightValue;
		});
	}
}

function promptCellCount() {
	let cellCountInput = Number(
		window.prompt("Enter the desired number of cells:", ""),
	);

	if (Number.isNaN(cellCountInput)) {
		alert("Incorrect number!");
		cellCountInput = promptCellCount();
	}

	return cellCountInput;
}

document.addEventListener("load", buildCanvas());

document.addEventListener("click", (e) => {
	switch (e.target.id) {
		case "setCanvasSize": {
			buildCanvas(promptCellCount());
			break;
		}
		case "resetCanvas": {
			for (const box of boxList) {
				box.style.backgroundColor = "white";
				box.dataset.lightValue = 90;
			}
			break;
		}
	}
});
