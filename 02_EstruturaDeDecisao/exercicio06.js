// Faça um Programa que leia três números e mostre o maior deles.

const num1 = document.body.appendChild(document.createElement('input'))
const num2 = document.body.appendChild(document.createElement('input'))
const num3 = document.body.appendChild(document.createElement('input'))
const botao = document.body.appendChild(document.createElement('button'))
const msg = document.body.appendChild(document.createElement('p'))

botao.innerText = 'Verificar'
botao.addEventListener('click', e => {
    let maior = Math.max(parseFloat(num1.value), parseFloat(num2.value), parseFloat(num3.value))
    msg.innerText = `O maior número é ${maior}.`
})