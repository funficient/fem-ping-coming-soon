const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');


function validateEmail(){
    
})

form.addEventListener('submit', (e) => {
    let messages = []
    if (email.value === '' || email.value == null) {
        messages.push('Please enter a valid email address')
    }
    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    }
})