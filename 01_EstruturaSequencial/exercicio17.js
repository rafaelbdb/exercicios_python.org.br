// Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.
// Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:
// comprar apenas latas de 18 litros;
// comprar apenas galões de 3,6 litros;
// misturar latas e galões, de forma que o desperdício de tinta seja menor. Acrescente 10% de folga e sempre arredonde os valores para cima, isto é, considere latas cheias.

const container = document.querySelector("#container");
const areaM2 = container.appendChild(document.createElement('input'))
const botao = container.appendChild(document.createElement('button'))
botao.innerText = 'Calcular'

const msgQtdSoLatas = container.appendChild(document.createElement('p'))
const msgPrecoSoLatas = container.appendChild(document.createElement('p'))
const msgQtdSoGaloes = container.appendChild(document.createElement('p'))
const msgPrecoSoGaloes = container.appendChild(document.createElement('p'))

const msgQtdLatasMix = container.appendChild(document.createElement('p'))
const msgPrecoLatasMix = container.appendChild(document.createElement('p'))
const msgQtdGaloesMix = container.appendChild(document.createElement('p'))
const msgPrecoGaloesMix = container.appendChild(document.createElement('p'))
const msgPrecoTotal = container.appendChild(document.createElement('p'))

const cobertura = 1 / 6
const litrosLata = 18
const precoLata = 80.00
const litrosGalao = 3.6
const precoGalao = 25.00
const margemTolerancia = 10 / 100

botao.addEventListener('click', e => {
    let totalLitros = parseFloat(areaM2.value) * cobertura
    let toleranciaLitros = totalLitros * margemTolerancia
    totalLitros += toleranciaLitros

    let qtdSoLatas = Math.ceil(totalLitros / litrosLata)
    let precoSoLatas = qtdSoLatas * precoLata
    let qtdSoGaloes = Math.ceil(totalLitros / litrosGalao)
    let precoSoGaloes = qtdSoGaloes * precoGalao

    let qtdLatasMix = Math.floor(totalLitros / litrosLata)
    let qtdRestante = totalLitros - qtdLatasMix * litrosLata
    let qtdGaloesMix = Math.ceil(qtdRestante / litrosGalao)
    let precoTotalLatasMix = qtdLatasMix * precoLata
    let precoTotalGaloesMix = qtdGaloesMix * precoGalao
    let precoTotalMix = precoTotalLatasMix + precoTotalGaloesMix

    msgQtdSoLatas.innerText = `Quantidade usando somente Latas de 18 litros: ${qtdSoLatas}`
    msgPrecoSoLatas.innerText = `Preço usando somente Latas de 18 litros: R$ ${precoSoLatas}`
    msgQtdSoGaloes.innerText = `Quantidade usando somente Galões de 3.6 litros: ${qtdSoGaloes}`
    msgPrecoSoGaloes.innerText = `Preço usando somente Galões de 3.6 litros: R$ ${precoSoGaloes}`

    msgQtdLatasMix.innerText = `Quantidade de Latas 18 litros (mix): ${qtdLatasMix}`
    msgPrecoLatasMix.innerText = `Preço das Latas 18 litros (mix): R$ ${precoTotalLatasMix}`
    msgQtdGaloesMix.innerText = `Quantidade de Galões 3.6 litros (mix): ${qtdGaloesMix}`
    msgPrecoGaloesMix.innerText = `Preço dos Galões 3.6 litros (mix) R$: ${precoTotalGaloesMix}`
    msgPrecoTotal.innerText = `Preço total Mix: R$ ${precoTotalMix}`
})
