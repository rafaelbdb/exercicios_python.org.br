// As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contraram para desenvolver o programa que calculará os reajustes.
// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// salários até R$ 280,00 (incluindo) : aumento de 20%
// salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// salários de R$ 1500,00 em diante : aumento de 5%
// Após o aumento ser realizado, informe na tela:
// o salário antes do reajuste;
// o percentual de aumento aplicado;
// o valor do aumento;
// o novo salário, após o aumento.

const SALARIO = document.body.appendChild(document.createElement('input'))
const BOTAO = document.body.appendChild(document.createElement('button'))
const SALARIO_ANTES = document.body.appendChild(document.createElement('p'))
const PERCENTUAL_APLICADO = document.body.appendChild(document.createElement('p'))
const VALOR_AUMENTO = document.body.appendChild(document.createElement('p'))
const SALARIO_NOVO = document.body.appendChild(document.createElement('p'))

BOTAO.innerText = 'Reajustar'
BOTAO.addEventListener('click', e => {
    let salarioOriginal = parseFloat(SALARIO.value)
    let percentual = 0

    if(salarioOriginal <= 280.00) {
        percentual = 20
    } else if(salarioOriginal > 280.00 && salarioOriginal <= 700.00) {
        percentual = 15
    } else if(salarioOriginal > 700.00 && salarioOriginal <= 1500.00) {
        percentual = 10
    } else if(salarioOriginal > 1500.00) {
        percentual = 5
    }

    let valorAumento = salarioOriginal * (percentual / 100)
    let salarioNovo = salarioOriginal + valorAumento
    SALARIO_ANTES.innerText = `Salário antes do reajuste: R$ ${salarioOriginal}`
    PERCENTUAL_APLICADO.innerText = `Percentual de aumento aplicado: ${percentual}%`
    VALOR_AUMENTO.innerText = `Valor do aumento: R$ ${valorAumento}`
    SALARIO_NOVO.innerText = `Novo salário, após o aumento: R$ ${salarioNovo}`
})
