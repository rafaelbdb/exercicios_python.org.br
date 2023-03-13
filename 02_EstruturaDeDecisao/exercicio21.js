// Faça um Programa para um caixa eletrônico.
// O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas.
// As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais.
// O valor mínimo é de 10 reais e o máximo de 600 reais.
// O programa não deve se preocupar com a quantidade de notas existentes na máquina.
// Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
// Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.

const SAQUE = document.querySelector('body').appendChild(document.createElement('input'))
const BOTAO = document.querySelector('body').appendChild(document.createElement('button'))
const MSG = document.querySelector('body').appendChild(document.createElement('p'))

BOTAO.innerText = 'Sacar'
BOTAO.addEventListener('click', e => {
    let saque = parseInt(SAQUE.value)
    if(saque < 10) {
        MSG.innerText = 'O valor mínimo para saque é R$10.'
    } else if (saque > 600) {
        MSG.innerText = 'O valor máximo para saque é R$600.'
    } else {
        let algs = SAQUE.value.split('')

        let notasUnidade = [0, 0] //1, 5
        let notasDezena = [0, 0] //10, 50
        let notasCentena = 0 //100

        let unidadesTotal = parseInt(algs[algs.length-1])
        let dezenasTotal = parseInt(algs[algs.length-2])

        let unidadesRestantes = unidadesTotal % 5
        let dezenasRestantes = dezenasTotal % 5
        
        if(unidadesRestantes == 0){
            notasUnidade[1] = unidadesTotal / 5
        } else {
            notasUnidade[0] = unidadesRestantes
            notasUnidade[1] = (unidadesTotal - unidadesRestantes) / 5
        }
        
        if(dezenasRestantes == 0){
            notasDezena[1] = dezenasTotal / 5
        } else {
            notasDezena[0] = dezenasRestantes
            notasDezena[1] = (dezenasTotal - dezenasRestantes) / 5
        }

        if(algs.length == 3){
            notasCentena = parseInt(algs[algs.length-3])
        }

        MSG.innerText = `${notasCentena} notas de R$100, ${notasDezena[1]} notas de R$ 50, ${notasDezena[0]} notas de R$10, ${notasUnidade[1]} notas de R$5 e ${notasUnidade[0]} notas de R$1`
    }
})
