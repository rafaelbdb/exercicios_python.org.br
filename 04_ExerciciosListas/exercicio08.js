// Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor.
// Imprima a idade e a altura na ordem inversa a ordem lida.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

let pessoas = []

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    if (pessoas.length <= 5) {
        pessoas.push({})
    }
})
