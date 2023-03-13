// Altere o programa de cálculo dos números primos, informando, caso o número não seja primo, por quais número ele é divisível.

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

    if (primo == false) {
        MSG.innerText += `\nDivisível por:`
        for (let j = num; j > 1; j--) {
            if (num % j == 0) {
                MSG.innerText += ` ${j}`
            }
        }
    }

})
