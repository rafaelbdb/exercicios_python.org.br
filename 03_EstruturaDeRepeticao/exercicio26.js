// Numa eleição existem três candidatos.
// Faça um programa que peça o número total de eleitores.
// Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.

const BODY = document.querySelector('body')
const ELEITORES = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

let votos = {
    'A': 0,
    'B': 0,
    'C': 0
}

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let eleitores = parseInt(ELEITORES.value)
    let keys = Object.keys(votos)

    for (let i = 1; i <= eleitores; i++) {
        votos[keys[keys.length * Math.random() << 0]]++
    }

    for (const [key, value] of Object.entries(votos)) {
        MSG.innerText += `\n${key}: ${value}`
    }
})
