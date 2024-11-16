const GRID_DIMENSIONS = 16;

const container = document.getElementById("container");

function buildCanvas(cells) {
	if (cells <= 0) {
		alert("Cell number cannot be less than 1.");
		return;
	}

	if (container.childElementCount > 0) {
		for (const childNode of container.childNodes) {
			childNode.remove();
		}
	}

	const targetCells = cells ? cells : GRID_DIMENSIONS;

	const gridEl = document.createElement("div");
	gridEl.className = "grid";

	for (let x = 0; x < targetCells; x++) {
		const columnEl = document.createElement("div");
		columnEl.classList.add("column");

		for (let y = 0; y < GRID_DIMENSIONS; y++) {
			const boxEl = document.createElement("div");
			boxEl.classList.add("row", "box");
			columnEl.appendChild(boxEl);
		}

		gridEl.appendChild(columnEl);
	}

	container.appendChild(gridEl);
}

document.addEventListener("load", buildCanvas());

const boxList = document.getElementsByClassName("box");

console.log(document.getElementsByClassName("box"));

for (const box of boxList) {
	box.addEventListener("mouseover", (e) => {
		e.target.style.backgroundColor = "black";
	});
}

document.addEventListener("click", (e) => {
	switch (e.target.id) {
		case "resetCanvas": {
			for (const box of boxList) {
				box.style.backgroundColor = "white";
			}
			break;
		}
	}
});
