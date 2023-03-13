// Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita).
// O Salário Líquido corresponde ao Salário Bruto menos os descontos.
// O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

// Desconto do IR:
// Salário Bruto até 900 (inclusive) - isento
// Salário Bruto até 1500 (inclusive) - desconto de 5%
// Salário Bruto até 2500 (inclusive) - desconto de 10%
// Salário Bruto acima de 2500 - desconto de 20%

// Imprima na tela as informações, dispostas conforme o exemplo abaixo.
// No exemplo o valor da hora é 5 e a quantidade de hora é 220.
//         Salário Bruto: (5 * 220)        : R$ 1100,00
//         (-) IR (5%)                     : R$   55,00
//         (-) INSS (10%)                  : R$  110,00
//         FGTS (11%)                      : R$  121,00
//         Total de descontos              : R$  165,00
//         Salário Liquido                 : R$  935,00

const VALOR_HORA = document.body.appendChild(document.createElement('input'))
const QUANTIDADE_HORAS = document.body.appendChild(document.createElement('input'))

const BOTAO = document.body.appendChild(document.createElement('button'))
BOTAO.innerText = 'Calcular'

const SALARIO_BRUTO = document.body.appendChild(document.createElement('p'))
const DESCONTO_SINDICATO = document.body.appendChild(document.createElement('p'))
const DESCONTO_IR = document.body.appendChild(document.createElement('p'))
const DESCONTO_INSS = document.body.appendChild(document.createElement('p'))
const VALOR_FGTS = document.body.appendChild(document.createElement('p'))
const TOTAL_DESCONTOS = document.body.appendChild(document.createElement('p'))
const SALARIO_LIQUIDO = document.body.appendChild(document.createElement('p'))

BOTAO.addEventListener('click', e => {
    let salarioBruto = parseFloat(VALOR_HORA.value) * parseFloat(QUANTIDADE_HORAS.value)
    let valorFGTS = salarioBruto * (11/100)
    let descontoSindicato = salarioBruto * (3/100)
    let descontoINSS = salarioBruto * (10/100)
    
    let taxaIR = 0
    if(salarioBruto > 900.00 && salarioBruto <= 1500.00){
        taxaIR = 5
    } else if(salarioBruto > 1500.00 && salarioBruto <= 2500.00){
        taxaIR = 10
    } else if(salarioBruto > 2500.00){
        taxaIR = 20
    }

    let descontoIR = salarioBruto * (taxaIR/100)
    let totalDescontos = descontoSindicato + descontoINSS + descontoIR
    let salarioLiquido = salarioBruto - totalDescontos

    SALARIO_BRUTO.innerText = `Salário Bruto (${parseFloat(VALOR_HORA.value)} * ${parseFloat(QUANTIDADE_HORAS.value)}): R$ ${salarioBruto}`
    DESCONTO_SINDICATO.innerText = `(-) Sindicato: R$ ${descontoSindicato}`
    DESCONTO_IR.innerText = `(-) IR: R$ ${descontoIR}`
    DESCONTO_INSS.innerText = `(-) INSS: R$ ${descontoINSS}`
    VALOR_FGTS.innerText = `FGTS: R$ ${valorFGTS}`
    TOTAL_DESCONTOS.innerText = `Total de descontos: R$ ${totalDescontos}`
    SALARIO_LIQUIDO.innerText = `Salário Líquido: R$ ${salarioLiquido}`
})
