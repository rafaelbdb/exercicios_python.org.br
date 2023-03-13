// Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%.
// Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

let a = 80000
let txA = 3/100
let b = 200000
let txB = 1.5/100
let anos = 0

while (a < b) {
    a += a * txA
    b += b * txB
    anos++
}

const ANOS = document.querySelector('body').appendChild(document.createElement('p'))
ANOS.innerText = `Foram necessários ${anos} anos para a população do país A ultrapassar a de B.`
