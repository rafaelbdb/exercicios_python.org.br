// Faça um programa que leia um arquivo texto contendo uma lista de endereços IP e gere um outro arquivo, contendo um relatório dos endereços IP válidos e inválidos.

// O arquivo de entrada possui o seguinte formato:
// 200.135.80.9
// 192.168.1.1
// 8.35.67.74
// 257.32.4.5
// 85.345.1.2
// 1.2.3.4
// 9.8.234.5
// 192.168.0.256

// O arquivo de saída possui o seguinte formato:
// [Endereços válidos:]
// 200.135.80.9
// 192.168.1.1
// 8.35.67.74
// 1.2.3.4

// [Endereços inválidos:]
// 257.32.4.5
// 85.345.1.2
// 9.8.234.5
// 192.168.0.256

let validos = []
let invalidos = []

let fs = require('fs');
let arquivo = fs.readFileSync(__dirname + '/ipsEntrada.txt', 'utf-8').split("\n")
for (const ip in arquivo) {
    let formato = arquivo[ip].match(/\d{1,3}\.\d{1,3}\.\d{1,3}/g)
    let numeros = arquivo[ip].split('.').every(n => {
        if (n < 0 || n > 255) {
            return false
        }
        return true
    });

    if (formato && numeros) {
        validos.push(arquivo[ip])
    } else {
        invalidos.push(arquivo[ip])
    }
}

let resultado = `[Enderecos válidos:]`
for (const v in validos) {
    resultado += `\n${validos[v]}`
}

resultado += `\n\n[Enderecos inválidos:]`
for (const i in invalidos) {
    resultado += `\n${invalidos[i]}`
}

fs.writeFile(__dirname + '/ipsSaida.txt', resultado, (err) => {
    if (err) throw err
})