import { assertEquals } from 'https://deno.land/std@0.178.0/testing/asserts.ts';
import { ContaCorrente } from './exercicio05.ts';

const CONTA = new ContaCorrente(1, 'Exemplo')

Deno.test('Altera Nome', (): void => {
  assertEquals(CONTA.alterarNome('Eu'), 'Eu');
});

Deno.test('Faz depósito', (): void => {
  assertEquals(CONTA.deposito(300), 300);
});

Deno.test('Faz saque', (): void => {
  assertEquals(CONTA.saque(200), 100);
});