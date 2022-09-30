const formEl = document.querySelector("form.login-form")
const inputEl = document.querySelector("input")

formEl.addEventListener("submit", onForSubmit)

function onForSubmit(event){
    event.preventDefault();
    const {email, password}= event.currentTarget.elements;
  

    if (email.value === '' || password.value === '') {
      return alert('error')
  }
  const userDetails = { email: email.value, Password: password.value }
  
  console.log(userDetails)
  event.currentTarget.reset()
    
 
} 
