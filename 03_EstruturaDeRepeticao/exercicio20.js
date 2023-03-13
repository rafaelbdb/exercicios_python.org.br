// Altere o programa de cálculo do fatorial, permitindo ao usuário calcular o fatorial várias vezes e limitando o fatorial a números inteiros positivos e menores que 16.

const BODY = document.querySelector('body')
const NUMERO = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let n = parseInt(NUMERO.value)
    if(n < 0 || n > 16) {
        alert('Somente números inteiros positivos menores que 16.')
    } else {
        for (let i = n-1; i > 0; i--){
            n *= i
        }
        MSG.innerText += `${n}\n`
    }
})
