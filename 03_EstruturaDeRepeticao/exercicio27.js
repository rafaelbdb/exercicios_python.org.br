// Faça um programa que calcule o número médio de alunos por turma.
// Para isto, peça a quantidade de turmas e a quantidade de alunos para cada turma.
// As turmas não podem ter mais de 40 alunos.

const BODY = document.querySelector('body')
const TURMAS = BODY.appendChild(document.createElement('input'))
const ALUNOS = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let turmas = parseInt(TURMAS.value)
    let alunos = ALUNOS.value.split(' ').map(Number)
    let excedente = false

    if (alunos.length > turmas) {
        alert(`Alunos informados depois da ${turmas}a turma serão ignorados.`)
    }

    console.log(alunos)
    alunos = alunos.slice(0, turmas)
    console.log(alunos)

    alunos.forEach(a => {
        if (a > 40) {
            excedente = true
            alert('Máximo de 40 alunos por turma.')
        }
    })

    if (!excedente) {
        let media = alunos.reduce((a,b) => a+b) / turmas

        MSG.innerText = `Média de alunos por turma: ${media}`
    }
})
