// João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.

const container = document.querySelector("#container");
const peso = container.appendChild(document.createElement('input'))
const botao = container.appendChild(document.createElement('button'))
const msgPesoExcedente = container.appendChild(document.createElement('p'))
const msgMultaAPagar = container.appendChild(document.createElement('p'))

botao.innerText = 'Calcular'

botao.addEventListener('click', e => {
    let excesso = parseFloat(peso.value) - 50
    let multa = parseFloat(excesso * 4.00)

    if (excesso > 0) {
        msgPesoExcedente.innerText = 'Peso Excedente: ' + excesso
        msgMultaAPagar.innerText = 'Multa a pagar: R$ ' + multa
    } else {
        msgPesoExcedente.innerText = 'Peso dentro do limite.'
        msgMultaAPagar.innerText = 'Não precisa pagar multa.'
    }
})