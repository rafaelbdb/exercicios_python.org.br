// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Sexo: 'f' ou 'm';
// Estado Civil: 's', 'c', 'v', 'd';

const NOME = document.querySelector('body').appendChild(document.createElement('input'))
const IDADE = document.querySelector('body').appendChild(document.createElement('input'))
const SALARIO = document.querySelector('body').appendChild(document.createElement('input'))
const SEXO = document.querySelector('body').appendChild(document.createElement('input'))
const ESTADO_CIVIL = document.querySelector('body').appendChild(document.createElement('input'))
const BOTAO = document.querySelector('body').appendChild(document.createElement('button'))
const MSG = document.querySelector('body').appendChild(document.createElement('p'))

BOTAO.innerText = 'Verificar'
BOTAO.addEventListener('click', e => {
    let msg = ''
    
    if (NOME.value.length <= 3){
        msg += 'O nome precisa ter mais do que 3 caracteres.\n'
    }

    if (parseInt(IDADE.value) < 0 || parseInt(IDADE.value) > 150) {
        msg += 'A idade precisa estar entre 0 e 150 anos.\n'
    }

    if (parseFloat(SALARIO.value) <= 0) {
        msg += 'O salário precisa ser maior que zero.\n'
    }

    if (!['f', 'm'].includes(SEXO.value.toLowerCase())) {
        msg += 'Sexo deve ser M ou F.\n'
    }

    if (!['s', 'c', 'v', 'd'].includes(ESTADO_CIVIL.value.toLowerCase())) {
        msg += 'Estado Civil deve ser S, C, V ou D.\n'
    }

    if (msg != '') {
        alert(msg)
    }
})
