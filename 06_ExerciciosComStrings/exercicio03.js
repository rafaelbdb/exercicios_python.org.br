// Nome na vertical.
// Faça um programa que solicite o nome do usuário e imprima - o na vertical.

// F
// U
// L
// A
// N
// O


const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let nome = INPUT.value.split('')
    nome.forEach(n => {
        MSG.innerText += `\n${n}`
    })
})
