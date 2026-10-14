

const numberButtons = document.querySelectorAll('.number');
const screen = document.querySelector('#screen');

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