const button = document.querySelector(`.button`);
const email = document.querySelector('input');
const response = document.querySelector(".error-text");
const input = document.querySelector('[name="email"]');
const inputBox = document.querySelector(".input-box");


function click (event) {

    let emailid = email.value;
    event.preventDefault();

     if(emailid.length===0) {
     response.textContent = "Email address cannot be blank!";
     inputBox.classList.add("error");
     inputBox.classList.remove("success");
     response.classList.remove("success");

     }else if(!emailid.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      response.textContent = "Please provide a valid email address";
      inputBox.classList.add("error");
      inputBox.classList.remove("success");
      response.classList.remove("success");
      

    }else {
      response.textContent = "You have sucessfully subscribed, Thank you!";
      inputBox.classList.remove("error");
      inputBox.classList.add("success");
      response.classList.add("success");
      input.value = '';
      
    }
    
  }

button.addEventListener(`click`, click);


