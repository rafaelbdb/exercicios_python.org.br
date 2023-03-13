// Faça um programa que calcule e mostre a média aritmética de N notas.

const BODY = document.querySelector('body')
const NOTAS = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let notas = NOTAS.value.split(' ').map(Number)
    let media = notas.reduce((a,b) => a+b) / notas.length

    MSG.innerText = `Média: ${media}`
})
