// Faça um programa que leia uma quantidade indeterminada de números positivos e conte quantos deles estão nos seguintes intervalos:
// [0 - 25], [26 - 50], [51 - 75] e [76 - 100].
// A entrada de dados deverá terminar quando for lido um número negativo.

const BODY = document.querySelector('body')
const NUMERO = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

let numeros = []
BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let numero = parseInt(NUMERO.value)

    if (numero >= 0) {
        numeros.push(numero)
    } else {
        NUMERO.setAttribute('disabled', 'disabled')
        BOTAO.setAttribute('disabled', 'disabled')

        let int0_25 = 0
        let int26_50 = 0
        let int51_75 = 0
        let int76_100 = 0

        numeros.forEach(n => {
            if (n >= 0 && n <= 25) {
                int0_25++
            } else if (n >= 26 && n <= 50) {
                int26_50++
            } else if (n >= 51 && n <= 75) {
                int51_75++
            } else if (n >= 76 && n <= 100) {
                int76_100++
            }
        })

        MSG.innerText = `Entre 0 e 25: ${int0_25}`
        MSG.innerText += `\nEntre 26 e 50: ${int26_50}`
        MSG.innerText += `\nEntre 51 e 75: ${int51_75}`
        MSG.innerText += `\nEntre 76 e 100: ${int76_100}`
    }

    NUMERO.innerText = ''
})

