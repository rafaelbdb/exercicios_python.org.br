export class Funcionario {
  nome: string;
  salario: number;

  constructor(nome: string, salario: number) {
    try {
      this.nome = nome;
      this.salario = salario;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  mostraNome(): string {
    try {
      return this.nome;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  mostraSalario(): number {
    try {
      return this.salario;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
