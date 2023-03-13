// Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação e os números.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let numeros = INPUT.value.split(' ').map(Number)
    if (numeros.length > 5) {
        alert('Máximo de 5 números separados por espaço.')
    } else {
        let soma = numeros.reduce((a, b) => a + b)
        let multiplicacao = numeros.reduce((a, b) => a * b)

        MSG.innerText += `\nNúmeros: ${numeros}`
        MSG.innerText += `\nSoma: ${soma}`
        MSG.innerText += `\nMultiplicação: ${multiplicacao}`
    }
})
