// Encontrar números primos é uma tarefa difícil.
// Faça um programa que gera uma lista dos números primos existentes entre 1 e um número inteiro informado pelo usuário.

const BODY = document.querySelector('body')
const N = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let n = parseInt(N.value)
    let primos = []
    
    for (let i = 1; i <= n; i++) {
        primos.push(i)
    }

    primos.forEach(p => {
        for (let j = 2; j < p; j++) {
            if (p % j == 0) {
                primos.splice(primos.indexOf(p),1)
            }
        }
    })

    MSG.innerText = 'São primos:'
    primos.forEach(p => {
        MSG.innerText += `\n${p}`
    })
})

