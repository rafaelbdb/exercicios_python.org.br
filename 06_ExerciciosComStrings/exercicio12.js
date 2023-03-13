// Valida e corrige número de telefone. 
// Faça um programa que leia um número de telefone, e corrija o número no caso deste conter somente 7 dígitos, acrescentando o '3' na frente.
// O usuário pode informar o número com ou sem o traço separador.

// Valida e corrige número de telefone
// Telefone: 461-0133
// Telefone possui 7 dígitos. Vou acrescentar o digito três na frente.
// Telefone corrigido sem formatação: 34610133
// Telefone corrigido com formatação: 3461-0133

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

INPUT.setAttribute('placeholder', '')

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let fone = INPUT.value
    let semHifen = fone.split('').filter((d) => d.match(/\d/g)).join('')
    let comHifen = `${semHifen.slice(0, -4)}-${semHifen.slice(-4, semHifen.length)}`

    MSG.innerText = `Telefone: ${fone}`
    if (semHifen.length == 7) {
        MSG.innerText += '\nTelefone possui 7 dígitos. Vou acrescentar o digito três na frente.'
        MSG.innerText += `\nTelefone corrigido sem formatação: 3${semHifen}`
        MSG.innerText += `\nTelefone corrigido com formatação: 3${comHifen}`
    } else {
        MSG.innerText += `\nTelefone sem formatação: ${semHifen}`
        MSG.innerText += `\nTelefone com formatação: ${comHifen}`
    }
})