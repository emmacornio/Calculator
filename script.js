const buttons = document.querySelectorAll(".number-btn");
const display = document.getElementById("display");
const addBtn = document.getElementById("additionBtn");
const subBtn = document.getElementById("subtractionBtn");
const multBtn = document.getElementById("multiplicationBtn");
const divBtn = document.getElementById("divisionBtn");
const equalsBtn = document.getElementById("equalsBtn");
const clearBtn = document.getElementById("clearBtn");
const decimalBtn = document.getElementById("decimalBtn");
let currentOperation = { valueOne: 0, valueTwo: 0, operator: "+" };
let result;
Array.from(buttons).forEach((button) => {
	button.addEventListener("click", () => {
		if (display.textContent == result) {
			currentOperation["valueOne"] = result;
			display.textContent = "0";
		}
		if (display.textContent == "0") {
			display.textContent = "";
		}
		if (display.textContent.length > 16) {
			return;
		}
		display.textContent += button.textContent;
	});
});
clearBtn.addEventListener("click", () => {
	display.textContent = "0";
	currentOperation = { valueOne: 0, valueTwo: 0, operator: "." };
	console.clear();
	console.table(currentOperation);
});

addBtn.addEventListener("click", () => {
	if (currentOperation["valueOne"] != 0) {
		currentOperation["valueTwo"] = parseFloat(display.textContent);
		result = operate(currentOperation);
		currentOperation["operator"] = "+";
		display.textContent = result;
	} else {
		currentOperation["valueOne"] = parseFloat(display.textContent);
		currentOperation["operator"] = "+";
		display.textContent = "0";
	}
	console.table(currentOperation);
	console.table(currentOperation);
});
subBtn.addEventListener("click", () => {
	if (currentOperation["valueOne"] != 0) {
		currentOperation["valueTwo"] = parseFloat(display.textContent);
		result = operate(currentOperation);
		currentOperation["operator"] = "-";
		display.textContent = result;
	} else {
		currentOperation["valueOne"] = parseFloat(display.textContent);
		currentOperation["operator"] = "-";
		display.textContent = "0";
	}
	console.table(currentOperation);
});
multBtn.addEventListener("click", () => {
	if (currentOperation["valueOne"] != 0) {
		currentOperation["valueTwo"] = parseFloat(display.textContent);
		result = operate(currentOperation);
		currentOperation["operator"] = "*";
		display.textContent = result;
	} else {
		currentOperation["valueOne"] = parseFloat(display.textContent);
		currentOperation["operator"] = "*";
		display.textContent = "0";
	}
	console.table(currentOperation);
});
divBtn.addEventListener("click", () => {
	if (currentOperation["valueOne"] != 0) {
		currentOperation["valueTwo"] = parseFloat(display.textContent);
		result = operate(currentOperation);
		currentOperation["operator"] = "/";
		display.textContent = result;
	} else {
		currentOperation["valueOne"] = parseFloat(display.textContent);
		currentOperation["operator"] = "/";
		display.textContent = "0";
	}
	console.table(currentOperation);
});

equalsBtn.addEventListener("click", () => {
	if (currentOperation["operator"] == ".") {
		return;
	}
	currentOperation["valueTwo"] = parseFloat(display.textContent);
	result = operate(currentOperation);
	display.textContent = result;
	currentOperation["operator"] = ".";
	console.table(currentOperation);
});

function add(valueOne, valueTwo) {
	return valueOne + valueTwo;
}

function subtract(valueOne, valueTwo) {
	return valueOne - valueTwo;
}
function multiply(valueOne, valueTwo) {
	return valueOne * valueTwo;
}
function divide(valueOne, valueTwo) {
	if (valueTwo == 0) {
		return "ERROR";
	}
	return valueOne / valueTwo;
}
function operate(operation) {
	switch (operation.operator) {
		case "+":
			return add(operation.valueOne, operation.valueTwo);
		case "-":
			return subtract(operation.valueOne, operation.valueTwo);
		case "*":
			return multiply(operation.valueOne, operation.valueTwo);
		case "/":
			return divide(operation.valueOne, operation.valueTwo);
		case ".":
			break;
	}
}
