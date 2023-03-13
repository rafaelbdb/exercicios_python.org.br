import { assertEquals } from 'https://deno.land/std@0.178.0/testing/asserts.ts';
import { Retangulo } from './exercicio03.ts';

const LOCAL = new Retangulo(120, 230);
const PISO = new Retangulo(25, 35);

Deno.test('Retorna valor dos lados do Piso', (): void => {
  assertEquals(PISO.retornarValorLados(), 'Base: 25\nAltura: 35');
});

Deno.test('Muda valor dos lados do Piso', (): void => {
  assertEquals(
    PISO.mudarValorLados(20, 30),
    'Mudou lados para:\nBase: 20\nAltura: 30',
  );
});

Deno.test('Calcula área do Piso', (): void => {
  assertEquals(PISO.calcularArea(), 600);
});

Deno.test('Calcula perímetro do Piso', (): void => {
  assertEquals(PISO.calcularPerimetro(), 100);
});

Deno.test('Calcula quantidade de Pisos', (): void => {
  assertEquals(PISO.calcularQtdPisos(LOCAL.calcularArea()), 46);
});
