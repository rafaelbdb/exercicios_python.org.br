// Classe Pessoa: Crie uma classe que modele uma pessoa:

// Atributos: nome, idade, peso e altura
// Métodos: Envelhercer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos, ela deve crescer 0,5 cm.

export class Pessoa {
  nome: string;
  idade: number;
  peso: number;
  altura: number;

  constructor(nome: string, idade: number, peso: number, altura: number) {
    try {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
    } catch (err) {
      throw new Error(err);
    }
  }

  envelhecer(): number {
    try {
      this.idade++;
      if (this.idade < 21) {
        this.crescer(0.5);
      }
      return this.idade;
    } catch (err) {
      throw new Error(err);
    }
  }

  engordar(aumento: number): number {
    try {
      this.peso += aumento;
      return this.peso;
    } catch (err) {
      throw new Error(err);
    }
  }

  emagrecer(reducao: number): number {
    try {
      this.peso -= reducao;
      return this.peso;
    } catch (err) {
      throw new Error(err);
    }
  }

  crescer(aumento: number): number {
    try {
      this.altura += aumento;
      return this.altura;
    } catch (err) {
      throw new Error(err);
    }
  }
}
