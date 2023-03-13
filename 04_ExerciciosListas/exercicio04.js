// Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas.
// Imprima as consoantes.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let caracteres = INPUT.value
    if (caracteres.length > 10) {
        alert('Máximo de 10 caracteres.')
    } else {
        let consoantes = (caracteres.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || []).join('')
        MSG.innerText = `\nConsoantes: ${consoantes} (${consoantes.length})`
    }
})
