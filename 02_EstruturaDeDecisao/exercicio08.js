// Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.

const precoProduto1 = document.body.appendChild(document.createElement('input'))
const precoProduto2 = document.body.appendChild(document.createElement('input'))
const precoProduto3 = document.body.appendChild(document.createElement('input'))
const botao = document.body.appendChild(document.createElement('button'))
const msg = document.body.appendChild(document.createElement('p'))
botao.innerText = 'Verificar'
botao.addEventListener('click', e => {
    let menor = Math.min(parseFloat(precoProduto1.value), parseFloat(precoProduto2.value), parseFloat(precoProduto3.value))
    if (parseFloat(precoProduto1.value) == menor) {
        msg.innerText = 'Você deve comprar o Primeiro produto.'
    }
    if (parseFloat(precoProduto2.value) == menor) {
        msg.innerText = 'Você deve comprar o Segundo produto.'
    }
    if (parseFloat(precoProduto3.value) == menor) {
        msg.innerText = 'Você deve comprar o Terceiro produto.'
    }
})