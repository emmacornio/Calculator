const buttons = document.querySelectorAll(".number-btn");
const display = document.getElementById("display");
const addBtn = document.getElementById("additionBtn");
const subBtn = document.getElementById("subtractionBtn");
const multBtn = document.getElementById("multiplicationBtn");
const divBtn = document.getElementById("divisionBtn");
const equalsBtn = document.getElementById("equalsBtn");
const clearBtn = document.getElementById("clearBtn");
const decimalBtn = document.getElementById("decimalBtn");
const backspaceBtn = document.getElementById("backspaceBtn");
let currentOperation = { valueOne: 0, valueTwo: 0, operator: "." };
let result = 0;
Array.from(buttons).forEach((button) => {
	button.addEventListener("click", () => typeNumber(button.textContent));
});
decimalBtn.addEventListener("click", () =>
	pressDecimal(decimalBtn.textContent)
);
clearBtn.addEventListener("click", () => clear());
addBtn.addEventListener("click", () => pressAdd());
subBtn.addEventListener("click", () => pressSub());
multBtn.addEventListener("click", () => pressMult());
divBtn.addEventListener("click", () => pressDiv());
equalsBtn.addEventListener("click", () => equals());
backspaceBtn.addEventListener("click", () => backspace());

function add(valueOne, valueTwo) {
	return parseFloat(valueOne) + parseFloat(valueTwo);
}

function subtract(valueOne, valueTwo) {
	return parseFloat(valueOne) - parseFloat(valueTwo);
}
function multiply(valueOne, valueTwo) {
	return parseFloat(valueOne) * parseFloat(valueTwo);
}
function divide(valueOne, valueTwo) {
	if (valueTwo == 0) {
		return "ERROR";
	}
	return parseFloat(valueOne) / parseFloat(valueTwo);
}
function operate(operation) {
	let answer;
	switch (operation.operator) {
		case "+":
			console.log(
				`${operation.valueOne}${operation.operator}${operation.valueTwo}`
			);
			answer = add(operation.valueOne, operation.valueTwo);
			break;
		case "-":
			answer = subtract(operation.valueOne, operation.valueTwo);
			break;
		case "*":
			answer = multiply(operation.valueOne, operation.valueTwo);
			break;
		case "/":
			answer = divide(operation.valueOne, operation.valueTwo);
			break;
		case ".":
			break;
	}
	if (typeof answer != "number") {
		return answer;
	}
	if (answer.toString().includes(".")) {
		answer = parseFloat(answer);
		return answer.toFixed(4);
	} else {
		return parseFloat(answer);
	}
}

window.addEventListener("keydown", (e) => {
	//console.log(e.key);
	number = /[\d]/;
	console.log(`You pressed ${e.key}`);
	switch (true) {
		case number.test(e.key):
			typeNumber(e.key);
			break;
		case e.key == ".":
			pressDecimal(e.key);
			break;
		case e.key == "+":
			pressAdd();
			break;
		case e.key == "-":
			pressSub();
			break;
		case e.key == "*":
			pressMult();
			break;
		case e.key == "/":
			pressDiv();
			break;
		case e.key == "Enter":
			equals();
			break;
		case e.key == "Escape":
			clear();
			break;
		case e.key == "Backspace":
			backspace();
			break;
	}
});
function typeNumber(number) {
	if (display.textContent == result) {
		currentOperation["valueOne"] = result;
		if (!display.textContent.includes(".")) {
			display.textContent = "0";
		}
	}
	if (
		(display.textContent === "0" ||
			display.textContent == currentOperation["valueOne"]) &&
		!display.textContent.includes(".")
	) {
		display.textContent = "";
	}
	if (display.textContent.length > 11) {
		return;
	}
	display.textContent += number;
}
function pressDecimal(value) {
	if (display.textContent.includes(".")) {
		return;
	} else {
		display.textContent += value;
	}
}
function clear() {
	display.textContent = "0";
	currentOperation = { valueOne: 0, valueTwo: 0, operator: "." };
	result = 0;
}
function pressAdd() {
	if (currentOperation["valueOne"] != 0) {
		currentOperation["valueTwo"] = parseFloat(display.textContent);
		result = operate(currentOperation);
		currentOperation["operator"] = "+";
		display.textContent = result;
	} else {
		currentOperation["valueOne"] = parseFloat(display.textContent);
		currentOperation["operator"] = "+";
	}
}
function pressSub() {
	if (currentOperation["valueOne"] != 0) {
		currentOperation["valueTwo"] = parseFloat(display.textContent);
		result = operate(currentOperation);
		currentOperation["operator"] = "-";
		display.textContent = result;
	} else if (result == 0) {
		currentOperation["valueTwo"] = parseFloat(display.textContent);
		result = operate(currentOperation);
		currentOperation["operator"] = "-";
		display.textContent = result;
	} else {
		currentOperation["valueOne"] = parseFloat(display.textContent);
		currentOperation["operator"] = "-";
	}
}
function pressMult() {
	if (currentOperation["valueOne"] != 0) {
		currentOperation["valueTwo"] = parseFloat(display.textContent);
		result = operate(currentOperation);
		currentOperation["operator"] = "*";
		display.textContent = result;
	} else {
		currentOperation["valueOne"] = parseFloat(display.textContent);
		currentOperation["operator"] = "*";
	}
}
function pressDiv() {
	if (currentOperation["valueOne"] != 0) {
		currentOperation["valueTwo"] = parseFloat(display.textContent);
		result = operate(currentOperation);
		currentOperation["operator"] = "/";
		display.textContent = result;
	} else {
		currentOperation["valueOne"] = parseFloat(display.textContent);
		currentOperation["operator"] = "/";
	}
}

function equals() {
	if (currentOperation["operator"] == ".") {
		return;
	}
	if (currentOperation["valueTwo"] != 0) {
	}
	currentOperation["valueTwo"] = parseFloat(display.textContent);
	result = operate(currentOperation);
	display.textContent = result;
	currentOperation["operator"] = ".";
	currentOperation["valueOne"] = result;
}
function backspace() {
	let text = display.textContent;
	text = text.substring(-text.length, text.length - 1);
	display.textContent = text;
}
