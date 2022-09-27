const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const newLi = document.createElement("li"); 
newLi.classList.add('item')
newLi.textContent = "Potatoes";
console.log(newLi)

const secondLi = document.createElement("li"); 
secondLi.classList.add('item')
secondLi.textContent = "Mushrooms";
console.log(secondLi)

const thirdLi = document.createElement("li"); 
thirdLi.classList.add('item')
thirdLi.textContent = "Garlic";
console.log(thirdLi)

const fourthLi = document.createElement("li"); 
fourthLi.classList.add('item')
fourthLi.textContent = "Tomatos";
console.log(fourthLi)

const fivthLi = document.createElement("li"); 
fivthLi.classList.add('item')
fivthLi.textContent = "Herbs";
console.log(fivthLi)

const sixLi = document.createElement("li"); 
sixLi.classList.add('item')
sixLi.textContent = "Condiments";
console.log(sixLi)

const listEl = document.querySelector("#ingredients")


listEl.append(newLi,secondLi,thirdLi,fourthLi,fivthLi,sixLi);
console.log(listEl)
