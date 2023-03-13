// Classe carro: Implemente uma classe chamada Carro com as seguintes propriedades:

// Um veículo tem um certo consumo de combustível (medidos em km / litro) e uma certa quantidade de combustível no tanque.
// O consumo é especificado no construtor e o nível de combustível inicial é 0.

// Forneça um método andar( ) que simule o ato de dirigir o veículo por uma certa distância, reduzindo o nível de combustível no tanque de gasolina.
// Forneça um método obterGasolina( ), que retorna o nível atual de combustível.
// Forneça um método adicionarGasolina( ), para abastecer o tanque.

// Exemplo de uso:
// meuFusca = Carro(15);           # 15 quilômetros por litro de combustível.
// meuFusca.adicionarGasolina(20); # abastece com 20 litros de combustível.
// meuFusca.andar(100);            # anda 100 quilômetros.
// meuFusca.obterGasolina()        # Imprime o combustível que resta no tanque.

import { expect, test } from 'bun:test';
import { Carro } from './exercicio11.js';

const MEU_FUSCA = new Carro(15);

test('Adicionar gasolina', (): void => {
  expect(MEU_FUSCA.adicionarGasolina(20)).toEqual(20);
});

test('Andar', (): void => {
  expect(MEU_FUSCA.andar(100)).toEqual(6.67);
});

test('Obter gasolina', (): void => {
  expect(MEU_FUSCA.obterGasolina()).toEqual(13.33);
});
