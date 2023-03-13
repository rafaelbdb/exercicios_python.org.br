// Faça um Programa que peça os 3 lados de um triângulo.
// O programa deverá informar se os valores podem ser um triângulo.
// Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.

// Dicas:
// Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
// Triângulo Equilátero: três lados iguais;
// Triângulo Isósceles: quaisquer dois lados iguais;
// Triângulo Escaleno: três lados diferentes;

const LADO1 = document.querySelector('body').appendChild(document.createElement('input'))
const LADO2 = document.querySelector('body').appendChild(document.createElement('input'))
const LADO3 = document.querySelector('body').appendChild(document.createElement('input'))
const BOTAO = document.querySelector('body').appendChild(document.createElement('button'))
const MSG = document.querySelector('body').appendChild(document.createElement('p'))

BOTAO.innerText = 'Calcular'
BOTAO.addEventListener('click', e => {
    let l1 = parseFloat(LADO1.value)
    let l2 = parseFloat(LADO2.value)
    let l3 = parseFloat(LADO3.value)
    
    if (l1 + l2 > l3 || l1 + l3 > l2 || l2 + l3 > l1) {
        if (l1 == l2 && l2 == l3) {
            MSG.innerText = 'Triângulo Equilátero'
        } else if (l1 == l2 || l1 == l3 || l2 == l3) {
            MSG.innerText = 'Triângulo Isósceles'
        } else if (l1 != l2 && l1 != l3 && l2 != l3) {
            MSG.innerText = 'Triângulo Escaleno'
        }
    } else {
        MSG.innerText = 'Não é possível formar um triângulo com esses lados.'
    } 
})
