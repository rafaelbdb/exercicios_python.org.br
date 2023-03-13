// Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let numeros = INPUT.value.split(' ').map(Number)
    if (numeros.length > 10) {
        alert('Máximo de 10 números separados por espaço.')
    } else {
        MSG.innerText = `${numeros.reverse()}`
    }
})
