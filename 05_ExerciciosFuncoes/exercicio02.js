// Faça um programa para imprimir:
//     1
//     1   2
//     1   2   3
//     .....
//     1   2   3   ...  n
// para um n informado pelo usuário.
// Use uma função que receba um valor n inteiro imprima até a n - ésima linha.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

function imprime(n) {
    for (let i = 1; i <= n; i++) {
        MSG.innerText += `\n`
        for (let j = 1; j <= i; j++) {
            MSG.innerText += `\t${j}`
        }
    }
}

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    imprime(parseInt(INPUT.value))
})
