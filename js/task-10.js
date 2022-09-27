function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inpueEL = document.querySelector("controls.input")
const buttonCreate = document.querySelector('controls.[data-action ="create"]')
const buttonRemove = document.querySelector('controls.[data-action ="destroy"]')

buttonCreate.addEventListener("click", btnEl)

function btnEl (element){


}

buttonRemoveaddEventListener("click",btnDestroy )

function btnDestroy(){

  inpueEL.reset();
}