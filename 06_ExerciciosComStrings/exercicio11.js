// Jogo de Forca. 
// Desenvolva um jogo da forca.
// O programa terá uma lista de palavras lidas de um arquivo texto e escolherá uma aleatoriamente.
// O jogador poderá errar 6 vezes antes de ser enforcado.

// Digite uma letra: A
// -> Você errou pela 1ª vez. Tente de novo!

// Digite uma letra: O
// A palavra é: _ _ _ _ O

// Digite uma letra: E
// A palavra é: _ E _ _ O

// Digite uma letra: S
// -> Você errou pela 2ª vez. Tente de novo!

const BODY = document.querySelector('body')
const INPUT = BODY.appendChild(document.createElement('input'))
const BOTAO = BODY.appendChild(document.createElement('button'))
const MSG = BODY.appendChild(document.createElement('p'))

INPUT.setAttribute('placeholder', 'Digite uma letra')

function palavraAleatoria() {
    return $.get("./forca.txt", (data) => {
        var lines = data.split("/n");
        var r = Math.floor(Math.random() * lines.length);

        return lines[r];
    });
}

const PALAVRA = palavraAleatoria()

BOTAO.innerText = 'OK'
BOTAO.addEventListener('click', e => {
    let letra = INPUT.value.toUpperCase()
    let palavra = ''
    let erros = []

    PALAVRA.forEach(l => {
        palavra += ' _'
    })

    if (erros.length < 6) {
        if (PALAVRA.includes(letra)) {
            palavra.forEach((o, i, a) => a[i] = letra)
            MSG.innerText = `A palavra é: ${palavra}`
        } else {
            erros.push(letra)
            MSG.innerText = `-> Você errou pela ${erros.length}ª vez. Tente de novo!`
        }
    } else {
        MSG.innerText = '-> Você errou pela 6ª vez. Perdeu!'
    }

    INPUT.value = ''
})