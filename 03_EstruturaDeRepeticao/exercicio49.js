// Faça um programa que mostre os n termos da Série a seguir:
//   S = 1/1 + 2/3 + 3/5 + 4/7 + 5/9 + ... + n/m. 
// Imprima no final a soma da série.

const BODY = document.querySelector('body')
const INICIO = BODY.appendChild(document.createElement('input'))
const FINAL = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let n = parseInt(INICIO.value)
    let m = parseInt(FINAL.value)
    let s = 0.00

    let ns = []
    let ms = []
    for (let i = 1; i <= n; i++) {
        ns.push(i)
    }
    for (let j = 1; j <= m; j += 2) {
        if (j % 2 != 0) {
            ms.push(j)
        }
    }

    MSG.innerText += `\nTermos: `
    for (let k = 0; k < ms.length; k++) {
        MSG.innerText += `\n${ns[k]}/${ms[k]}`
        s += ns[k] / ms[k]
    }

    MSG.innerText += `\nSoma: ${s.toFixed(2)}`
})
