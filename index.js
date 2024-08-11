// CALUCLATOR PROGRAM

// 1) Get the dispaly element
const display = document.getElementById("display");

// 2) Define the three functions that wee need
function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error...";
    }
}

