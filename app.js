// for (let i = 1; i <= 100; i++) {
// 	console.log(`<div class="box" id="${i}">${i}</div>`)
// }


const switchButton = document.querySelector("#switch");
const solution = document.querySelector("#solution");

function toggleColor(id) {
	let item = document.getElementById(`${id}`);
	if (window.getComputedStyle(item).backgroundColor === 'rgb(255, 255, 0)') {
		item.style.backgroundColor = 'rgb(0, 0, 0)';
		item.style.color = 'rgb(128, 128, 128)';
	} else if (window.getComputedStyle(item).backgroundColor === 'rgb(0, 0, 0)') {
		item.style.backgroundColor = 'rgb(255, 255, 0)';
		item.style.color = 'rgb(0, 0, 0)';
	}
}

function changeInterval(i) {
	for (id = i; id <= 100; id += i) {
		console.log(`i: ${i}, id: ${id}`);
		toggleColor(id);
	}
}

let n = 0

function switchLights() {
	n++;
	changeInterval(n);
}



switchButton.onclick = () => {
	switchLights();
}

solution.onclick = () => {
	for (let i = 1; i <= 100; i++) {
		changeInterval(i);
	}
}