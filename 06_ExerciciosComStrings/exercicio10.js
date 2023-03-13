// Número por extenso.
// Escreva um programa que solicite ao usuário a digitação de um número até 99 e imprima-o na tela por extenso.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

INPUT.setAttribute('placeholder', 'Número até 99.')

const UNIDADES = [
    '',
    'um',
    'dois',
    'três',
    'quatro',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove'
]

const DEZENAS = [
    '',
    'dez',
    'vinte',
    'trinta',
    'quarenta',
    'cinquenta',
    'sessenta',
    'setenta',
    'oitenta',
    'noventa'
]

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let num = INPUT.value.padStart(2, '0')

    if (parseInt(num) < 1 || parseInt(num) > 99) {
        alert('Informe um número entre 1 e 99.')
    } else {
        let extenso = ''
        let espaco = (num[0] > 1) ? ' ' : ''
        let e = (num[0] > 0 && num[1] > 0) ? 'e' : ''

        switch (num) {
            case '11':
                extenso = 'onze'
                break;

            case '12':
                extenso = 'doze'
                break;

            case '13':
                extenso = 'treze'
                break;

            case '14':
                extenso = 'catorze'
                break;

            case '15':
                extenso = 'quinze'
                break;

            default:
                extenso = (num != 18) ? `${DEZENAS[num[0]]}${espaco}${e}${espaco}${UNIDADES[num[1]]}` : 'dezoito'
                break;
        }

        MSG.innerText = `${extenso}`
    }
})