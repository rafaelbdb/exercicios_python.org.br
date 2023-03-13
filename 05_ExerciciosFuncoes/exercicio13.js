// Desenha moldura. 
// Construa uma função que desenhe um retângulo usando os caracteres ‘+’ , ‘−’ e ‘| ‘. 
// Esta função deve receber dois parâmetros, linhas e colunas, sendo que o valor por omissão é o valor mínimo igual a 1 e o valor máximo é 20. 
// Se valores fora da faixa forem informados, eles devem ser modificados para valores dentro da faixa de forma elegante.

const BODY = document.querySelector('body')
const LINHAS = BODY.appendChild(document.createElement('input'))
const COLUNAS = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

const MIN = 1
const MAX = 20

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let linhas = parseInt(LINHAS.value) || MIN
    let colunas = parseInt(COLUNAS.value) || MIN

    if (linhas < MIN) {
        linhas = MIN
    }

    if (linhas > MAX) {
        linhas = MAX
    }

    if (colunas < MIN) {
        colunas = MIN
    }

    if (colunas > MAX) {
        colunas = MAX
    }

    // Tive que usar "_" para representar espaços
    // Mesmo com fonte "monospace", não deu certo visualmente
    function desenhaMoldura(l, c) {
        MSG.innerText = `+${'-'.repeat(c)}+`
        for (let i = MIN; i <= l; i++) {
            MSG.innerText += `\n|${'_'.repeat(c)}|`
        }
        MSG.innerText += `\n+${'-'.repeat(c)}+`
    }

    MSG.style.fontFamily = 'monospace'

    desenhaMoldura(linhas, colunas)
})
