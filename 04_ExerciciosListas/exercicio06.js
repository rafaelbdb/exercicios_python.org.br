// Faça um Programa que peça as quatro notas de 10 alunos, calcule e armazene num vetor a média de cada aluno, imprima o número de alunos com média maior ou igual a 7.0.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

let medias = []

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    if (medias.length <= 10) {
        let notas = INPUT.value.split(' ').map(Number)
        let media = notas.reduce((a,b) => a+b) / notas.length
        medias.push(media)
        INPUT.value = ''
    } else {
        let maiores = medias.filter(m => m > 7.0)
        MSG.innerText = `Alunos com média maior que 7.0: ${maiores.length}`
    }
})
