export class ContaDeInvestimentos {
  numero: number;
  nome: string;
  saldo: number;
  taxaJuros: number;

  constructor(
    numero: number,
    nome: string,
    saldo: number = 0,
    taxaJuros: number = 0,
  ) {
    try {
      this.numero = numero;
      this.nome = nome;
      this.saldo = saldo;
      this.taxaJuros = taxaJuros;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  alterarNome(novoNome: string): string {
    try {
      this.nome = novoNome;
      return this.nome;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  deposito(valor: number): number {
    try {
      this.saldo += valor;
      return this.saldo;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  saque(valor: number): number {
    try {
      if (this.saldo >= valor) {
        this.saldo -= valor;
      }
      return this.saldo;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  adicioneJuros(vezes: number): number {
    try {
      for (let i = 0; i < vezes; i++) {
        this.saldo += parseFloat(
          (this.saldo * (this.taxaJuros / 100)).toFixed(2),
        );
      }
      return this.saldo;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
