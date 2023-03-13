// Sendo H= 1 + 1/2 + 1/3 + 1/4 + ... + 1/N.
// Faça um programa que calcule o valor de H com N termos.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let n = parseInt(INPUT.value)
    let h = 0

    for (let i = 1; i <= n; i++) {
        h += 1/i
    }

    MSG.innerText = `H = ${h}`
})

