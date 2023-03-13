// Jogo de Craps.
// Faça um programa de implemente um jogo de Craps.
// O jogador lança um par de dados, obtendo um valor entre 2 e 12.
// Se, na primeira jogada, você tirar 7 ou 11, você um "natural" e ganhou.
// Se você tirar 2, 3 ou 12 na primeira jogada, isto é chamado de "craps" e você perdeu.
// Se, na primeira jogada, você fez um 4, 5, 6, 8, 9 ou 10,este é seu "Ponto".
// Seu objetivo agora é continuar jogando os dados até tirar este número novamente.
// Você perde, no entanto, se tirar um 7 antes de tirar este Ponto novamente.

const BODY = document.querySelector('body')
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

var jogadas = []
var ponto = 0

BOTAO.innerText = 'Jogar'
BOTAO.addEventListener('click', e => {
    let dado = Math.floor(Math.random() * 10) + 2;
    let natural = [7, 11]
    let craps = [2, 3, 12]
    let resultado = ''

    if (jogadas.length == 0) {
        if (natural.includes(dado)) {
            resultado = `${dado} Natural! (venceu)`
            BOTAO.disabled = 'disabled'
        } else if (craps.includes(dado)) {
            resultado = `${dado} Craps! (perdeu)`
            BOTAO.disabled = 'disabled'
        } else if ([4, 5, 6, 8, 9, 10].includes(dado)) {
            ponto = dado
            jogadas.push(dado)
            resultado = `Ponto a acertar: ${dado}`
        }
    } else if (dado == 7) {
        resultado = `${dado} antes do ponto! (perdeu)`
        BOTAO.disabled = 'disabled'
    } else if (dado == ponto) {
        resultado = `${dado} Acertou o ponto com ${jogadas.length} tentativas! (venceu)`
        BOTAO.disabled = 'disabled'
    } else {
        resultado = `${dado} Continue tentando...`
        jogadas.push(dado)
    }

    MSG.innerText = `${resultado}`

})
