// Altere o programa anterior para que ele aceite apenas números entre 0 e 1000.

const BODY = document.querySelector('body')
const NUMEROS = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let numeros = NUMEROS.value.split(' ').map(Number)

    if (numeros.some(n => (n < 0 || n > 1000))) {
        alert('Somente números entre 0 e 1000.')
    } else {        
        let menor = Math.min(...numeros)
        let maior = Math.max(...numeros)
        let soma = numeros.reduce((a,b) => a+b)

        MSG.innerText += `Menor: ${menor}`
        MSG.innerText += `\nMaior: ${maior}`
        MSG.innerText += `\nSoma: ${soma}`
    }
})
