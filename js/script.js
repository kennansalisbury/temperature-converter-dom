console.log('Hello, front end');

// input field
// submit button
// clear button

// User can put in a value into the text field
// User click on a button
// Update converted temperature
// Clear button to reset the text field


let input = document.getElementById('input')
console.log(input)

let submitBtn = document.getElementById('submit')
let clearBtn = document.getElementById('clear')
let display = document.querySelector('.display')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    display.innerHTML = input.value
})

clearBtn.addEventListener('click', (e) => {
    e.preventDefault()
    display.innerHTML = ' '
})

display.innerHTML = 'test content'