// Tamanho de strings. 
// Faça um programa que leia 2 strings e informe o conteúdo delas seguido do seu comprimento. 
// Informe também se as duas strings possuem o mesmo comprimento e são iguais ou diferentes no conteúdo.

// Compara duas strings
// String 1: Brasil Hexa 2006
// String 2: Brasil! Hexa 2006!
// Tamanho de "Brasil Hexa 2006": 16 caracteres
// Tamanho de "Brasil! Hexa 2006!": 18 caracteres
// As duas strings são de tamanhos diferentes.
// As duas strings possuem conteúdo diferente.

const BODY = document.querySelector('body')
const FRASE1 = BODY.appendChild(document.createElement('input'))
const FRASE2 = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let frase1 = FRASE1.value
    let frase2 = FRASE2.value
    let tamanhos = frase1.length == frase2.length ? 'iguais' : 'diferentes'
    let conteudos = frase1 == frase2 ? 'iguais' : 'diferentes'

    MSG.innerText += `\nString 1: ${frase1}`
    MSG.innerText += `\nString 2: ${frase2}`
    MSG.innerText += `\nTamanho de "${frase1}": ${frase1.length} caracteres`
    MSG.innerText += `\nTamanho de "${frase2}": ${frase2.length} caracteres`
    MSG.innerText += `\nAs duas strings são de tamanhos ${tamanhos}.`
    MSG.innerText += `\nAs duas strings possuem conteúdos ${conteudos}.`
})
