// Faça um programa que peça para n pessoas a sua idade, ao final o programa devera verificar se a média de idade da turma varia entre 0 e 25,26 e 60 e maior que 60; e então, dizer se a turma é jovem, adulta ou idosa, conforme a média calculada.

const BODY = document.querySelector('body')
const NOTAS = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let notas = NOTAS.value.split(' ').map(Number)
    let media = notas.reduce((a,b) => a+b) / notas.length

    if (media < 26) {
        MSG.innerText = 'Jovem'
    } else if (media >= 26 && media <= 60) {
        MSG.innerText = 'Adulta'
    } else {
        MSG.innerText = 'Idosa'
    }
})
