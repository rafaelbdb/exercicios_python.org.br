// O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e agora possui uma loja de conveniências.
// Faça um programa que implemente uma caixa registradora rudimentar.
// O programa deverá receber um número desconhecido de valores referentes aos preços das mercadorias.
// Um valor zero deve ser informado pelo operador para indicar o final da compra.
// O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente forneceu, para então calcular e mostrar o valor do troco.
// Após esta operação, o programa deverá voltar ao ponto inicial, para registrar a próxima compra.
// A saída deve ser conforme o exemplo abaixo:

// Lojas Tabajara 
// Produto 1: R$ 2.20
// Produto 2: R$ 5.80
// Produto 3: R$ 0
// Total: R$ 9.00
// Dinheiro: R$ 20.00
// Troco: R$ 11.00
// ...

const BODY = document.querySelector('body')
const PRECOS = BODY.appendChild(document.createElement('input'))
const DINHEIRO = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    MSG.innerText = ''
    let precos = PRECOS.value.split(' ').map(Number)
    let dinheiro = parseFloat(DINHEIRO.value)
    let total = 0.00

    for (let i = 0; i < precos.length; i++) {
        MSG.innerText += `\nProduto ${i+1}: R$ ${(precos[i]).toFixed(2)}`
        total += precos[i]
    }

    let troco = dinheiro - total
    MSG.innerText += `\nTotal: R$ ${total.toFixed(2)}`
    MSG.innerText += `\nDinheiro: R$ ${dinheiro.toFixed(2)}`
    MSG.innerText += `\nTroco: R$ ${troco.toFixed(2)}`

    PRECOS.value = ''
    DINHEIRO.value = ''
})
