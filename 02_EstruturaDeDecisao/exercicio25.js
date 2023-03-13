// Faça um programa que faça as seguintes 5 perguntas para uma pessoa sobre um crime:
// "Telefonou para a vítima?"
// "Esteve no local do crime?"
// "Mora perto da vítima?"
// "Devia para a vítima?"
// "Já trabalhou com a vítima?"
// O programa deve no final emitir uma classificação sobre a participação da pessoa no crime.
// Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino".
// Caso contrário, ele será classificado como "Inocente".

const FONE = document.querySelector('body').appendChild(document.createElement('input'))
const LFONE = document.querySelector('body').appendChild(document.createElement('label'))
document.querySelector('body').appendChild(document.createElement('br'))

const LOCAL = document.querySelector('body').appendChild(document.createElement('input'))
const LLOCAL = document.querySelector('body').appendChild(document.createElement('label'))
document.querySelector('body').appendChild(document.createElement('br'))

const MORA = document.querySelector('body').appendChild(document.createElement('input'))
const LMORA = document.querySelector('body').appendChild(document.createElement('label'))
document.querySelector('body').appendChild(document.createElement('br'))

const DEVE = document.querySelector('body').appendChild(document.createElement('input'))
const LDEVE = document.querySelector('body').appendChild(document.createElement('label'))
document.querySelector('body').appendChild(document.createElement('br'))

const TRAB = document.querySelector('body').appendChild(document.createElement('input'))
const LTRAB = document.querySelector('body').appendChild(document.createElement('label'))
document.querySelector('body').appendChild(document.createElement('br'))

FONE.setAttribute('type', 'checkbox')
LOCAL.setAttribute('type', 'checkbox')
MORA.setAttribute('type', 'checkbox')
DEVE.setAttribute('type', 'checkbox')
TRAB.setAttribute('type', 'checkbox')

LFONE.innerText = 'Telefonou para a vítima?'
LLOCAL.innerText = 'Esteve no local do crime?'
LMORA.innerText = 'Mora perto da vítima?'
LDEVE.innerText = 'Devia para a vítima?'
LTRAB.innerText = 'Já trabalhou com a vítima?'

const MSG = document.querySelector('body').appendChild(document.createElement('p'))

const BOTAO = document.querySelector('body').appendChild(document.createElement('button'))
BOTAO.innerText = 'Responder'
BOTAO.addEventListener('click', e => {
    let respostas = [
        FONE.checked ? 1 : 0,
        LOCAL.checked ? 1 : 0,
        MORA.checked ? 1 : 0,
        DEVE.checked ? 1 : 0,
        TRAB.checked ? 1 : 0
    ]

    function reducer(accumulator, currentValue, index) {
        return accumulator + currentValue;
    }

    let total = respostas.reduce(reducer)
    
    if(total < 2) {
        MSG.innerText = 'Inocente'
    } else if (total == 2) {
        MSG.innerText = 'Suspeito'
    } else if (total == 3 || total == 4) {
        MSG.innerText = 'Cúmplice'
    } else if (total == 5){
        MSG.innerText = 'Assassino'
    }
})
