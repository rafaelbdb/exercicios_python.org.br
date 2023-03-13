// Um funcionário de uma empresa recebe aumento salarial anualmente.
// Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
// Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
// A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual do ano anterior.
// Faça um programa que determine o salário atual desse funcionário.
// Após concluir isto, altere o programa permitindo que o usuário digite o salário inicial do funcionário.

const BODY = document.querySelector('body')
const INICIAL = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let inicial = parseFloat(INICIAL.value)
    let aumento = 1.5
    let salario = inicial ? inicial : 1000
    let ano = new Date().getFullYear()
    
    for (let a = 1996; a <= ano; a++) {
        salario += salario * (aumento / 100)
        aumento *= 2
    }

    MSG.innerText = `Salário atual: ${salario}`
})

//OBS: puta aumento do caralho!!
