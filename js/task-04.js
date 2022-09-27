let valueEl = Number(document.querySelector('#value').textContent);
let counterValue = document.querySelector('#value');

const plusButton = document.querySelector("#counter [data-action = 'increment']")
const subButton = document.querySelector("#counter [data-action = 'decrement']")

function  increment (){
	valueEl += 1;
    counterValue.innerText = valueEl;
}
function decrement () {
	valueEl += -1;
    counterValue.innerText = valueEl;
}

plusButton.addEventListener('click', increment)

subButton.addEventListener('click', decrement)
