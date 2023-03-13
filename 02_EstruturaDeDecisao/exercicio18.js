// Faça um Programa que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.

const DATA = document.querySelector('body').appendChild(document.createElement('input'))
const BOTAO = document.querySelector('body').appendChild(document.createElement('button'))
const MSG = document.querySelector('body').appendChild(document.createElement('p'))

BOTAO.innerText = 'Verificar'
BOTAO.addEventListener('click', e => {
    let partes = DATA.value.split('/')
    let dia = partes[0]
    let mes = partes[1]
    let ano = partes[2]
    let dataISO = new Date(`${ano}-${mes}-${dia}`).toISOString()
    
    if(Number.isInteger(Date.parse(dataISO))){
        MSG.innerText = 'Data válida.'
    } else {
        MSG.innerText = 'Data inválida.'
    }
})
