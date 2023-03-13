// Embaralha palavra. 
// Construa uma função que receba uma string como parâmetro e devolva outra string com os carateres embaralhados. 
// Por exemplo: se função receber a palavra python, pode retornar npthyo, ophtyn ou qualquer outra combinação possível, de forma aleatória. 
// Padronize em sua função que todos os caracteres serão devolvidos em caixa alta ou caixa baixa, independentemente de como foram digitados.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let palavra = INPUT.value

    function embaralha(p) {
        return p.split('').sort(() => (Math.random() - 0.5)).join('')
    }

    MSG.innerText = `${embaralha(palavra)}`
})
