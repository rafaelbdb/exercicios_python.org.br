// Palíndromo. 
// Um palíndromo é uma seqüência de caracteres cuja leitura é idêntica se feita da direita para esquerda ou vice−versa. 
// Por exemplo: OSSO e OVO são palíndromos. 
// Em textos mais complexos os espaços e pontuação são ignorados. 
// A frase SUBI NO ONIBUS é o exemplo de uma frase palíndroma onde os espaços foram ignorados. 
// Faça um programa que leia uma seqüência de caracteres, mostre−a e diga se é um palíndromo ou não.


const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let frase = INPUT.value.replace(' ', '').toLowerCase()
    let inversa = frase.split('').reverse().join('')
    let palindroma = frase === inversa ? 'É palíndroma.' : 'Não é palíndroma.'

    MSG.innerText = `${palindroma}`
})
