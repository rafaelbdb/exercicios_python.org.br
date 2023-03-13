// Data com mês por extenso.
// Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato D de mesPorExtenso de AAAA.
// Opcionalmente, valide a data e retorne NULL caso a data seja inválida.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

const MESES = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let data = INPUT.value

    // https://stackoverflow.com/questions/10194464/javascript-dd-mm-yyyy-date-check
    function DDMMYYY_Validation(data) {
        var reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
        return !!data?.match(reg);
    }

    if (!DDMMYYY_Validation(data)) {
        alert('Data inválida.')
    } else {
        let numeros = data.split('/')
        let dia = parseInt(numeros[0])
        let mes = parseInt(numeros[1]) - 1
        let ano = parseInt(numeros[2]).toString().padStart(4, '0')

        MSG.innerText = `${dia} de ${MESES[mes]} de ${ano}`
    }

})
