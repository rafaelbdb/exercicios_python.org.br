// O cardápio de uma lanchonete é o seguinte:

// Especificação   Código  Preço
// Cachorro Quente 100     R$ 1,20
// Bauru Simples   101     R$ 1,30
// Bauru com ovo   102     R$ 1,50
// Hambúrguer      103     R$ 1,20
// Cheeseburguer   104     R$ 1,30
// Refrigerante    105     R$ 1,00

// Faça um programa que leia o código dos itens pedidos e as quantidades desejadas.
// Calcule e mostre o valor a ser pago por item (preço * quantidade) e o total geral do pedido.
// Considere que o cliente deve informar quando o pedido deve ser encerrado.

const BODY = document.querySelector('body')
const CODIGO = BODY.appendChild(document.createElement('input'))
const QTD = BODY.appendChild(document.createElement('input'))
const ADICIONAR = BODY.appendChild(document.createElement('button'))
const ENCERRAR = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

const CARDAPIO = {
    100: ['Cachorro Quente', 1.20],
    101: ['Bauru Simples', 1.30],
    102: ['Bauru com ovo', 1.50],
    103: ['Hambúrguer', 1.20],
    104: ['Cheeseburguer', 1.30],
    105: ['Refrigerante', 1.00]
}

let pedido = []

ADICIONAR.innerText = 'Adicionar'
ADICIONAR.addEventListener('click', e => {
    let cod = parseInt(CODIGO.value)
    let dsc = CARDAPIO[cod][0]
    let val = CARDAPIO[cod][1]
    let qtd = parseInt(QTD.value)

    pedido.push([dsc, val * qtd])
    CODIGO.value = ''
    QTD.value = ''
})

ENCERRAR.innerText = 'Encerrar'
ENCERRAR.addEventListener('click', e => {
    let total = 0
    pedido.forEach(p => {
        MSG.innerText += `\n${p[0]}: R$ ${p[1].toFixed(2)}`
        total += p[1]
    })
    MSG.innerText += `\nTotal: R$ ${total.toFixed(2)}`
})

