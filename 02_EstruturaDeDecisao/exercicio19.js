// Faça um Programa que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do mesmo.
// Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplo:
// 326 = 3 centenas, 2 dezenas e 6 unidades
// 12 = 1 dezena e 2 unidades Testar com: 326, 300, 100, 320, 310, 305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16

const NUMERO = document.querySelector('body').appendChild(document.createElement('input'))
const BOTAO = document.querySelector('body').appendChild(document.createElement('button'))
const MSG = document.querySelector('body').appendChild(document.createElement('p'))
const TIPOS = ['unidade', 'dezena', 'centena']

BOTAO.innerText = 'Verificar'
BOTAO.addEventListener('click', e => {
    if(parseInt(NUMERO.value) >= 1000){
        MSG.innerText = 'Informe um número menor do que 1000.'
    } else {
        let algs = NUMERO.value.split('')
        for(let i = 1; i <= algs.length; i++){
            if(parseInt(algs[algs.length-i]) > 0){
                algs[algs.length-i] += ' ' + TIPOS[i-1]
                if(parseInt(algs[algs.length-i]) > 1){
                    algs[algs.length-i] += 's'
                }
                algs[algs.length-i] += ', '
            }
        }

        algs = algs.filter(a => {
            return a != 0
        })

        let msg = algs.join('')
        msg = msg.replace(/(, $)/, '')
        if(algs.length > 1){
            let pos = msg.lastIndexOf(', ')
            msg = msg.slice(0,pos) + ' e ' + msg.slice(pos+1)
            msg = msg.replace(/( e $)/, '')
        }
        
        MSG.innerText = `${msg}`
    }
})
