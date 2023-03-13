// Faça um programa que calcule as raízes de uma equação do segundo grau, na forma ax2 + bx + c.
// O programa deverá pedir os valores de A, B e C e fazer as consistências, informando ao usuário nas seguintes situações:
// Se o usuário informar o valor de A igual a zero, a equação não é do segundo grau e o programa não deve fazer pedir os demais valores, sendo encerrado;
// Se o delta calculado for negativo, a equação não possui raizes reais. Informe ao usuário e encerre o programa;
// Se o delta calculado for igual a zero a equação possui apenas uma raiz real; informe-a ao usuário;
// Se o delta for positivo, a equação possui duas raiz reais; informe-as ao usuário;

const A = document.querySelector('body').appendChild(document.createElement('input'))
const BOTAO_A = document.querySelector('body').appendChild(document.createElement('button'))
const MSG = document.querySelector('body').appendChild(document.createElement('p'))

BOTAO_A.innerText = 'Set A'
BOTAO_A.addEventListener('click', e => {
    let a = parseFloat(A.value)
    if(a == 0) {
        MSG.innerText = 'Não é uma equação do 2o grau. Encerrando...'
    } else {
        const B = document.querySelector('body').appendChild(document.createElement('input'))
        const C = document.querySelector('body').appendChild(document.createElement('input'))
        const BOTAO_CALCULAR = document.querySelector('body').appendChild(document.createElement('button'))

        BOTAO_CALCULAR.innerText = 'Calcular'
        BOTAO_CALCULAR.addEventListener('click', e => {
            let b = parseFloat(B.value)
            let c = parseFloat(C.value)
            let delta = (b * b) - (4 * a * c)
            if(delta < 0) {
                MSG.innerText = 'A equação não possui raizes reais. Encerrando...'
            } else if (delta == 0) {
                let resultado = (-b) / (2*a)
                MSG.innerText = `Há apenas uma raiz real: ${resultado}`
            } else {
                let pos = (-b + Math.sqrt(delta)) / (2 * a)
                let neg = (-b - Math.sqrt(delta)) / (2 * a)
                MSG.innerText = `Há 2 raizes reais: ${pos} e ${neg}.`
            }
        })
    }
})
