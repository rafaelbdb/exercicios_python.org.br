// Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58

const container = document.querySelector("#container");
const altura = container.appendChild(document.createElement('input'))
const botao = container.appendChild(document.createElement('button'))
const pesoIdeal = container.appendChild(document.createElement('p'))
botao.innerText = 'Calcular'
botao.addEventListener('click', e => {
    pesoIdeal.innerText = (72.7 * parseFloat(altura.value)) - 58
})