// O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas.
// Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o número de itens que o cliente comprou e ao lado o valor da conta.
// Desta forma a atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços.
// Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 produtos, conforme o exemplo abaixo:
// Lojas Quase Dois - Tabela de preços
// 1 - R$ 1.99
// 2 - R$ 3.98
// ...
// 50 - R$ 99.50

const BODY = document.querySelector('body')
const QTD = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'Calcular'
BOTAO.addEventListener('click', e => {
    let qtd = parseInt(QTD.value)

    for (let i = 1; i <= qtd; i++) {
        MSG.innerText += `\n${i} - R$ ${(i*1.99).toFixed(2)}`
    }
})
