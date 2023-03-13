// Faça um Programa que leia 20 números inteiros e armazene-os num vetor.
// Armazene os números pares no vetor PAR e os números IMPARES no vetor impar.
// Imprima os três vetores.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let numeros = INPUT.value.split(' ')
    if (numeros.length > 20) {
        alert('Máximo de 20 numeros.')
    } else {
        let pares = numeros.filter(n => n % 2 == 0)
        let impares = numeros.filter(n => n % 2 != 0)

        MSG.innerText += `\nNúmeros: ${numeros}`
        MSG.innerText += `\nPares: ${pares}`
        MSG.innerText += `\nÍmpares: ${impares}`
    }
})
