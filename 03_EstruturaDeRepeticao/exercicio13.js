// Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número.
// Não utilize a função de potência da linguagem.

const BODY = document.querySelector('body')
const BASE = BODY.appendChild(document.createElement('input'))
const EXP = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'Calcular'
BOTAO.addEventListener('click', e => {
    let base = parseInt(BASE.value)
    let exp = parseInt(EXP.value)
    let conta = ''

    for (let i = 1; i <= exp; i++){
        conta += `${base}*`
    }

    // WARNING: eval() is evil!
    MSG.innerText = `${eval(conta.slice(0, -1))}`
})
