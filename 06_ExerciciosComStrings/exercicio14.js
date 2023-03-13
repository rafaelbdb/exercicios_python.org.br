// Leet spek generator.
// Leet é uma forma de se escrever o alfabeto latino usando outros símbolos em lugar das letras, como números por exemplo.
// A própria palavra leet admite muitas variações, como l33t ou 1337.
// O uso do leet reflete uma subcultura relacionada ao mundo dos jogos de computador e internet, sendo muito usada para confundir os iniciantes e afirmar - se como parte de um grupo.
// Pesquise sobre as principais formas de traduzir as letras.
// Depois, faça um programa que peça uma texto e transforme - o para a grafia leet speak.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))
const LEET = {
    ' ': ' ',
    'a': '4',
    'b': '8',
    'c': '(',
    'd': '[)',
    'e': '3',
    'f': '|=',
    'g': '6',
    'h': '#',
    'i': '1',
    'j': '_|',
    'k': '|<',
    'l': '1',
    'm': '|\/|',
    'n': '/\/',
    'o': '0',
    'p': '|*',
    'q': '(_,)',
    'r': '2',
    's': '5',
    't': '7',
    'u': '(_)',
    'v': '\/',
    'w': '\/\/',
    'x': '><',
    'y': '7',
    'z': '7_'
}

INPUT.setAttribute('placeholder', 'Frase aqui.')

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let frase = INPUT.value.toLowerCase()

    let leet = ''
    frase.split('').forEach(l => {
        leet += LEET[l]
    })

    MSG.innerText = `${leet}`
})