// Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
// C = 5 * ((F-32) / 9)

const container = document.querySelector("#container");
const tempF = container.appendChild(document.createElement('input'))
const botao = container.appendChild(document.createElement('button'))
const tempC = container.appendChild(document.createElement('p'))
botao.innerText = 'Converter'
botao.addEventListener('click', e => {
    tempC.innerText = 5 * ((parseFloat(tempF.value) - 32) / 9)
})