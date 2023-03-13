// Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.

const BODY = document.querySelector('body')
const NUM1 = BODY.appendChild(document.createElement('input'))
const NUM2 = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let n1 = parseInt(NUM1.value)
    let n2 = parseInt(NUM2.value)

    for (let i = n1 + 1; i < n2; i++){
        MSG.innerText += `${i}, `
    }
})
