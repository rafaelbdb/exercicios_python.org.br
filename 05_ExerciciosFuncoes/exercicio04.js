// Faça um programa, com uma função que necessite de um argumento.
// A função retorna o valor de caractere ‘P’, se seu argumento for positivo, e ‘N’, se seu argumento for zero ou negativo.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    function pn(x) {
        return (x <= 0) ? 'N' : 'P'
    }

    let x = parseInt(INPUT.value)
    MSG.innerText = `${pn(x)}`
})
