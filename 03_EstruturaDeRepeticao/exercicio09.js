// Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

const BODY = document.querySelector('body')
const MSG = BODY.appendChild(document.createElement('p'))
MSG.innerText = ''

for (let i = 1; i <= 50; i+=2){
    MSG.innerText += `${i}, `
}
