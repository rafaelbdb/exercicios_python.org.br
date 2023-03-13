// Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

const letra = document.body.appendChild(document.createElement('input'))
const botao = document.body.appendChild(document.createElement('button'))
const msg = document.body.appendChild(document.createElement('p'))
const regexVogais = /[aeiou]/g
const regexConsoantes = /[bcdfghjklmnpqrstvwxyz]/g
const regexNumeros = /[\d]/g

botao.innerText = 'Verificar'
botao.addEventListener('click', e => {
    if (regexVogais.test(letra.value.toLowerCase())) {
        msg.innerText = `É vogal.`
    }
    if (regexConsoantes.test(letra.value.toLowerCase())) {
        msg.innerText = `É consoante.`
    }
    if (regexNumeros.test(letra.value.toLowerCase())) {
        msg.innerText = `É número.`
    }
})