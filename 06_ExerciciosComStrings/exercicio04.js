// Nome na vertical em escada.
// Modifique o programa anterior de forma a mostrar o nome em formato de escada.

// F
// FU
// FUL
// FULA
// FULAN
// FULANO

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let nome = INPUT.value.split('')

    for (let i = 0; i < nome.length; i++) {
        MSG.innerText += `\n`
        for (let j = 0; j <= i; j++) {
            MSG.innerText += `${nome[j]}`
        }
    }
})
