// Nome na vertical em escada invertida.
// Altere o programa anterior de modo que a escada seja invertida.

// FULANO
// FULAN
// FULA
// FUL
// FU
// F

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let nome = INPUT.value.split('')

    for (let i = nome.length; i >= 0; i--) {
        let result = nome.slice(0, i).join('')
        MSG.innerText += `\n${result}`
    }
})
