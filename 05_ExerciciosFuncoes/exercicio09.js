// Reverso do número.
// Faça uma função que retorne o reverso de um número inteiro informado.
// Por exemplo: 127 -> 721.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let numero = INPUT.value.split('').map(Number)

    function reverso(n) {
        return n.reverse().join('')
    }

    MSG.innerText = `Reverso: ${reverso(numero)}`
})
