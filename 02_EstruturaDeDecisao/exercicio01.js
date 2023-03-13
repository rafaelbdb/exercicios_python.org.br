// Faça um Programa que peça dois números e imprima o maior deles.

const num1 = document.body.appendChild(document.createElement('input'))
const num2 = document.body.appendChild(document.createElement('input'))
const botao = document.body.appendChild(document.createElement('button'))
const msgMaior = document.body.appendChild(document.createElement('p'))

botao.innerText = 'Maior'
botao.addEventListener('click', e => {
    let maior = Math.max(parseInt(num1.value), parseInt(num2.value))
    msgMaior.innerText = `O maior número é ${maior}.`
})