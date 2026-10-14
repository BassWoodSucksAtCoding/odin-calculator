// Functions


// Variables/Main 
const numberButtons = document.querySelectorAll('.number');
const screen = document.querySelector('#screen');
const allClear = document.querySelector('#allClear')

let memoryHandler = {
    'num1': 0,
    'num2': 0,
    'operation': '',
    resetMemory() {
        console.log(memoryHandler);
        this.num1 = 0;
        this.num2 = 0;
        this.operation = '';
        console.log(memoryHandler);
    }
}



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