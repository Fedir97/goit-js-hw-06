const inputEl = document.querySelector("#name-input")
let spanEl = document.querySelector("#name-output")

inputEl.addEventListener('input', onInputChange)

function onInputChange(event){
console.log(event.currentTarget.value);

   spanEl.textContent = event.currentTarget.value;


}
