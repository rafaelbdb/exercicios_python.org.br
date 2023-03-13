// Classe Ponto e Retangulo: Faça um programa completo utilizando funções e classes que:

// Possua uma classe chamada Ponto, com os atributos x e y.
// Possua uma classe chamada Retangulo, com os atributos largura e altura.
// Possua uma função para imprimir os valores da classe Ponto
// Possua uma função para encontrar o centro de um Retângulo.

// Você deve criar alguns objetos da classe Retangulo.
// Cada objeto deve ter um vértice de partida, por exemplo, o vértice inferior esquerdo do retângulo, que deve ser um objeto da classe Ponto.
// A função para encontrar o centro do retângulo deve retornar o valor para um objeto do tipo ponto que indique os valores de x e y para o centro do objeto.
// O valor do centro do objeto deve ser mostrado na tela
// Crie um menu para alterar os valores do retângulo e imprimir o centro deste retângulo.

import { expect, test } from 'bun:test';
import { Ponto, Retangulo } from './exercicio09.js';

const PONTO = new Ponto(34, 12);
const RETANGULO_A = new Retangulo(PONTO, 432, 234);
const RETANGULO_B = new Retangulo(PONTO, 378, 156);
const RETANGULO_C = new Retangulo(PONTO, 78, 23);

test('Imprime valores da classe Ponto', (): void => {
  expect(PONTO.imprimeValores()).toEqual({ x: 34, y: 12 });
});

test('Encontra o centro do Retângulo', (): void => {
  expect(RETANGULO_A.encontrarCentro()).toEqual({ x: 250, y: 129 });
  expect(RETANGULO_B.encontrarCentro()).toEqual({ x: 223, y: 90 });
  expect(RETANGULO_C.encontrarCentro()).toEqual({ x: 73, y: 23.5 });
});
