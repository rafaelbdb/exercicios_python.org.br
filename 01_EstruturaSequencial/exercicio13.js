// Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
// Para homens: (72.7*h) - 58
// Para mulheres: (62.1*h) - 44.7

const container = document.querySelector("#container");
const altura = container.appendChild(document.createElement('input'))
const sexo = container.appendChild(document.createElement('select'))
const opcoes = ['Homem', 'Mulher']
const botao = container.appendChild(document.createElement('button'))
const pesoIdeal = container.appendChild(document.createElement('p'))
botao.innerText = 'Calcular'
opcoes.forEach(o => {
    let opcao = sexo.appendChild(document.createElement('option'))
    opcao.text = o
    opcao.value = o
})
botao.addEventListener('click', e => {
    switch (sexo.value) {
        case 'Homem':
            pesoIdeal.innerText = (72.7 * parseFloat(altura.value)) - 58
            break;
        case 'Mulher':
            pesoIdeal.innerText = (62.1 * parseFloat(altura.value)) - 44.7
            break;
    }
})