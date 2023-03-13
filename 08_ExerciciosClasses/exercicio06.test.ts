import { assertEquals } from 'https://deno.land/std@0.178.0/testing/asserts.ts';
import { Televisor } from './exercicio06.ts';

const TV = new Televisor();

Deno.test('Verifica o canal atual', (): void => {
  assertEquals(TV.canal, 4);
});

Deno.test('Verifica o volume atual', (): void => {
  assertEquals(TV.volume, 50);
});

Deno.test('Aumenta o volume', (): void => {
  assertEquals(TV.aumentarVolume(20), 70);
});

Deno.test('Diminui o volume', (): void => {
  assertEquals(TV.diminuirVolume(50), 20);
});

Deno.test('Troca de canal', (): void => {
  assertEquals(TV.trocarCanal(7), 7);
});