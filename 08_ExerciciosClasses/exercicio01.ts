// Classe Bola: Crie uma classe que modele uma bola:

// Atributos: Cor, circunferência, material
// Métodos: trocaCor e mostraCor

export class Bola {
  cor: string;
  circunferencia: number;
  material: string;

  constructor(cor: string, circunferencia: number, material: string) {
    try {
      this.cor = cor;
      this.circunferencia = circunferencia;
      this.material = material;
    } catch (error) {
      throw new Error(error);
    }
  }

  trocaCor(novaCor: string): string {
    try {
      this.cor = novaCor;
      return `Trocou a cor para: ${this.cor}`;
    } catch (error) {
      throw new Error(error);
    }
  }

  mostraCor(): string {
    try {
      return `Mostrou a cor: ${this.cor}`;
    } catch (error) {
      throw new Error(error);
    }
  }
}
