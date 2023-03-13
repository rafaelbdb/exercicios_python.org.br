export class BombaCombustivel {
  tipoCombustivel: string;
  valorLitro: number;
  quantidadeCombustivel: number;

  constructor(
    tipoCombustivel: string,
    valorLitro: number,
    quantidadeCombustivel: number,
  ) {
    this.tipoCombustivel = tipoCombustivel;
    this.valorLitro = valorLitro;
    this.quantidadeCombustivel = quantidadeCombustivel;
  }

  alterarValor(novoValor: number): number {
    try {
      const ORIGINAL = this.valorLitro;
      let diferenca = parseFloat((novoValor - ORIGINAL).toFixed(2));
      this.valorLitro = novoValor;
      return diferenca;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  alterarCombustivel(novoTipo: string): string {
    try {
      const ORIGINAL = this.tipoCombustivel;
      this.tipoCombustivel = novoTipo;
      return `Combustível alterado de ${ORIGINAL} para ${this.tipoCombustivel}.`;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  alterarQuantidadeCombustivel(qtd: number): number {
    try {
      if (this.quantidadeCombustivel - qtd >= 0) {
        this.quantidadeCombustivel -= qtd;
      }
      return this.quantidadeCombustivel;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  abastecerPorValor(valor: number): number {
    try {
      let litrosAbastecidos: number = parseFloat(
        (valor / this.valorLitro).toFixed(2),
      );
      this.alterarQuantidadeCombustivel(litrosAbastecidos);
      return litrosAbastecidos;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  abastecerPorLitro(litros: number): number {
    try {
      let preco: number = parseFloat((litros * this.valorLitro).toFixed(2));
      this.alterarQuantidadeCombustivel(litros);
      return preco;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
