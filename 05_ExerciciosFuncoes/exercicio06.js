// Faça um programa que converta da notação de 24 horas para a notação de 12 horas. 
// Por exemplo, o programa deve converter 14:25 em 2:25 P.M. 
// A entrada é dada em dois inteiros. 
// Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída. 
// Registre a informação A.M./P.M. como um valor ‘A’ para A.M. e ‘P’ para P.M. 
// Assim, a função para efetuar as conversões terá um parâmetro formal para registrar se é A.M. ou P.M. 
// Inclua um loop que permita que o usuário repita esse cálculo para novos valores de entrada todas as vezes que desejar.

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {

    var horario = INPUT.value.split(':').map(Number)
    var hora = horario[0]
    var minuto = horario[1]
    var periodo = 'A'

    function converte(hora, minuto) {
        if (hora > 12) {
            hora -= 12
            periodo = 'P'
        }
        return hora.toString() + ':' + minuto.toString()
    }

    function imprime(hora, minuto) {
        MSG.innerText = `${converte(hora, minuto)} ${periodo}.M.`
    }

    imprime(hora, minuto)

})
