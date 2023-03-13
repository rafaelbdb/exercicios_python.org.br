// Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Reprovado", se a média for menor do que sete;
// A mensagem "Aprovado com Distinção", se a média for igual a dez.

const nota1 = document.body.appendChild(document.createElement('input'))
const nota2 = document.body.appendChild(document.createElement('input'))
const botao = document.body.appendChild(document.createElement('button'))
const msg = document.body.appendChild(document.createElement('p'))
botao.innerText = 'Verificar'
botao.addEventListener('click', e => {
    let media = (parseFloat(nota1.value) + parseFloat(nota2.value)) / 2
    if (media >= 10) {
        msg.innerText = `Aprovado com Distinção`
    }
    if (media >= 7 && media < 10) {
        msg.innerText = `Aprovado`
    }
    if (media < 7) {
        msg.innerText = `Reprovado`
    }
})