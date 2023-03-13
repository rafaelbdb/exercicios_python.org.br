// Altere o programa anterior para mostrar no final a soma dos números.

const BODY = document.querySelector('body')
const NUM1 = BODY.appendChild(document.createElement('input'))
const NUM2 = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let n1 = parseInt(NUM1.value)
    let n2 = parseInt(NUM2.value)
    let soma = 0

    for (let i = n1 + 1; i < n2; i++){
        MSG.innerText += `${i}, `
        soma += i
    }

    MSG.innerText += `\nSoma: ${soma}`
})

