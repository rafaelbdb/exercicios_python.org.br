// A ACME Inc., uma empresa de 500 funcionários, está tendo problemas de espaço em disco no seu servidor de arquivos.
// Para tentar resolver este problema, o Administrador de Rede precisa saber qual o espaço ocupado pelos usuários, e identificar os usuários com maior espaço ocupado.

// Através de um programa, baixado da Internet, ele conseguiu gerar o seguinte arquivo, chamado "usuarios.txt":
// alexandre       456123789
// anderson        1245698456
// antonio         123456456
// carlos          91257581
// cesar           987458
// rosemary        789456125

// Neste arquivo, o nome do usuário possui 15 caracteres. 

// A partir deste arquivo, você deve criar um programa que gere um relatório, chamado "relatório.txt", no seguinte formato:

// ACME Inc.               Uso do espaço em disco pelos usuários
// ------------------------------------------------------------------------
// Nr.  Usuário        Espaço utilizado     % do uso
// 1    alexandre       434,99 MB             16,85%
// 2    anderson       1187,99 MB             46,02%
// 3    antonio         117,73 MB              4,56%
// 4    carlos           87,03 MB              3,37%
// 5    cesar             0,94 MB              0,04%
// 6    rosemary        752,88 MB             29,16%
// ------------------------------------------------------------------------
// Espaço total ocupado: 2581,57 MB
// Espaço médio ocupado: 430,26 MB

// O arquivo de entrada deve ser lido uma única vez, e os dados armazenados em memória, caso sejam necessários, de forma a agilizar a execução do programa.
// A conversão da espaço ocupado em disco, de bytes para megabytes deverá ser feita através de uma função separada, que será chamada pelo programa principal.
// O cálculo do percentual de uso também deverá ser feito através de uma função, que será chamada pelo programa principal.

let fs = require('fs')
let arquivo = fs.readFileSync(__dirname + '/usuarios.txt', 'utf-8').split('\n')
for (const linha in arquivo) {
    arquivo[linha] = arquivo[linha].replace(/ +/g, ' ')
}

let usuarios = arquivo.map(l => l.split(' '));
let tamanhoTotal = 0

usuarios.forEach(u => {
    tamanhoTotal += parseInt(u[1])
});

console.log(tamanhoTotal)

function mega(bytes) {
    return ((parseInt(bytes) / 1024) / 1024).toFixed(2)
}

function percentual(bytes) {
    return (bytes * 100) / tamanhoTotal
}

let media = mega(tamanhoTotal / usuarios.length)

let texto = `ACME Inc.${' '.repeat(10)}Uso do espaço em disco pelos usuários`
texto += `\n${'-'.repeat(60)}\n`
texto += `Nr.${' '.repeat(3)}`
texto += `Usuário${' '.repeat(8)}`
texto += `Espaço utilizado${' '.repeat(5)}`
texto += `% do uso`

usuarios.forEach((u, i) => {
    texto += `\n`
    texto += `${i + 1}${' '.repeat(5)}`
    texto += `${u[0]}${' '.repeat(15 - u[0].length)}`
    texto += `${mega(u[1])} MB${' '.repeat(20 - mega(u[1]).length)}`
    texto += `${percentual(u[1]).toFixed(2)}%`
})

texto += `\n${'-'.repeat(60)}\n`
texto += `Espaço total ocupado: ${mega(tamanhoTotal)} MB`
texto += `\n`
texto += `Espaço médio ocupado: ${media} MB`


fs.writeFile(__dirname + '/relatorio.txt', texto, (err) => {
    if (err) throw err
})