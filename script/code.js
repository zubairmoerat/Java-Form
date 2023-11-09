let numb1 =document.getElementById('numb1')
let numb2 =document.getElementById('numb2')

function calculateResult(){
    let total = +numb1.value + +numb2.value
    let sum = document.getElementById('output')
    sum.innerHTML = total
}

const btnSubmit = document.getElementById('btn')
btnSubmit.addEventListener('click', calculateResult)

