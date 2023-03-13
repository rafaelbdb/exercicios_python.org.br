import { assertEquals } from 'https://deno.land/std@0.178.0/testing/asserts.ts';
import { Quadrado } from './exercicio02.ts';

const QUADRADO = new Quadrado(10);

Deno.test('Retorna o valor do lado', (): void => {
  assertEquals(QUADRADO.retornarValorLado(), 10);
});

Deno.test('Muda valor lado', (): void => {
  assertEquals(QUADRADO.mudarValorLado(15), 'Mudou o valor do lado para: 15');
});

Deno.test('Calcula a área do quadrado', (): void => {
  assertEquals(QUADRADO.calcularArea(), 225);
});
