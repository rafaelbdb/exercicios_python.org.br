import { assertEquals } from 'https://deno.land/std@0.178.0/testing/asserts.ts';
import { Tamagotchi, verificaHumor } from './exercicio07.ts';

const BICHINHO = new Tamagotchi('Bixin');

Deno.test('Altera nome do bicho', (): void => {
  assertEquals(BICHINHO.alterarNome('bixo'), 'bixo');
});

Deno.test('Altera fome do bicho', (): void => {
  assertEquals(BICHINHO.alterarFome(true), true);
});

Deno.test('Altera idade do bicho', (): void => {
  assertEquals(BICHINHO.alterarIdade(), 1);
});

Deno.test('Verifica o humor do bicho', (): void => {
  assertEquals(verificaHumor(BICHINHO), 'Feliz');
});