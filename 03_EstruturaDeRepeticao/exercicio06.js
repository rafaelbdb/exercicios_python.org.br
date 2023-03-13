// Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro.
// Depois modifique o programa para que ele mostre os números um ao lado do outro.

const BODY = document.querySelector('body')
const MSG = BODY.appendChild(document.createElement('p'))

let msg = ''
for (let i = 1; i <= 20; i++){
    // Abaixo
    //msg += `${i}\n`

    // Ao lado
    msg += `${i} `
}

MSG.innerText = `${msg}`
