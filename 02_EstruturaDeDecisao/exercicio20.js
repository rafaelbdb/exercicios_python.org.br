// Faça um Programa para leitura de três notas parciais de um aluno.
// O programa deve calcular a média alcançada por aluno e apresentar:
// A mensagem "Aprovado", se a média for maior ou igual a 7, com a respectiva média alcançada;
// A mensagem "Reprovado", se a média for menor do que 7, com a respectiva média alcançada;
// A mensagem "Aprovado com Distinção", se a média for igual a 10.

const NOTA1 = document.querySelector('body').appendChild(document.createElement('input'))
const NOTA2 = document.querySelector('body').appendChild(document.createElement('input'))
const NOTA3 = document.querySelector('body').appendChild(document.createElement('input'))
const BOTAO = document.querySelector('body').appendChild(document.createElement('button'))
const MSG_MEDIA = document.querySelector('body').appendChild(document.createElement('p'))
const MSG_RESULTADO = document.querySelector('body').appendChild(document.createElement('p'))

BOTAO.innerText = 'Verificar'
BOTAO.addEventListener('click', e => {
    let n1 = parseFloat(NOTA1.value)
    let n2 = parseFloat(NOTA2.value)
    let n3 = parseFloat(NOTA3.value)
    let media = (n1 + n2 + n3) / 3

    MSG_MEDIA.innerText = `Média: ${media}`
    if(media >= 10) {
        MSG_RESULTADO.innerText = 'Aprovado com Distinção'
    } else if (media >= 7) {
        MSG_RESULTADO.innerText = 'Aprovado'
    } else {
        MSG_RESULTADO.innerText = 'Reprovado'
    }
})
