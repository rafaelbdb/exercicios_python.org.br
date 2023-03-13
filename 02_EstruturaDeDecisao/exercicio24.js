// Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar.
// O resultado da operação deve ser acompanhado de uma frase que diga se o número é:
// par ou ímpar;
// positivo ou negativo;
// inteiro ou decimal.

const NUM1 = document.querySelector('body').appendChild(document.createElement('input'))
const NUM2 = document.querySelector('body').appendChild(document.createElement('input'))
const OPERACAO = document.querySelector('body').appendChild(document.createElement('select'))
const SOMA = OPERACAO.appendChild(document.createElement('option'))
const SUBT = OPERACAO.appendChild(document.createElement('option'))
const MULT = OPERACAO.appendChild(document.createElement('option'))
const DIVI = OPERACAO.appendChild(document.createElement('option'))
const BOTAO = document.querySelector('body').appendChild(document.createElement('button'))
const MSG = document.querySelector('body').appendChild(document.createElement('p'))

SOMA.innerText = 'Soma'
SOMA.value = '+'

SUBT.innerText = 'Subtração'
SUBT.value = '-'

MULT.innerText = 'Multiplicação'
MULT.value = '*'

DIVI.innerText = 'Divisão'
DIVI.value = '/'

BOTAO.innerText = 'Calcular'
BOTAO.addEventListener('click', e => {
    let resultado = eval(parseFloat(NUM1.value) + OPERACAO.value + parseFloat(NUM2.value))

    MSG.innerText = `O resultado ${resultado} é`
    MSG.innerText += (resultado % 2 == 0) ? ' par,' : ' ímpar,'
    MSG.innerText += (resultado >= 0) ? ' positivo e' : ' negativo e'
    MSG.innerText += (resultado % 1 == 0) ? ' inteiro.' : ' decimal.'
})
