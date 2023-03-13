// Faça uma função que informe a quantidade de dígitos de um determinado número inteiro informado.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    function qtdDigitos(num) {
        return num.length
    }

    MSG.innerText = `Quantidade de dígitos: ${qtdDigitos(INPUT.value)}`
})
