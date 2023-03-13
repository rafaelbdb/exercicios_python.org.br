// Em uma eleição presidencial existem quatro candidatos.
// Os votos são informados por meio de código.

// Os códigos utilizados são:
// 1 , 2, 3, 4  - Votos para os respectivos candidatos 
// (você deve montar a tabela ex: 1 - Jose/ 2- João/etc)
// 5 - Voto Nulo
// 6 - Voto em Branco

// Faça um programa que calcule e mostre:
// O total de votos para cada candidato;
// O total de votos nulos;
// O total de votos em branco;
// A percentagem de votos nulos sobre o total de votos;
// A percentagem de votos em branco sobre o total de votos.
// Para finalizar o conjunto de votos tem - se o valor zero.

let votacao = {
    1: ['Puto', 0],
    2: ['Safado', 0],
    3: ['Vagabo', 0],
    4: ['Corno', 0],
    5: ['Nulo', 0],
    6: ['Branco', 0]
}

const BODY = document.querySelector('body')
const VOTO = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let voto = parseInt(VOTO.value)
    if (voto > 0 && voto < 7) {
        votacao[voto][1]++
    } else {
        let total = 0
        for (const [key, value] of Object.entries(votacao)) {
            total += value[1]
        };

        let pNulos = (votacao[5][1] / total) * 100
        let pBrancos = (votacao[6][1] / total) * 100

        for (const [key, value] of Object.entries(votacao)) {
            MSG.innerText += `\n${value[0]}: ${value[1]}`
        }
        MSG.innerText += `\nPorcentagem Nulos: ${pNulos}%`
        MSG.innerText += `\nPorcentagem Brancos: ${pBrancos}%`
    }
})
