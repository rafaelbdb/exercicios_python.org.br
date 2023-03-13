// Faça um Programa que pergunte em que turno você estuda.
// Peça para digitar M-matutino ou V-Vespertino ou N- Noturno.
// Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

const pergunta = document.body.appendChild(document.createElement('p'))
const turno = document.body.appendChild(document.createElement('input'))
const botao = document.body.appendChild(document.createElement('button'))
const msg = document.body.appendChild(document.createElement('p'))

pergunta.innerText = 'Em que turno você estuda? Digite M para matutino, V para Vespertino ou N para Noturno.'
botao.innerText = 'Confirmar'
botao.addEventListener('click', e => {
    let t = turno.value.toLowerCase()
    switch(t) {
        case 'm':
            msg.innerText = 'Bom Dia!'
        break;
        case 'v':
            msg.innerText = 'Boa Tarde!'
        break;
        case 'n':
            msg.innerText = 'Boa Noite!'
        break;
        
        default:
            msg.innerText = 'Valor Inválido!'
        break;
    }
})
