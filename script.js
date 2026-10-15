// Functions
function equateNumbers() {
    num1 = memoryHandler.num1;
    num2 = memoryHandler.num2;
    operation = memoryHandler.operation;

    if (operation === null || num2 === null) {
        return;
    }

    switch (operation) {
        case "+":
            memoryHandler.result = num1 + num2;
            break;
        
        case "-":
            memoryHandler.result = num1 + num2;
            break;

        case "x":
            memoryHandler.result = num1 * num2;
            break;

        case "÷":
            memoryHandler.result = num1 / num2;
            break;
    }

    screen.textContent = memoryHandler.result;
}



// Variables/Main 
const numberButtons = document.querySelectorAll('.number');
const screen = document.querySelector('#screen');
const allClear = document.querySelector('#allClear')
const operatorButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('#equals')

let memoryHandler = {
    'num1': 0,
    'num2': null,
    'operation': null,
    'result': null,

    resetMemory() {
        console.log(memoryHandler);
        this.num1 = 0;
        this.num2 = null;
        this.operation = null;
        this.result = null;
        console.log(memoryHandler);
    }
}

console.log(Number(3 + '+' + 4))
// Add event listeners to buttons

numberButtons.forEach(element => {
    element.addEventListener('click', (event) => {
        if (screen.textContent === "0") {
            screen.textContent = "";
        }

        if (screen.textContent.length !== 9){
            screen.textContent += event.target.textContent;

            if (memoryHandler.operation === '') {
                memoryHandler.num1 = screen.textContent;
            } else {
                memoryHandler.num2 = screen.textContent;
            }
        }
    })
})

allClear.addEventListener('click', (event) => {
    screen.textContent = "0";
    memoryHandler.resetMemory();
})

operatorButtons.forEach(element => {
    element.addEventListener('click', event => {
        memoryHandler.operation = event.target.textContent;
    })
})

equalsButton.addEventListener('click', event => {
    equateNumbers()
})
