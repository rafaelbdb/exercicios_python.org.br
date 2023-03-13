// Um posto está vendendo combustíveis com a seguinte tabela de descontos:

// Álcool:
// até 20 litros, desconto de 3% por litro
// acima de 20 litros, desconto de 5% por litro

// Gasolina:
// até 20 litros, desconto de 4% por litro
// acima de 20 litros, desconto de 6% por litro.

// Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.

const LITROS = document.querySelector('body').appendChild(document.createElement('input'))
const TIPO = document.querySelector('body').appendChild(document.createElement('select'))
const ALCOOL = TIPO.appendChild(document.createElement('option'))
const GASOLINA = TIPO.appendChild(document.createElement('option'))
const BOTAO = document.querySelector('body').appendChild(document.createElement('button'))
const MSG = document.querySelector('body').appendChild(document.createElement('p'))

ALCOOL.innerText = 'Álcool'
ALCOOL.value = 'A'

GASOLINA.innerText = 'Gasolina'
GASOLINA.value = 'G'

BOTAO.innerText = 'Comprar'
BOTAO.addEventListener('click', e => {
    let litros = parseFloat(LITROS.value)
    let tipo = TIPO.value
    let preco = 0
    let desconto = 0
    
    switch (tipo) {
        case 'A':
            preco = 1.90
            desconto = (litros <= 20) ? 3 : 5
        break;
        case 'G':
            preco = 2.50
            desconto = (litros <= 20) ? 4 : 6
        break;
    }

    let pagar = (litros - (litros * (desconto / 100))) * preco

    MSG.innerText = `Valor a pagar: R$ ${pagar}.`
})
