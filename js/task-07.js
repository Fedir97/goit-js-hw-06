let inputEl = document.querySelector("#font-size-control")

const spanEl= document.querySelector('#text')

inputEl.addEventListener("click", () =>{
    const size = inputEl.value;

    spanEl.style.fontSize = size + "px";
})
