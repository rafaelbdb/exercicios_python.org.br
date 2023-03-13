// Faça um Programa que peça um número inteiro e determine se ele é par ou impar.
// Dica: utilize o operador módulo (resto da divisão).

const NUMERO = document.querySelector('body').appendChild(document.createElement('input'))
const BOTAO = document.querySelector('body').appendChild(document.createElement('button'))
const MSG = document.querySelector('body').appendChild(document.createElement('p'))

BOTAO.innerText = 'Verificar'
BOTAO.addEventListener('click', e => {
    let num = parseInt(NUMERO.value)
    MSG.innerText = (num % 2 == 0) ? 'Par' : 'Ímpar'
})
