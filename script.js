// const email = document.getElementById('email');
// const form = document.getElementById('form');
// const errorMessage = document.querySelector('error-text');
// const buttonSubmit = document.querySelector(".button")


// buttonSubmit.addEventListener('click', () => {
//     if (email.value === '' || email.value == null || !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//         errorMessage.classList.remove('hidden');
//         email.style.border = "1px solid hsl(354, 100%, 66%)";
//     } else {
//         errorMessage.classList.add('hidden');
//         email.style.border = "1px solid #222";
//     }

// })


let form = document.querySelector('form') 

form.addEventListener('submit', e => {
    e.preventDefault()

    let email = form.querySelector('input').value
    let small = form.querySelector('small')

    if (email.trim() === '') {
        form.classList.add('error')
        small.style.color = 'red'
        email.style.border = "1px solid #ff5466"
        small.innerHTML = 'Email cannot be empty'
        
     } else if (!valid(email)) {
        form.classList.add('error')
        small.style.color = 'red'
        email.style.border = "1px solid #ff5466"
        small.innerHTML = 'Please provide a valid email'

     } else {
        small.style.color = 'green'
        small.innerHTML = 'Email confirmed'

        setTimeout(() => {
        form.classList.remove('error')
        }, 1000);
     }
})

function valid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLocaleLowerCase());
}
