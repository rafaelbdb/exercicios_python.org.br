// Verificação de CPF. 
// Desenvolva um programa que solicite a digitação de um número de CPF no formato xxx.xxx.xxx-xx e indique se é um número válido ou inválido através da validação dos dígitos verificadores e dos caracteres de formatação.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

INPUT.setAttribute('placeholder', 'CPF no formato xxx.xxx.xxx-xx')
    MSG.innnerText = `oi`

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let valido = INPUT.value.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/gi) ? '' : 'in'

    MSG.innerText = `Formato ${valido}válido`
})

