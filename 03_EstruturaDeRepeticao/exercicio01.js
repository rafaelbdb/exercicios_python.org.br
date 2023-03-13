// Faça um programa que peça uma nota, entre zero e dez.
// Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

const NOTA = document.querySelector('body').appendChild(document.createElement('input'))
const BOTAO = document.querySelector('body').appendChild(document.createElement('button'))
const MSG = document.querySelector('body').appendChild(document.createElement('p'))

BOTAO.innerText = 'Verificar'
BOTAO.addEventListener('click', e => {
    let nota = parseFloat(NOTA.value)

    if(nota < 0 || nota > 10) {
        alert('Valor inválido. Informe uma nota entre 0 e 10.')
    } else {
        MSG.innerText = 'Valor válido.'
    }    
})
