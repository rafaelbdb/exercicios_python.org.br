// Data por extenso.
// Faça um programa que solicite a data de nascimento(dd / mm / aaaa) do usuário e imprima a data com o nome do mês por extenso.

// Data de Nascimento: 29/10/1973
// Você nasceu em  29 de Outubro de 1973.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

const MESES = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let data = INPUT.value

    let numeros = data.split('/')
    let dia = parseInt(numeros[0])
    let mes = parseInt(numeros[1]) - 1
    let ano = parseInt(numeros[2]).toString().padStart(4, '0')

    MSG.innerText = `Você nasceu em ${dia} de ${MESES[mes]} de ${ano}`

})
