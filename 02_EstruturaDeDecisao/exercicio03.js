// Faça um Programa que verifique se uma letra digitada é "F" ou "M".
// Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

const letra = document.body.appendChild(document.createElement('input'))
const botao = document.body.appendChild(document.createElement('button'))
const msg = document.body.appendChild(document.createElement('p'))
botao.innerText = 'Verificar'
botao.addEventListener('click', e => {
    switch (letra.value) {
        case 'F':
        case 'f':
            msg.innerText = `F - Feminino`
            break;
        case 'M':
        case 'm':
            msg.innerText = `M - Masculino`
            break;
    
        default:
            msg.innerText = `Sexo Inválido.`
            break;
    }
})