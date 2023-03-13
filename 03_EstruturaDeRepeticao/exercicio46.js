// Em uma competição de salto em distância cada atleta tem direito a cinco saltos.
// No final da série de saltos de cada atleta, o melhor e o pior resultados são eliminados. 
// O seu resultado fica sendo a média dos três valores restantes. 
// Você deve fazer um programa que receba o nome e as cinco distâncias alcançadas pelo atleta em seus saltos e depois informe a média dos saltos conforme a descrição acima informada (retirar o melhor e o pior salto e depois calcular a média). 
// Faça uso de uma lista para armazenar os saltos. 
// Os saltos são informados na ordem da execução, portanto não são ordenados. 
// O programa deve ser encerrado quando não for informado o nome do atleta. 

// A saída do programa deve ser conforme o exemplo abaixo:

// Atleta: Rodrigo Curvêllo
// Primeiro Salto: 6.5 m
// Segundo Salto: 6.1 m
// Terceiro Salto: 6.2 m
// Quarto Salto: 5.4 m
// Quinto Salto: 5.3 m
// Melhor salto:  6.5 m
// Pior salto: 5.3 m
// Média dos demais saltos: 5.9 m
// Resultado final:
// Rodrigo Curvêllo: 5.9 m

const BODY = document.querySelector('body')
const ATLETA = BODY.appendChild(document.createElement('input'))
const SALTO1 = BODY.appendChild(document.createElement('input'))
const SALTO2 = BODY.appendChild(document.createElement('input'))
const SALTO3 = BODY.appendChild(document.createElement('input'))
const SALTO4 = BODY.appendChild(document.createElement('input'))
const SALTO5 = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

ATLETA.setAttribute('placeHolder', 'Nome do atleta')
SALTO1.setAttribute('placeHolder', 'Salto 1')
SALTO2.setAttribute('placeHolder', 'Salto 2')
SALTO3.setAttribute('placeHolder', 'Salto 3')
SALTO4.setAttribute('placeHolder', 'Salto 4')
SALTO5.setAttribute('placeHolder', 'Salto 5')

let torneio = []

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    if (ATLETA.value) {
        torneio.push({
            [ATLETA.value]: [
                parseFloat(SALTO1.value).toFixed(1),
                parseFloat(SALTO2.value).toFixed(1),
                parseFloat(SALTO3.value).toFixed(1),
                parseFloat(SALTO4.value).toFixed(1),
                parseFloat(SALTO5.value).toFixed(1)
            ]
        })

        ATLETA.value = ''
        SALTO1.value = ''
        SALTO2.value = ''
        SALTO3.value = ''
        SALTO4.value = ''
        SALTO5.value = ''
    } else {
        for (const [key, value] of Object.entries(torneio)) {
            let nome = Object.entries(value)[0][0]
            let saltos = Object.entries(value)[0][1].map(Number)
            let maior = Math.max(...saltos)
            let menor = Math.min(...saltos)
            let restantes = saltos.filter(s => (s != maior && s != menor))
            let media = (restantes.reduce((a, b) => a + b) / restantes.length).toFixed(1)

            debugger
            MSG.innerText += `\nAtleta: ${nome}`
            MSG.innerText += `\nPrimeiro Salto: ${saltos[0]}m`
            MSG.innerText += `\nSegundo Salto: ${saltos[1]}m`
            MSG.innerText += `\nTerceiro Salto: ${saltos[2]}m`
            MSG.innerText += `\nQuarto Salto: ${saltos[3]}m`
            MSG.innerText += `\nQuinto Salto: ${saltos[4]}m`
            MSG.innerText += `\nMelhor salto: ${maior}m`
            MSG.innerText += `\nPior salto: ${menor}m`
            MSG.innerText += `\nMédia dos demais saltos: ${media}m`
            MSG.innerText += `\nResultado final:`
            MSG.innerText += `\n${nome}: ${media}m`
        }
    }

})
