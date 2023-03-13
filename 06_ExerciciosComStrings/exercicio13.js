// Jogo da palavra embaralhada. 
// Desenvolva um jogo em que o usuário tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas.
// O programa terá uma lista de palavras lidas de um arquivo texto e escolherá uma aleatoriamente.
// O jogador terá seis tentativas para adivinhar a palavra.
// Ao final a palavra deve ser mostrada na tela, informando se o usuário ganhou ou perdeu o jogo.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

INPUT.setAttribute('placeholder', '')

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    
})