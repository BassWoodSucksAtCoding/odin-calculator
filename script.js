const numberButtons = document.querySelectorAll('.number');
const screen = document.querySelector('#screen');
const allClear = document.querySelector('#allClear')

console.log(numberButtons)

numberButtons.forEach(element => {
    element.addEventListener('click', (event) => {
        if (screen.textContent === "0") {
            screen.textContent = "";
        }

        if (screen.textContent.length !== 9){
            screen.textContent += event.target.textContent;
        }
    })
})

allClear.addEventListener('click', (event) => {
    screen.textContent = "0"
})