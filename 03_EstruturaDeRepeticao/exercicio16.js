// A série de Fibonacci é formada pela seqüência 0,1,1,2,3,5,8,13,21,34,55,...
// Faça um programa que gere a série até que o valor seja maior que 500.

const BODY = document.querySelector('body')
const MSG = BODY.appendChild(document.createElement('p'))

let fib = [0, 1]
let ultimo = 0
for (let i = 2; ultimo <= 500; i++){
    ultimo = fib[i] = fib[i-2] + fib[i-1]
    MSG.innerText += `${fib[i]}\n`
}
