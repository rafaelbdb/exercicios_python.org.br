// Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].

const container = document.querySelector("#container");
const campo = container.appendChild(document.createElement("input"));
const botao = container.appendChild(document.createElement("button"));

campo.setAttribute("id", "campo");
botao.setAttribute("id", "botao");
botao.innerText = `OK`;

botao.addEventListener('click', e => {
    alert(campo.value);
});