// Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
// o produto do dobro do primeiro com metade do segundo .
// a soma do triplo do primeiro com o terceiro.
// o terceiro elevado ao cubo

const container = document.querySelector("#container");
const num1 = container.appendChild(document.createElement('input'))
const num2 = container.appendChild(document.createElement('input'))
const num3 = container.appendChild(document.createElement('input'))
const botao = container.appendChild(document.createElement('button'))
const resultado1 = container.appendChild(document.createElement('p'))
const resultado2 = container.appendChild(document.createElement('p'))
const resultado3 = container.appendChild(document.createElement('p'))
botao.innerText = 'Calcular'
botao.addEventListener('click', e => {
    resultado1.innerText = (parseInt(num1.value) * 2) * (parseInt(num2.value) / 2)
    resultado2.innerText = (parseInt(num1.value) * 3) + parseFloat(num3.value)
    resultado3.innerText = Math.pow(parseFloat(num3.value), 3)
})