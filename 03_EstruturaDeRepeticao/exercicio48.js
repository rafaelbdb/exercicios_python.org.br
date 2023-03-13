// Faça um programa que peça um numero inteiro positivo e em seguida mostre este numero invertido.
// Exemplo:
//   12376489
//   => 98467321

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let numero = INPUT.value
    let invertido = parseInt(numero.split('').reverse().join(''))
    MSG.innerText = `${numero} => ${invertido}`
})
