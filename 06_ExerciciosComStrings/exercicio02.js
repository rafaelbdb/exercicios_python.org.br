// Nome ao contrário em maiúsculas. 
// Faça um programa que permita ao usuário digitar o seu nome e em seguida mostre o nome do usuário de trás para frente utilizando somente letras maiúsculas. 
// Dica: lembre−se que ao informar o nome o usuário pode digitar letras maiúsculas ou minúsculas.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let nomeInverso = INPUT.value.toUpperCase().split('').reverse().join('')
    MSG.innerText = `${nomeInverso}`
})
