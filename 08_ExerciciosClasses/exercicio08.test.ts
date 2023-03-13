import { assertEquals } from 'https://deno.land/std@0.178.0/testing/asserts.ts';
import { Macaco } from './exercicio08.ts';

const MACACO_A = new Macaco('Donkey');
const MACACO_B = new Macaco('Kong');

Deno.test('Faz o macaco comer uma banana', (): void => {
  assertEquals(MACACO_A.comer(['banana', 'goiaba', 'laranja']), [
    'banana',
    'goiaba',
    'laranja',
  ]);
  assertEquals(MACACO_B.comer(['maçã', 'uva', 'pêra']), [
    'maçã',
    'uva',
    'pêra',
  ]);
  //   assertThrows((): void => {MACACO_B.comer(MACACO_A)}, Error);
});

Deno.test('Verifica o que tem no bucho do macaco', (): void => {
  assertEquals(MACACO_A.verBucho(), ['banana', 'goiaba', 'laranja']);
  assertEquals(MACACO_B.verBucho(), ['maçã', 'uva', 'pêra']);
});
