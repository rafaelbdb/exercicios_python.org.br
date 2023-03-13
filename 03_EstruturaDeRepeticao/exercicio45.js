// Desenvolver um programa para verificar a nota do aluno em uma prova com 10 questões, o programa deve perguntar ao aluno a resposta de cada questão e ao final comparar com o gabarito da prova e assim calcular o total de acertos e a nota (atribuir 1 ponto por resposta certa). 

// Após cada aluno utilizar o sistema deve ser feita uma pergunta se outro aluno vai utilizar o sistema.

// Após todos os alunos terem respondido informar:
// Maior e Menor Acerto;
// Total de Alunos que utilizaram o sistema;
// A Média das Notas da Turma.

// Gabarito da Prova:
// 01 - A
// 02 - B
// 03 - C
// 04 - D
// 05 - E
// 06 - E
// 07 - D
// 08 - C
// 09 - B
// 10 - A

// Após concluir isto você poderia incrementar o programa permitindo que o professor digite o gabarito da prova antes dos alunos usarem o programa.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const FINALIZAR = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

let gabarito = []
let provas = []

FINALIZAR.disabled = 'disabled'
FINALIZAR.innerText = 'Finalizar'

BOTAO.innerText = 'Gabarito'
BOTAO.addEventListener('click', e => {
    if (BOTAO.innerText == 'Gabarito') {
        gabarito = INPUT.value.split(' ')
        BOTAO.innerText = 'Prova'
        FINALIZAR.disabled = ''
    } else {
        provas.push(INPUT.value.split(' '))
    }
})

FINALIZAR.addEventListener('click', e => {
    let notas = [];
    provas.forEach(p => {
        notas.push(gabarito.filter(g => p.includes(g)).length)
    })

    let maior = Math.max(...notas)
    let menor = Math.min(...notas)
    let alunos = notas.length
    let media = notas.reduce((a, b) => a + b) / alunos

    MSG.innerText += `\nMaior nota: ${maior}`
    MSG.innerText += `\nMenor nota: ${menor}`
    MSG.innerText += `\nTotal de alunos: ${alunos}`
    MSG.innerText += `\nMédia das notas: ${media}`
})