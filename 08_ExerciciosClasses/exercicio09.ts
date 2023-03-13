export class Ponto {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    try {
      this.x = x;
      this.y = y;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  imprimeValores(): { x: number; y: number } {
    try {
      return { x: this.x, y: this.y };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export class Retangulo {
  vertice: Ponto;
  largura: number;
  altura: number;

  constructor(vertice: Ponto, largura: number, altura: number) {
    try {
      this.vertice = vertice;
      this.largura = largura;
      this.altura = altura;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  encontrarCentro(): Ponto {
    try {
      return new Ponto(
        this.largura / 2 + this.vertice.x,
        this.altura / 2 + this.vertice.y,
      );
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
