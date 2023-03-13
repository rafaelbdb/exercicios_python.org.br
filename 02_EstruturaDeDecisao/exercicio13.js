// Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.

const NUMERO = document.querySelector('body').appendChild(document.createElement('input'))
const BOTAO = document.querySelector('body').appendChild(document.createElement('button'))
const MSG = document.querySelector('body').appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    switch(parseInt(NUMERO.value)){
        case 1:
            MSG.innerText = 'Domingo'
        break;
        case 2:
            MSG.innerText = 'Segunda'
        break;
        case 3:
            MSG.innerText = 'Terça'
        break;
        case 4:
            MSG.innerText = 'Quarta'
        break;
        case 5:
            MSG.innerText = 'Quinta'
        break;
        case 6:
            MSG.innerText = 'Sexta'
        break;
        case 7:
            MSG.innerText = 'Sábado'
        break;
        
        default:
            MSG.innerText = 'Valor inválido'
        break;
    }
})
