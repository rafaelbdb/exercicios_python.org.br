// Uma academia deseja fazer um senso entre seus clientes para descobrir o mais alto, o mais baixo, a mais gordo e o mais magro, para isto você deve fazer um programa que pergunte a cada um dos clientes da academia seu código, sua altura e seu peso.
// O final da digitação de dados deve ser dada quando o usuário digitar 0 (zero) no campo código.
// Ao encerrar o programa também deve ser informados os códigos e valores do clente mais alto, do mais baixo, do mais gordo e do mais magro, além da média das alturas e dos pesos dos clientes

const BODY = document.querySelector('body')
const CODIGO = BODY.appendChild(document.createElement('input'))
const ALTURA = BODY.appendChild(document.createElement('input'))
const PESO = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

let clientes = []

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let codigo = parseInt(CODIGO.value)
    let altura = parseFloat(ALTURA.value)
    let peso = parseFloat(PESO.value)

    CODIGO.value = ''
    ALTURA.value = ''
    PESO.value = ''

    if (codigo != 0){
        clientes.push({
            'Código': codigo,
            'Altura': altura,
            'Peso': peso
        })
    }

    let alturas = []
    let pesos = []
    let tops = []
    
    clientes.forEach(c => {
        if(c['Altura'] > Math.max(...alturas)) {
            tops['alto'] = c
        }
        
        if(c['Peso'] > Math.max(...pesos)) {
            tops['gordo'] = c
        }
        
        if(c['Altura'] < Math.min(...alturas)) {
            tops['baixo'] = c
        }
        
        if(c['Peso'] < Math.min(...pesos)) {
            tops['magro'] = c
        }
        
        alturas.push(c['Altura'])
        pesos.push(c['Peso'])
    })

    console.log(tops)

    if (codigo == 0) {
        let mediaAlturas = alturas.reduce((a,b) => a+b) / alturas.length
        let mediaPesos = pesos.reduce((a,b) => a+b) / pesos.length

        MSG.innerText = `Cliente mais alto: Código - ${tops['alto']['Código']}; Altura - ${tops['alto']['Altura']}; Peso - ${tops['alto']['Peso']}.`
        MSG.innerText += `\nCliente mais baixo: Código - ${tops['baixo']['Código']}; Altura - ${tops['baixo']['Altura']}; Peso - ${tops['baixo']['Peso']}.`
        MSG.innerText += `\nCliente mais gordo: Código - ${tops['gordo']['Código']}; Altura - ${tops['gordo']['Altura']}; Peso - ${tops['gordo']['Peso']}.`
        MSG.innerText += `\nCliente mais magro: Código - ${tops['magro']['Código']}; Altura - ${tops['magro']['Altura']}; Peso - ${tops['magro']['Peso']}.`
        MSG.innerText += `\nAltura média: ${mediaAlturas}.`
        MSG.innerText += `\nPeso médio: ${mediaPesos}.`
    }
})
