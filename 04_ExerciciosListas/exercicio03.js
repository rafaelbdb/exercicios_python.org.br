// Faça um Programa que leia 4 notas, mostre as notas e a média na tela.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let notas = INPUT.value.split(' ').map(Number)
    let media = notas.reduce((a,b) => a+b)/notas.length
    if (notas.length > 4) {
        alert('Máximo de 4 notas separadas por espaço.')
    } else {
        MSG.innerText += `\nNotas: ${notas}`
        MSG.innerText += `\nMédia: ${media}`
    }
})
