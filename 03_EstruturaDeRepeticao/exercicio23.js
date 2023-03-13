// Faça um programa que mostre todos os primos entre 1 e N sendo N um número inteiro fornecido pelo usuário.
// O programa deverá mostrar também o número de divisões que ele executou para encontrar os números primos.
// Serão avaliados o funcionamento, o estilo e o número de testes (divisões) executados.

const BODY = document.querySelector('body')
const N = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let n = parseInt(N.value)
    let primos = []
    let divisoes = 0
    
    for (let i = 1; i <= n; i++) {
        primos.push(i)
    }

    primos.forEach(p => {
        for (let j = 2; j < p; j++) {
            if (p % j == 0) {
                primos.splice(primos.indexOf(p),1)
            }
            divisoes++
        }
    })

    MSG.innerText = 'São primos:'
    primos.forEach(p => {
        MSG.innerText += `\n${p}`
    })
    MSG.innerText += `\nDivisões: ${divisoes}`
})
