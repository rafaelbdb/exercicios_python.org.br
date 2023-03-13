// Classe TV: Faça um programa que simule um televisor criando-o como um objeto.
// O usuário deve ser capaz de informar o número do canal e aumentar ou diminuir o volume.
// Certifique-se de que o número do canal e o nível do volume permanecem dentro de faixas válidas.

export class Televisor {
  canal: number;
  volume: number;

  constructor(canal: number = 4, volume: number = 50) {
    try {
      this.canal = canal;
      this.volume = volume;
    } catch (err) {
      throw new Error(err);
    }
  }

  trocarCanal(novoCanal: number): number {
    try {
      if (CANAIS.includes(novoCanal)) {
        this.canal = novoCanal;
      }
      return this.canal;
    } catch (err) {
      throw new Error(err);
    }
  }

  aumentarVolume(aumento: number): number {
    try {
      this.volume += this.volume + aumento <= 100 ? aumento : 0;
      return this.volume;
    } catch (err) {
      throw new Error(err);
    }
  }

  diminuirVolume(reducao: number): number {
    try {
      this.volume -= this.volume - reducao >= 0 ? reducao : 0;
      return this.volume;
    } catch (err) {
      throw new Error(err);
    }
  }
}

const CANAIS: number[] = [2, 4, 5, 7, 13, 32];
