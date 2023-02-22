// to generate HTML code:
// for (let i = 1; i <= 100; i++) {
// 	console.log(`<div class="box" id="${i}">${i}</div>`)
// }

// array for room numbers, number of switches, divisors

const data = [];

// array for recording divisors

const divisors = [];
for (let i = 0; i < 100; i++) {
	divisors[i] = new Array(0);
}
// array for recording the number of switches

const switchesData = [];
for (let i = 0; i < 100; i++) {
	switchesData[i] = 0;
}

function item(room, switches, numbers) {
	this.room = room;
	this.switches = switches;
	this.numbers = numbers
}

const switchButton = document.querySelector("#switch");
details.disabled = true;

// %%%%%%%%%%%%%%% SWITCH %%%%%%%%%%%%%%%%%%

function toggleColor(id) {
	let item = document.getElementById(`${id}`);
	if (window.getComputedStyle(item).backgroundColor === 'rgb(255, 255, 0)') {
		item.style.backgroundColor = 'rgb(0, 0, 0)';
		item.style.color = 'rgb(128, 128, 128)';
		switchesData[id - 1]++;
	} else if (window.getComputedStyle(item).backgroundColor === 'rgb(0, 0, 0)') {
		item.style.backgroundColor = 'rgb(255, 255, 0)';
		item.style.color = 'rgb(0, 0, 0)';
		switchesData[id - 1]++;
	}
}

function changeInterval(i) {
	for (id = i; id <= 100; id += i) {
		divisors[id - 1].push(i);
		console.log(`i: ${i}, id: ${id}`);
		toggleColor(id);
	}
}

let n = 0;

function flipTheSwitch() {
	n++;
	changeInterval(n);
}

switchButton.onclick = () => {
	flipTheSwitch();
	solution.disabled = true;
	details.disabled = true;
}

// %%%%%%%%%%%%%%% RESET  %%%%%%%%%%%%%%%%%%

function toggleToBlack(id) {
	let item = document.getElementById(`${id}`);
	if (window.getComputedStyle(item).backgroundColor === 'rgb(255, 255, 0)') {
		item.style.backgroundColor = 'rgb(0, 0, 0)';
		item.style.color = 'rgb(128, 128, 128)';
	}
}

function removeChildElements() {
	var delChild = detailsData.lastChild;
	while (delChild) {
		detailsData.removeChild(delChild);
		delChild = detailsData.lastChild;
	}
}

function reset(i) {
	for (id = i; id <= 100; id += i) {
		toggleToBlack(id);
		divisors[i - 1] = new Array(0);
	}
	removeChildElements();
	console.clear();
	id = 0;
	while (data.length > 0) {
		data.pop();
	}
}

function switchOffAll() {
	for (let i = 1; i <= 100; i++) {
		reset(i);
		switchesData[i - 1] = 0;
	}
	solution.disabled = false;
	switchButton.disabled = false;
	details.disabled = true;
	n = 0;
}
// %%%%%%%% SOLUTION %%%%%%%%%%%%%%%%%%%%%

function showSolution() {
	for (let i = 1; i <= 100; i++) {
		changeInterval(i);
		solution.disabled = true;
		switchButton.disabled = true;
		details.disabled = false;
	}
	for (let i = 0; i < 100; i++) {
		data.push(new item(i + 1, switchesData[i], divisors[i]))
	}
}

// %%%%%%%%% DETAILS %%%%%%%%%%%%%%%%%%%%%%%%

function addNewRoom(id, data) {
	const newRoom = document.createElement("P");
	newRoom.classList.add("room");
	if (data[id].room === 1) {
		newRoom.innerHTML = `<span id="red">${data[id].room}</span> - ${data[id].switches} switch; divisors: ${data[id].numbers}`;
	} else if (data[id].room > 0) {
		newRoom.innerHTML = `<span id="red">${data[id].room}</span> - ${data[id].switches} switches; divisors: ${data[id].numbers}`;
	}
	detailsData.append(newRoom);
}

function scrollWin() {
	window.scrollBy(0, 780);
}

function showDivisors() {
	console.clear();
	data.sort((a, b) => (a.switches < b.switches) ? 1 : -1)
	console.log(data);
	for (let i = 0; i < 100; i++) {
		addNewRoom(i, data);
	}
	scrollWin();
}

solution.addEventListener('click', showSolution);
cancel.addEventListener('click', switchOffAll);
details.addEventListener('click', showDivisors);
