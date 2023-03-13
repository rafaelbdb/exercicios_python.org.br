// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

const NOME = document.querySelector('body').appendChild(document.createElement('input'))
const SENHA = document.querySelector('body').appendChild(document.createElement('input'))
const BOTAO = document.querySelector('body').appendChild(document.createElement('button'))
const MSG = document.querySelector('body').appendChild(document.createElement('p'))

BOTAO.innerText = 'Verificar'
BOTAO.addEventListener('click', e => {
    if(NOME.value == SENHA.value){
        alert('A senha não pode ser igual ao nome.')
        NOME.value = ''
        SENHA.value = ''
    } else {
        MSG.innerText = 'OK.'
    }
})
