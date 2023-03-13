// Classe Conta de Investimento: Faça uma classe contaInvestimento que seja semelhante a classe contaBancaria, com a diferença de que se adicione um atributo taxaJuros.
// Forneça um construtor que configure tanto o saldo inicial como a taxa de juros.
// Forneça um método adicioneJuros(sem parâmetro explícito) que adicione juros à conta.
// Escreva um programa que construa uma poupança com um saldo inicial de R$1000, 00 e uma taxa de juros de 10 %.
// Depois aplique o método adicioneJuros() cinco vezes e imprime o saldo resultante.

import { expect, test } from 'bun:test';
import { ContaDeInvestimentos } from './exercicio12.js';

const CONTA = new ContaDeInvestimentos(1, 'teste', 1000.0, 10);

test('Adiciona juros', () => {
  expect(CONTA.adicioneJuros(5)).toEqual(1610.51);
});
