// Faça um Programa que peça as 4 notas bimestrais e mostre a média.

const container = document.querySelector("#container");
const nota1 = container.appendChild(document.createElement('input'))
const nota2 = container.appendChild(document.createElement('input'))
const nota3 = container.appendChild(document.createElement('input'))
const nota4 = container.appendChild(document.createElement('input'))
const botao = container.appendChild(document.createElement('button'))
const media = container.appendChild(document.createElement('p'))

botao.innerText = 'Calcular'
botao.addEventListener('click', e => {
    media.innerText = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value) + parseFloat(nota4.value)) / 4
})