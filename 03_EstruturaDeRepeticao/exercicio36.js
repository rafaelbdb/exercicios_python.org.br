// Desenvolva um programa que faça a tabuada de um número qualquer inteiro que será digitado pelo usuário, mas a tabuada não deve necessariamente iniciar em 1 e terminar em 10, o valor inicial e final devem ser informados também pelo usuário, conforme exemplo abaixo:

// Montar a tabuada de: 5
// Começar por: 4
// Terminar em: 7

// Vou montar a tabuada de 5 começando em 4 e terminando em 7:
// 5 X 4 = 20
// 5 X 5 = 25
// 5 X 6 = 30
// 5 X 7 = 35

// Obs: Você deve verificar se o usuário não digitou o final menor que o inicial.

const BODY = document.querySelector('body')
const NUMERO = BODY.appendChild(document.createElement('input'))
const INICIO = BODY.appendChild(document.createElement('input'))
const FINAL = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let numero = parseInt(NUMERO.value)
    let inicio = parseInt(INICIO.value)
    let final = parseInt(FINAL.value)

    if(final < inicio) {
        alert('Final menor que início.')
    } else {
        MSG.innerText = `Vou montar a tabuada de ${numero} começando em ${inicio} e terminando em ${final}:`

        for (let i = inicio; i <= final; i++) {
            MSG.innerText += `\n${numero} X ${i} = ${numero * i}`
        }
    }
})

