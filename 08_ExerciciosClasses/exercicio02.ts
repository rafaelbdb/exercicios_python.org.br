// Classe Quadrado: Crie uma classe que modele um quadrado:

// Atributos: Tamanho do lado
// Métodos: Mudar valor do Lado, Retornar valor do Lado e calcular Área;

export class Quadrado {
  lado: number;

  constructor(lado: number) {
    try {
      this.lado = lado;
    } catch (error) {
      throw new Error(error);
    }
  }

  mudarValorLado(novoLado: number): string {
    try {
      this.lado = novoLado;
      return `Mudou o valor do lado para: ${this.retornarValorLado()}`;
    } catch (error) {
      throw new Error(error);
    }
  }

  retornarValorLado(): number {
    try {
      return this.lado;
    } catch (error) {
      throw new Error(error);
    }
  }

  calcularArea(): number {
    try {
      return this.lado * this.lado;
    } catch (error) {
      throw new Error(error);
    }
  }
}
