// A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,...
// Faça um programa capaz de gerar a série até o n−ésimo termo.

const BODY = document.querySelector('body')
const LIMITE = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let lim = parseInt(LIMITE.value)
    let fib = [0, 1]
    for (let i = 2; i <= lim; i++){
        fib[i] = fib[i-2] + fib[i-1]
        MSG.innerText += `${fib[i]}\n`
    }
})
