let numb1 =document.getElementById('numb1')
let numb2 =document.getElementById('numb2')

function calculateResult(){
    let total = +numb1.value + +numb2.value
    let sum = document.getElementById('output')
    sum.innerHTML = total
}

const btnSubmit = document.getElementById('btn')
btnSubmit.addEventListener('click', calculateResult)

/*const btnAdd =document.queryselector('[data-submit]')

const lblOutput =document.querySelector ('#output')

function addition() {
    let numb1 = document.getElementById('numb1').value
    let numb1 = document.getElementById('numb2').value
    let sum = +numb1 + +numb2
    lblOutput.textContent = sum
}
btnAdd.addEventListener('click', addition)
eval(`${numb1}+ ${numb2}`)*/
