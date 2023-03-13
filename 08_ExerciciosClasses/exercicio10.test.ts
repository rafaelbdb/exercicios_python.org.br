// Classe Bomba de Combustível: Faça um programa completo utilizando classes e métodos que:

// Possua uma classe chamada bombaCombustivel, com no mínimo esses atributos:
// tipoCombustivel
// valorLitro
// quantidadeCombustivel

// Possua no mínimo esses métodos:
// abastecerPorValor( ) – método onde é informado o valor a ser abastecido e mostra a quantidade de litros que foi colocada no veículo
// abastecerPorLitro( ) – método onde é informado a quantidade em litros de combustível e mostra o valor a ser pago pelo cliente.
// alterarValor( ) – altera o valor do litro do combustível.
// alterarCombustivel( ) – altera o tipo do combustível.
// alterarQuantidadeCombustivel( ) – altera a quantidade de combustível restante na bomba.

// OBS: Sempre que acontecer um abastecimento é necessário atualizar a quantidade de combustível total na bomba.

import { expect, test } from 'bun:test';
import { BombaCombustivel } from './exercicio10.js';

const BOMBA_GAS = new BombaCombustivel('gasolina', 5.98, 7839);
const BOMBA_ETA = new BombaCombustivel('etanol', 3.8, 4723);

test('Alterar valor', (): void => {
  expect(BOMBA_GAS.alterarValor(4.57)).toEqual(-1.41);
  expect(BOMBA_ETA.alterarValor(6.42)).toEqual(2.62);
});

test('Alterar combustivel', (): void => {
  expect(BOMBA_GAS.alterarCombustivel('aditivada')).toEqual(
    'Combustível alterado de gasolina para aditivada.',
  );
  expect(BOMBA_ETA.alterarCombustivel('alcool')).toEqual(
    'Combustível alterado de etanol para alcool.',
  );
});

test('Alterar quantidade combustivel', (): void => {
  expect(BOMBA_GAS.alterarQuantidadeCombustivel(46)).toEqual(7793);
  expect(BOMBA_ETA.alterarQuantidadeCombustivel(74)).toEqual(4649);
});

test('Abastecer por valor', (): void => {
  expect(BOMBA_GAS.abastecerPorValor(67)).toEqual(14.66);
  expect(BOMBA_ETA.abastecerPorValor(49)).toEqual(7.63);
});

test('Abastecer por litro', (): void => {
  expect(BOMBA_GAS.abastecerPorLitro(12)).toEqual(54.84);
  expect(BOMBA_ETA.abastecerPorLitro(34)).toEqual(218.28);
});
