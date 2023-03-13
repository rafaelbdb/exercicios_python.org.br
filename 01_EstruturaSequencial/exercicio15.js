// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. 
// Calcule e mostre o total do seu salário no referido mês, sabendo - se que são descontados 11 % para o Imposto de Renda, 8 % para o INSS e 5 % para o sindicato, faça um programa que nos dê:
// salário bruto.
// quanto pagou ao INSS.
// quanto pagou ao sindicato.
// o salário líquido.
// calcule os descontos e o salário líquido, conforme a tabela abaixo:
// + Salário Bruto : R$
// - IR (11%) : R$
// - INSS (8%) : R$
// - Sindicato (5%) : R$
// = Salário Liquido : R$
// Obs.: Salário Bruto - Descontos = Salário Líquido.

const container = document.querySelector("#container");
const valorHora = container.appendChild(document.createElement('input'))
const horasMensais = container.appendChild(document.createElement('input'))
const botao = container.appendChild(document.createElement('button'))
botao.innerText = 'Calcular'

const msgSalarioBruto = container.appendChild(document.createElement('p'))
const msgIR = container.appendChild(document.createElement('p'))
const msgINSS = container.appendChild(document.createElement('p'))
const msgSindicato = container.appendChild(document.createElement('p'))
const msgSalarioLiquido = container.appendChild(document.createElement('p'))

botao.addEventListener('click', e => {
    let salarioBruto = parseFloat(valorHora.value) * parseFloat(horasMensais.value)
    let ir = salarioBruto * (11 / 100)
    let inss = salarioBruto * (8 / 100)
    let sindicato = salarioBruto * (5 / 100)
    let descontos = ir + inss + sindicato
    let salarioLiquido = salarioBruto - descontos

    msgSalarioBruto.innerText = `Seu salário bruto foi de R$ ${salarioBruto}`
    msgIR.innerText = `Pagou de IR R$ ${ir}`
    msgINSS.innerText = `Pagou de INSS R$ ${inss}`
    msgSindicato.innerText = `Pagou ao Sindicato R$ ${sindicato}`
    msgSalarioLiquido.innerText = `Seu salário líquido ficou em R$ ${salarioLiquido}`
})