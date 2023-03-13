// Classe Funcionário: Implemente a classe Funcionário.
// Um empregado tem um nome(um string) e um salário(um double).
// Escreva um construtor com dois parâmetros(nome e salário) e métodos para devolver nome e salário.
// Escreva um pequeno programa que teste sua classe.

import { test, expect } from "bun:test";
import { Funcionario } from "./exercicio13.js";

const FUNCIONARIO = new Funcionario('Exemplar', 2345.67)

test('Mostrar nome', () => {
    expect(FUNCIONARIO.mostraNome()).toEqual('Exemplar')
});

test('Mostrar salário', () => {
    expect(FUNCIONARIO.mostraSalario()).toEqual(2345.67)
});