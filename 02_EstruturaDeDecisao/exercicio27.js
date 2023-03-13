// Uma fruteira está vendendo frutas com a seguinte tabela de preços:
//                       Até 5 Kg           Acima de 5 Kg
// Morango         R$ 2,50 por Kg          R$ 2,20 por Kg
// Maçã            R$ 1,80 por Kg          R$ 1,50 por Kg
// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total.
// Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.

const MORANGOS = document.querySelector('body').appendChild(document.createElement('input'))
const MACAS = document.querySelector('body').appendChild(document.createElement('input'))
const BOTAO = document.querySelector('body').appendChild(document.createElement('button'))
const MSG = document.querySelector('body').appendChild(document.createElement('p'))

BOTAO.innerText = 'Comprar'
BOTAO.addEventListener('click', e => {
    let morangos = parseFloat(MORANGOS.value)
    let macas = parseFloat(MACAS.value)
    let pagar = 0

    pagar += morangos * ((morangos <= 5) ? 2.50 : 2.20)
    pagar += macas * ((macas <= 5) ? 1.80 : 1.50)

    if((morangos + macas > 8) || pagar > 25.00){
        pagar -= pagar * (10/100)
    }

    MSG.innerText = `A pagar: R$ ${pagar}`
})
