// Faça um programa para uma loja de tintas. 
// O programa deverá pedir o tamanho em metros quadrados da área a ser pintada.
// Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
// Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.

const container = document.querySelector("#container");
const areaM2 = container.appendChild(document.createElement('input'))
const botao = container.appendChild(document.createElement('button'))
const msgLatasTotal = container.appendChild(document.createElement('p'))
const msgValorTotal = container.appendChild(document.createElement('p'))

botao.innerText = 'Calcular'
const litrosLata = 18
const cobertura = 1/3
const precoLata = 80.00

botao.addEventListener('click', e => {
    let latasTotal = Math.ceil((parseFloat(areaM2.value) * cobertura) / litrosLata)
    let valorTotal = latasTotal * precoLata

    msgLatasTotal.innerText = 'Quantidade de latas a comprar: ' + latasTotal
    msgValorTotal.innerText = 'Total a pagar: R$ ' + valorTotal
})