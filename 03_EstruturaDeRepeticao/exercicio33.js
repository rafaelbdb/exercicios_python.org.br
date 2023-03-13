// O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperaturas informadas, bem como a média das temperaturas.

const BODY = document.querySelector('body')
const TEMPS = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let temps = TEMPS.value.split(' ').map(Number)
    let maior = Math.max(...temps)
    let menor = Math.min(...temps)
    let media = temps.reduce((a,b) => a+b) / temps.length

    MSG.innerText = `Maior: ${maior}`
    MSG.innerText += `\nMenor: ${menor}`
    MSG.innerText += `\nMédia: ${media}`
})

