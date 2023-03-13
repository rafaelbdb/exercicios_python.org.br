// Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.

const container = document.querySelector("#container");
const tempC = container.appendChild(document.createElement('input'))
const botao = container.appendChild(document.createElement('button'))
const tempF = container.appendChild(document.createElement('p'))
botao.innerText = 'Converter'
botao.addEventListener('click', e => {
    tempF.innerText = parseFloat(tempC.value) * (9/5) + 32
})