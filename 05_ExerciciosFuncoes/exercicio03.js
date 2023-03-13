// Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    function soma(x, y, z) {
        return x + y + z
    }

    let args = INPUT.value.split(' ').map(Number)

    MSG.innerText = `Soma: ${soma(args[0], args[1], args[2])}`
})
