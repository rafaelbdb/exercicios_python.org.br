// Faça um programa que peça 5 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números impares.

const BODY = document.querySelector('body')
const NUM1 = BODY.appendChild(document.createElement('input'))
const NUM2 = BODY.appendChild(document.createElement('input'))
const NUM3 = BODY.appendChild(document.createElement('input'))
const NUM4 = BODY.appendChild(document.createElement('input'))
const NUM5 = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let numeros = [
        parseInt(NUM1.value),
        parseInt(NUM2.value),
        parseInt(NUM3.value),
        parseInt(NUM4.value),
        parseInt(NUM5.value)
    ]
    
    let pares = 0
    let impares = 0

    numeros.forEach(n => {
        if(n % 2 == 0) {
            pares++
        } else {
            impares++
        }
    })

    MSG.innerText += `Pares: ${pares}\n`
    MSG.innerText += `Ímpares: ${impares}`
})
