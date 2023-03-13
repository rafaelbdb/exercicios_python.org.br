// Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário.
// Ex.: 5!=5.4.3.2.1=120.
// A saída deve ser conforme o exemplo abaixo:
// Fatorial de: 5
// 5! =  5 . 4 . 3 . 2 . 1 = 120

const BODY = document.querySelector('body')
const NUMERO = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let n = parseInt(NUMERO.value)
    let fatores = []
    let resultado = n

    MSG.innerText = `Fatorial de: ${n}`
    
    for (let i = n-1; i > 0; i--){
        fatores.push(i)
        resultado *= i
    }

    let calculo = `${n}`
    fatores.forEach(f => {
        calculo += ` . ${f}`
    })

    MSG.innerText += `\n${n}! = ${calculo} = ${resultado}`
})

