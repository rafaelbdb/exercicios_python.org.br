// Faça um programa que receba o valor de uma dívida e mostre uma tabela com os seguintes dados:
// valor da dívida, valor dos juros, quantidade de parcelas e valor da parcela.

// Os juros e a quantidade de parcelas seguem a tabela abaixo:
// Quantidade de Parcelas       % de Juros sobre o valor inicial da dívida
// 1                            0
// 3                            10
// 6                            15
// 9                            20
// 12                           25

// Exemplo de saída do programa:
// Valor da Dívida      Valor dos Juros     Quantidade de Parcelas      Valor da Parcela
// R$ 1.000,00          0                   1                           R$  1.000,00
// R$ 1.100,00          100                 3                           R$    366,00
// R$ 1.150,00          150                 6                           R$    191,67

const TAXAS = {
    1: 0,
    3: 10,
    6: 15,
    9: 20,
    12: 25
}

const BODY = document.querySelector('body')
const DIVIDA = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))

const TABELA = BODY.appendChild(document.createElement('table'))
const CAB_LINHA = TABELA.appendChild(document.createElement('tr'))
const CAB_DIVIDA = CAB_LINHA.appendChild(document.createElement('th'))
const CAB_JUROS = CAB_LINHA.appendChild(document.createElement('th'))
const CAB_PARCELAS = CAB_LINHA.appendChild(document.createElement('th'))
const CAB_PARCELA = CAB_LINHA.appendChild(document.createElement('th'))
CAB_DIVIDA.innerText = 'Valor da Dívida'
CAB_JUROS.innerText = 'Valor dos Juros'
CAB_PARCELAS.innerText = 'Quantidade de Parcelas'
CAB_PARCELA.innerText = 'Valor da Parcela'

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let divida = parseFloat(DIVIDA.value)

    for (let i = 1; i <= 12; i += 3) {
        let juros = divida * (TAXAS[i] / 100)
        let total = divida + juros
        let parcela = total / i

        let linha = TABELA.appendChild(document.createElement('tr'))
        linha.appendChild(document.createElement('td')).innerText = `R$ ${total.toFixed(2)}`
        linha.appendChild(document.createElement('td')).innerText = `R$ ${juros.toFixed(2)}`
        linha.appendChild(document.createElement('td')).innerText = `${i}`
        linha.appendChild(document.createElement('td')).innerText = `R$ ${parcela.toFixed(2)}`

        if (i == 1) { i-- } //bugfix pra compensar o índice da primeira taxa!!
    }

})
