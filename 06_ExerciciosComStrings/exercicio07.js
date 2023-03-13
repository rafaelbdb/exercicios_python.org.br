// Conta espaços e vogais.
// Dado uma string com uma frase informada pelo usuário (incluindo espaços em branco), conte:

// quantos espaços em branco existem na frase.
// quantas vezes aparecem as vogais a, e, i, o, u.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let frase = INPUT.value.split('')
    let espacos = frase.filter(e => e === ' ')
    let vogais = frase.filter(v => ['a', 'e', 'i', 'o', 'u'].includes(v))

    MSG.innerText += `\nEspaços: ${espacos.length}`
    MSG.innerText += `\nVogais: ${vogais.length}`
})
