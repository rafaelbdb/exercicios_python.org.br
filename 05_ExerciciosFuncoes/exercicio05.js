// Faça um programa com uma função chamada somaImposto.
// A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem; e custo, que é o custo de um item antes do imposto.
// A função “altera” o valor de custo para incluir o imposto sobre vendas.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    function somaImposto(taxaImposto, custo) {
        return custo + (custo * (taxaImposto / 100))
    }

    let valores = INPUT.value.split(' ').map(Number)

    MSG.innerText = `R$ ${somaImposto(...valores).toFixed(2)}`
})
