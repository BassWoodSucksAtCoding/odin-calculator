
// Functions
function equateNumbers() {
    console.table(memoryHandler)
    num1 = Number(memoryHandler.num1);
    num2 = Number(memoryHandler.num2);
    operation = memoryHandler.operation;
    console.table(memoryHandler)

    if (operation === null || num2 === null) {
        return;
    }

    switch (operation) {
        case "+":
            memoryHandler.result = num1 + num2;
            break;
        
        case "-":
            memoryHandler.result = num1 - num2;
            break;

        case "x":
            memoryHandler.result = num1 * num2;
            break;

        case "÷":
            if (num2 === 0) {
                screen.textContent = "No."
                memoryHandler.error = true
                break
            }
            memoryHandler.result = num1 / num2;
            break;
    }

    console.table(memoryHandler);

    if (memoryHandler.error === false){
        screen.textContent = memoryHandler.result;
        memoryHandler.num1 = memoryHandler.result;

        memoryHandler.operation = null;
        memoryHandler.num2 = null;
    }
}



// Variables/Main 
const numberButtons = document.querySelectorAll('.number');
const screen = document.querySelector('#screen');
const allClear = document.querySelector('#allClear')
const operatorButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('#equals')

let memoryHandler = {
    'num1': null,
    'num2': null,
    'operation': null,
    'result': null,
    'error': false,

    resetMemory() {
        this.num1 = null;
        this.num2 = null;
        this.operation = null;
        this.result = null;
        this.error = false;
    },
}

console.log(Number(3 + '+' + 4))
// Add event listeners to buttons

numberButtons.forEach(element => {
    element.addEventListener('click', (event) => {
        
        if (memoryHandler.num1 === null) {
            screen.textContent = "";
        }

        if (memoryHandler.error) {
            screen.textContent = "";
            memoryHandler.error = false;
        }

        if (memoryHandler.num1 !== null && memoryHandler.operation !== null && memoryHandler.num2 === null) {
            screen.textContent = "";
        }

        if (screen.textContent.length !== 9){
            screen.textContent += event.target.textContent;
            console.log(screen.textContent)

            if (memoryHandler.operation === null || memoryHandler.num1 === null) {
                memoryHandler.num1 = screen.textContent;
            } else {
                memoryHandler.num2 = screen.textContent;
            }
        }
        console.table(memoryHandler)
    })
})

allClear.addEventListener('click', (event) => {
    screen.textContent = "0";
    memoryHandler.resetMemory();
})

operatorButtons.forEach(element => {
    element.addEventListener('click', event => {
        if (memoryHandler.num1 === null && memoryHandler.num2 === null) {
            return;
        }

        if (memoryHandler.error) {
            screen.textContent = "";
            memoryHandler.error = false;
        }

        if (memoryHandler.num2 !== null && memoryHandler.operation !== null) {
            screen.textContent = memoryHandler.result;
            equateNumbers();
        }
        memoryHandler.operation = event.target.textContent;
    })
})

equalsButton.addEventListener('click', event => {
    equateNumbers();
})
