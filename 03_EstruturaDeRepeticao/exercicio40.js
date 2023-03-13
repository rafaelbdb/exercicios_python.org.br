// Foi feita uma estatística em cinco cidades brasileiras para coletar dados sobre acidentes de trânsito.

// Foram obtidos os seguintes dados:
// Código da cidade;
// Número de veículos de passeio (em 1999);
// Número de acidentes de trânsito com vítimas (em 1999).

// Deseja-se saber:
// Qual o maior e menor índice de acidentes de transito e a que cidade pertence;
// Qual a média de veículos nas cinco cidades juntas;
// Qual a média de acidentes de trânsito nas cidades com menos de 2.000 veículos de passeio.

const BODY = document.querySelector('body')
const COD_CIDADE = BODY.appendChild(document.createElement('input'))
const QTD_VEICULOS = BODY.appendChild(document.createElement('input'))
const QTD_ACIDENTES = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

let cidades = []

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let codCid = parseInt(COD_CIDADE.value)
    let qtdVei = parseInt(QTD_VEICULOS.value)
    let qtdAcd = parseInt(QTD_ACIDENTES.value)

    if (cidades.length < 5) {
        cidades[codCid] = {
            'veiculos': qtdVei,
            'acidentes': qtdAcd,
            'indice': qtdAcd/qtdVei
        }
        
        COD_CIDADE.value = ''
        QTD_VEICULOS.value = ''
        QTD_ACIDENTES.value = ''
    } else {
        let maiorIndice = [0, 0]
        let menorIndice = [0, 0]
        let totalVeiculos = 0
        let totalAcidentes = 0
        cidades.forEach(c => {
            if(c['indice'] > maiorIndice[1]){
                maiorIndice = [cidades.indexOf(c), c['indice']]
            }
            
            if(c['indice'] < menorIndice[1]){
                menorIndice = [cidades.indexOf(c), c['indice']]
            }

            totalVeiculos += c['veiculos']
            if(c['veiculos'] < 2000){
                totalAcidentes += c['acidentes']
            }
        })

        let mediaVeiculos = totalVeiculos/cidades.length
        let mediaAcidentes = totalAcidentes/cidades.length
        
        MSG.innerText = `Maior índice: ${maiorIndice[1]} - ${maiorIndice[0]}`
        MSG.innerText += `\nMenor índice: ${menorIndice[1]} - ${menorIndice[0]}`
        MSG.innerText += `\nMédia de Veículos: ${mediaVeiculos}`
        MSG.innerText += `\nMédia de Acidentes: ${mediaAcidentes}`
    }
    
})

