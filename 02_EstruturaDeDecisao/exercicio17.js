// Faça um Programa que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto.

const ANO = document.querySelector('body').appendChild(document.createElement('input'))
const BOTAO = document.querySelector('body').appendChild(document.createElement('button'))
const MSG = document.querySelector('body').appendChild(document.createElement('p'))

BOTAO.innerText = 'Verificar'
BOTAO.addEventListener('click', e => {
    let ano = parseInt(ANO.value)
    if(ano % 4 == 0) {
        MSG.innerText = 'É bissexto.'
    } else {
        MSG.innerText = 'Não é bissexto.'
    }
})
