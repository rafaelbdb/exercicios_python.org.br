// Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

const valor = document.body.appendChild(document.createElement('input'))
const botao = document.body.appendChild(document.createElement('button'))
const msg = document.body.appendChild(document.createElement('p'))

botao.innerText = 'Verificar'
botao.addEventListener('click', e => {
    if (parseFloat(valor.value) >= 0) {
        msg.innerText = `O valor é positivo.`
    } else {
        msg.innerText = `O valor é negativo.`
    }
})