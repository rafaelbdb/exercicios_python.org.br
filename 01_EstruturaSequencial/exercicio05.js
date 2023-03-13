// Faça um Programa que converta metros para centímetros.

const container = document.querySelector("#container");
const metros = container.appendChild(document.createElement('input'))
const botao = container.appendChild(document.createElement('button'))
const centimetros = container.appendChild(document.createElement('p'))

botao.innerText = 'Converter'
botao.addEventListener('click', e => {
    centimetros.innerText = parseFloat(metros.value) * 100
})