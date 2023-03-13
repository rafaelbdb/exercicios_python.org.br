// Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).

const container = document.querySelector("#container");
const tamanhoMB = container.appendChild(document.createElement('input'))
const velocidadeMbps = container.appendChild(document.createElement('input'))
const botao = container.appendChild(document.createElement('button'))
const msgTempo = container.appendChild(document.createElement('p'))

botao.innerText = 'Calcular'

botao.addEventListener('click', e => {
    let tamanhoMbits = parseInt(Math.ceil(parseFloat(tamanhoMB.value) * 8))
    let tempoMinutos = Math.ceil((tamanhoMbits / velocidadeMbps.value) / 60)

    msgTempo.innerText = `Tempo aproximado para download: ${tempoMinutos} minutos.`
})
