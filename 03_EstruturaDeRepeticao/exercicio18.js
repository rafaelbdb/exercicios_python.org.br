// Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.

const BODY = document.querySelector('body')
const NUMEROS = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let numeros = NUMEROS.value.split(' ').map(Number)
    let menor = Math.min(...numeros)
    let maior = Math.max(...numeros)
    let soma = numeros.reduce((a,b) => a+b)

    MSG.innerText += `Menor: ${menor}`
    MSG.innerText += `\nMaior: ${maior}`
    MSG.innerText += `\nSoma: ${soma}`
})
