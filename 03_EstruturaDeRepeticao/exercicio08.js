// Faça um programa que leia 5 números e informe a soma e a média dos números.

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
        parseFloat(NUM1.value),
        parseFloat(NUM2.value),
        parseFloat(NUM3.value),
        parseFloat(NUM4.value),
        parseFloat(NUM5.value)
    ]

    let soma = numeros.reduce((a,b) => a+b)
    let media = numeros.reduce((a,b) => a+b) / numeros.length

    MSG.innerText = `Soma: ${soma}\n`
    MSG.innerText += `Média: ${media}`
})
