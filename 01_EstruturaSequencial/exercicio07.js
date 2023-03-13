// Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.

const container = document.querySelector("#container");
const lado = container.appendChild(document.createElement('input'))
const botao = container.appendChild(document.createElement('button'))
const area2 = container.appendChild(document.createElement('p'))
botao.innerText = 'Calcular'
botao.addEventListener('click', e => {
    area2.innerText = (parseFloat(lado.value) * parseFloat(lado.value)) * 2
})