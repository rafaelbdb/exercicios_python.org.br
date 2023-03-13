// Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.

const container = document.querySelector("#container");
const raio = container.appendChild(document.createElement('input'))
const botao = container.appendChild(document.createElement('button'))
const area = container.appendChild(document.createElement('p'))
botao.innerText = 'Calcular'

botao.addEventListener('click', e => {
    area.innerText = 3.14 * parseFloat(raio.value) * parseFloat(raio.value)
})