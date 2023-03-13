// Faça um Programa que leia três números e mostre-os em ordem decrescente.

const num1 = document.body.appendChild(document.createElement('input'))
const num2 = document.body.appendChild(document.createElement('input'))
const num3 = document.body.appendChild(document.createElement('input'))
const botao = document.body.appendChild(document.createElement('button'))
const msg = document.body.appendChild(document.createElement('p'))

botao.innerText = 'Ordenar'
botao.addEventListener('click', e => {
    let numeros = [parseInt(num1.value), parseInt(num2.value), parseInt(num3.value)]
    numeros.sort((a,b)=>b-a)
    msg.innerText = `${numeros}`
})
