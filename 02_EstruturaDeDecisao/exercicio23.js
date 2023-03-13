// Faça um Programa que peça um número e informe se o número é inteiro ou decimal.
// Dica: utilize uma função de arredondamento.

const NUMERO = document.querySelector('body').appendChild(document.createElement('input'))
const BOTAO = document.querySelector('body').appendChild(document.createElement('button'))
const MSG = document.querySelector('body').appendChild(document.createElement('p'))

BOTAO.innerText = 'Verificar'
BOTAO.addEventListener('click', e => {
    MSG.innerText = (parseFloat(NUMERO.value) % 1 == 0) ? 'inteiro' : 'decimal'
})
