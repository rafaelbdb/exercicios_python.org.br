// Aprimore a classe do exercício anterior para adicionar o método aumentarSalario (porcentualDeAumento) que aumente o salário do funcionário em uma certa porcentagem.

// Exemplo de uso:
//   harry=funcionário("Harry",25000)
//   harry.aumentarSalario(10)

import { test, expect } from "bun:test";
import { Funcionario } from "./exercicio14.js";

const FUNCIONARIO = new Funcionario('Exemplar', 2345.67)

test('Aumentar salário', () => {
    expect(FUNCIONARIO.aumentarSalario(10)).toEqual(2355.67)
});
