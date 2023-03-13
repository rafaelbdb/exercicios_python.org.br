// O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
//                       Até 5 Kg           Acima de 5 Kg
// File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
// Alcatra         R$ 5,90 por Kg          R$ 6,80 por Kg
// Picanha         R$ 6,90 por Kg          R$ 7,80 por Kg

// Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente.

// Se compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre o total da compra.
// Escreva um programa que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra:
// tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.

const CARNE = document.querySelector('body').appendChild(document.createElement('select'))
const FILE = CARNE.appendChild(document.createElement('option'))
const ALCATRA = CARNE.appendChild(document.createElement('option'))
const PICANHA = CARNE.appendChild(document.createElement('option'))

const PAGAMENTO = document.querySelector('body').appendChild(document.createElement('select'))
const CARTAO = PAGAMENTO.appendChild(document.createElement('option'))
const DINHEIRO = PAGAMENTO.appendChild(document.createElement('option'))

const PESO = document.querySelector('body').appendChild(document.createElement('input'))

const BOTAO = document.querySelector('body').appendChild(document.createElement('button'))
const MSG = document.querySelector('body').appendChild(document.createElement('p'))

FILE.innerText = 'Filé Duplo'
FILE.value = 'F'

ALCATRA.innerText = 'Alcatra'
ALCATRA.value = 'A'

PICANHA.innerText = 'Picanha'
PICANHA.value = 'P'

CARTAO.innerText = 'Cartão Tabajara'
CARTAO.value = 'C'

DINHEIRO.innerText = 'Dinheiro'
DINHEIRO.value = 'D'

BOTAO.innerText = 'Comprar'
BOTAO.addEventListener('click', e => {
    let carne = CARNE.value
    let tipoCarne = ''
    let pgto = PAGAMENTO.value
    let tipoPgto = ''
    let peso = parseFloat(PESO.value)
    let preco = 0
    
    switch (carne) {
        case 'F':
            preco = peso * ((peso <= 5) ? 4.90 : 5.80)
            tipoCarne = 'Filé Duplo'
        break;
        case 'A':
            preco = peso * ((peso <= 5) ? 5.90 : 6.80)
            tipoCarne = 'Alcatra'
        break;
        case 'P':
            preco = peso * ((peso <= 5) ? 6.90 : 7.80)
            tipoCarne = 'Picanha'
        break;
    }

    switch(pgto){
        case 'C':
            tipoPgto = 'Cartão Tabajara'
        break;
        case 'D':
            tipoPgto = 'Dinheiro'
        break;
    }

    let desconto = (pgto == 'C') ? 5 : 0
    let total = preco - (preco * (desconto/100))

    MSG.innerText = `${peso}kg de ${tipoCarne} por R$${preco.toFixed(2)}, com ${desconto}% de desconto no ${tipoPgto}, ficam R$${total.toFixed(2)}.`
})
