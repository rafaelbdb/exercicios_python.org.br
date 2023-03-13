// Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média.
// A atribuição de conceitos obedece à tabela abaixo:
//   Média de Aproveitamento  Conceito
//   Entre 9.0 e 10.0        A
//   Entre 7.5 e 9.0         B
//   Entre 6.0 e 7.5         C
//   Entre 4.0 e 6.0         D
//   Entre 4.0 e zero        E
// O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

const NOTA1 = document.querySelector('body').appendChild(document.createElement('input'))
const NOTA2 = document.querySelector('body').appendChild(document.createElement('input'))
const BOTAO = document.querySelector('body').appendChild(document.createElement('button'))
const MSG_NOTAS = document.querySelector('body').appendChild(document.createElement('p'))
const MSG_MEDIA = document.querySelector('body').appendChild(document.createElement('p'))
const MSG_CONCEITO = document.querySelector('body').appendChild(document.createElement('p'))
const MSG_RESULTADO = document.querySelector('body').appendChild(document.createElement('p'))

BOTAO.innerText = 'Calcular'
BOTAO.addEventListener('click', e => {
    let media = (parseFloat(NOTA1.value) + parseFloat(NOTA2.value)) / 2

    let conceito = 'E'
    if (media >= 9.0) {
        conceito = 'A'
    } else if (media >= 7.5 && media < 9.0) {
        conceito = 'B'
    } else if (media >= 6.0 && media < 7.5) {
        conceito = 'C'
    } else if (media >= 4.0 && media < 6.0) {
        conceito = 'D'
    }
    
    let resultado = 'APROVADO'
    if(conceito == 'D' || conceito == 'E'){
        resultado = 'REPROVADO'
    }

    MSG_NOTAS.innerText = `Suas notas foram: ${parseFloat(NOTA1.value)} e ${parseFloat(NOTA2.value)}`
    MSG_MEDIA.innerText = `Sua média ficou em: ${media}`
    MSG_CONCEITO.innerText = `Seu conceito foi: ${conceito}`
    MSG_RESULTADO.innerText = `Seu resultado foi: ${resultado}`
})
