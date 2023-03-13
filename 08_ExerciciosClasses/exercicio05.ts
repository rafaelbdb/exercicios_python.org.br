// Classe Conta Corrente: Crie uma classe para implementar uma conta corrente.
// A classe deve possuir os seguintes atributos: número da conta, nome do correntista e saldo.
// Os métodos são os seguintes: alterarNome, depósito e saque;
// No construtor, saldo é opcional, com valor default zero e os demais atributos são obrigatórios.

export class ContaCorrente {
  numero: number;
  nome: string;
  saldo: number;

  constructor(numero: number, nome: string, saldo: number = 0) {
    try {
      this.numero = numero;
      this.nome = nome;
      this.saldo = saldo;
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
}
