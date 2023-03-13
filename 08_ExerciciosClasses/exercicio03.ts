// Classe Retangulo: Crie uma classe que modele um retangulo:

// Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// Métodos: Mudar valor dos lados, Retornar valor dos lados, calcular Área e calcular Perímetro;
// Crie um programa que utilize esta classe.
// Ele deve pedir ao usuário que informe as medidades de um local.
// Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés necessárias para o local.

export class Retangulo {
  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    try {
      this.base = base;
      this.altura = altura;
    } catch (error) {
      throw new Error(error);
    }
  }

  retornarValorLados(): string {
    try {
      return `Base: ${this.base}\nAltura: ${this.altura}`;
    } catch (error) {
      throw new Error(error);
    }
  }

  mudarValorLados(novaBase: number, novaAltura: number): string {
    try {
      if (novaBase > 0) {
        this.base = novaBase;
      }
      if (novaAltura > 0) {
        this.altura = novaAltura;
      }
      return `Mudou lados para:\n${this.retornarValorLados()}`;
    } catch (error) {
      throw new Error(error);
    }
  }

  calcularArea(): number {
    try {
      return this.base * this.altura;
    } catch (error) {
      throw new Error(error);
    }
  }

  calcularPerimetro(): number {
    try {
      return (this.base + this.altura) * 2;
    } catch (error) {
      throw new Error(error);
    }
  }

  calcularQtdPisos(areaLocal: number): number {
    try {
      return Math.ceil(areaLocal / this.calcularArea());
    } catch (error) {
      throw new Error(error);
    }
  }
}
