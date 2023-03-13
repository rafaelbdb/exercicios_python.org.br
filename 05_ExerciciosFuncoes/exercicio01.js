// Faça um programa para imprimir:
//     1
//     2   2
//     3   3   3
//     .....
//     n   n   n   n   n   n  ... n
// para um n informado pelo usuário.
// Use uma função que receba um valor n inteiro e imprima até a n - ésima linha.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

function imprime(n) {
    for (let i = 1; i <= n; i++) {
        MSG.innerText += `\n`
        for (let j = 1; j <= i; j++) {
            MSG.innerText += `\t${i}`
        }
    }
}

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    imprime(parseInt(INPUT.value))
})
