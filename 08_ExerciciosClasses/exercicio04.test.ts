import { assertEquals } from 'https://deno.land/std@0.178.0/testing/asserts.ts';
import { Pessoa } from './exercicio04.ts';

const PESSOA = new Pessoa('Mulequi', 12, 40, 150);

Deno.test('Envelhece a pessoa', (): void => {
  assertEquals(PESSOA.envelhecer(), 13);
  assertEquals(PESSOA.altura, 150.5);
});

Deno.test('Engorda a pessoa', (): void => {
  assertEquals(PESSOA.engordar(4.7), 44.7);
});

Deno.test('Emagrece a pessoa', (): void => {
  assertEquals(PESSOA.emagrecer(2.3), 42.4);
});

Deno.test('Cresce a pessoa', (): void => {
  assertEquals(PESSOA.crescer(8.7), 159.2);
});
