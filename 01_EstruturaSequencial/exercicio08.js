// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês.
// Calcule e mostre o total do seu salário no referido mês.

const container = document.querySelector("#container");
const valor = container.appendChild(document.createElement('input'))
const horas = container.appendChild(document.createElement('input'))
const botao = container.appendChild(document.createElement('button'))
const total = container.appendChild(document.createElement('p'))
botao.innerText = 'Calcular'
botao.addEventListener('click', e => {
    total.innerText = parseFloat(valor.value) * parseFloat(horas.value)
})