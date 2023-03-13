// Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.

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
        MSG.innerText = `${numeros}`
    }
})
