import { assertEquals } from 'https://deno.land/std@0.178.0/testing/asserts.ts';
import { Bola } from './exercicio01.ts';

const BOLA = new Bola('azul', 10, 'borracha');

Deno.test('Mostra a cor atual da bola', () => {
  assertEquals(BOLA.mostraCor(), 'Mostrou a cor: azul');
});

Deno.test('Altera a cor atual da bola', () => {
  assertEquals(BOLA.trocaCor('vermelha'), 'Trocou a cor para: vermelha');
});
