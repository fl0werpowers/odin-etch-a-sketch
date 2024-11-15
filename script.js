const GRID_DIMENSIONS = 16;

const container = document.getElementById("container");

const gridEl = document.createElement("div");
gridEl.className = "grid";

for (let x = 0; x < GRID_DIMENSIONS; x++) {
	const columnEl = document.createElement("div");
	columnEl.classList.add("column");

	for (let y = 0; y < GRID_DIMENSIONS; y++) {
		const boxEl = document.createElement("div");
		boxEl.classList.add("column", "box");
		columnEl.appendChild(boxEl);
	}

	gridEl.appendChild(columnEl);
}

container.appendChild(gridEl);
