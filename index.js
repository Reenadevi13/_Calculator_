// Function to append a character to the display
function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
}

// Function to calculate the result
function calculateResult() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Use eval() to calculate the expression
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to delete the last character
function deleteLast() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Remove the last character from the display
}

// Function to toggle dark/light theme (you'll need the appropriate CSS for this to work)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
