// Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.
// Um número primo é aquele que é divisível somente por ele mesmo e por 1.

const BODY = document.querySelector('body')
const NUM = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let num = parseInt(NUM.value)
    let primo = true
    
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            primo = false;
            break;
        }
    }

    MSG.innerText = primo ? 'Sim' : 'Não'
})
