// Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais.
// Valide a entrada e permita repetir a operação.

const BODY = document.querySelector('body')
const POP_A = BODY.appendChild(document.createElement('input'))
const TAXA_A = BODY.appendChild(document.createElement('input'))
const POP_B = BODY.appendChild(document.createElement('input'))
const TAXA_B = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const ANOS = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let a = parseInt(POP_A.value) || -1
    let txA = parseFloat(TAXA_A.value)/100 || -1
    let b = parseInt(POP_B.value) || -1
    let txB = parseFloat(TAXA_B.value)/100 || -1

    if (a <= 0 || b <= 0 || txA <= 0 || txB <= 0){
        alert('Todos os dados precisam ser maior que zero.')
    } else {
        let anos = 0

        while (a < b) {
            a += a * txA
            b += b * txB
            anos++
        }

        ANOS.innerText = `Foram necessários ${anos} anos para a população do país A ultrapassar a de B.`
    }
})
