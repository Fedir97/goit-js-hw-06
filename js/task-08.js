const formEl = document.querySelector("form.login-form")
const inputEl = document.querySelector("input")

formEl.addEventListener("submit", onForSubmit)

function onForSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
  

    formData.forEach((value, name) => {
      if(value === ""){
alert("error")
      }
    else{
        console.log(value,name)
        formEl.reset();
    }
    });
    
 
} 