// Faça um Programa que peça dois números e imprima a soma.

const container = document.querySelector('#container')
const num1 = container.appendChild(document.createElement('input'))
const num2 = container.appendChild(document.createElement('input'))
const botao = container.appendChild(document.createElement('button'))
const soma = container.appendChild(document.createElement('p'))

botao.innerText = 'Somar'
botao.addEventListener('click', e => {
    soma.innerText = parseInt(num1.value) + parseInt(num2.value)
})