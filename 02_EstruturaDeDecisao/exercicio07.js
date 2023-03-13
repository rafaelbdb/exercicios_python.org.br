// Faça um Programa que leia três números e mostre o maior e o menor deles.

const num1 = document.body.appendChild(document.createElement('input'))
const num2 = document.body.appendChild(document.createElement('input'))
const num3 = document.body.appendChild(document.createElement('input'))
const botao = document.body.appendChild(document.createElement('button'))
const msgMaior = document.body.appendChild(document.createElement('p'))
const msgMenor = document.body.appendChild(document.createElement('p'))
botao.innerText = 'Verificar'
botao.addEventListener('click', e => {
    let maior = Math.max(parseFloat(num1.value), parseFloat(num2.value), parseFloat(num3.value))
    let menor = Math.min(parseFloat(num1.value), parseFloat(num2.value), parseFloat(num3.value))
    msgMaior.innerText = `O maior número é ${maior}.`
    msgMenor.innerText = `O menor número é ${menor}.`
})