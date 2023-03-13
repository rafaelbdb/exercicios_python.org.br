// Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10.
// O usuário deve informar de qual numero ele deseja ver a tabuada.
// A saída deve ser conforme o exemplo abaixo:
// Tabuada de 5:
// 5 X 1 = 5
// 5 X 2 = 10
// ...
// 5 X 10 = 50

const BODY = document.querySelector('body')
const NUM = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'Gerar'
BOTAO.addEventListener('click', e => {
    let num = parseInt(NUM.value)
    if (num < 1 || num > 10) {
        alert('O número precisa estar entre 1 e 10.')
    } else {
        for (let i = 1; i <= 10; i++){
            let mult = num * i
            MSG.innerText += `${num} X ${i} = ${mult}\n`
        }
    }
})
