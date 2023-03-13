// Faça um programa que calcule o valor total investido por um colecionador em sua coleção de CDs e o valor médio gasto em cada um deles.
// O usuário deverá informar a quantidade de CDs e o valor para em cada um.

const BODY = document.querySelector('body')
const CDS = BODY.appendChild(document.createElement('input'))
const VALORES = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let cds = parseInt(CDS.value)
    let valores = VALORES.value.split(' ').map(Number)

    if (valores.length != cds) {
        alert('Quantidade de valores e CDs divergente.')
    } else {
        let soma = valores.reduce((a,b) => a+b)
        let media = soma / cds

        MSG.innerText += `Total: ${soma}`
        MSG.innerText += `\nMédia: ${media}`
    }
})
