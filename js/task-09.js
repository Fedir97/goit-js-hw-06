function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor);
const bodyEL = document.querySelector('body')
const buttonEL = document.querySelector(".change-color")
const spanEl = document.querySelector('span.color')

buttonEL.addEventListener("click", btnChangedColor)

function btnChangedColor(){
  bodyEL.style = "background-color: " + `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  spanEl.textContent =  "background-color: " + `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  console.log(spanEl);

}