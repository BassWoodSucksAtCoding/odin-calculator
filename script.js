const { memo } = require("react");

// Functions
function resetMemory() {
    memoryHandler.num1 = 0
    memoryHandler.num2 = 0
    memoryHandler.operation = ""
}

// Variables/Main 

const numberButtons = document.querySelectorAll('.number');
const screen = document.querySelector('#screen');
const allClear = document.querySelector('#allClear')

let memoryHandler = {}
resetMemory()
console.log(memoryHandler)

// Add event listeners to buttons

numberButtons.forEach(element => {
    element.addEventListener('click', (event) => {
        if (screen.textContent === "0") {
            screen.textContent = "";
        }

        if (screen.textContent.length !== 9){
            screen.textContent += event.target.textContent;

            if (memoryHandler.operation === '') {
                memoryHandler.num1 = screen.textContent
            } else {
                memoryHandler.num2 = screen.textContent
            }
        }
    })
})

allClear.addEventListener('click', (event) => {
    screen.textContent = "0"
})