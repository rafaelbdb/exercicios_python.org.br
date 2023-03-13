// Classe Macaco: Desenvolva uma classe Macaco, que possua os atributos nome e bucho (estomago) e pelo menos os métodos comer(), verBucho() e digerir().
// Faça um programa ou teste interativamente, criando pelo menos dois macacos, alimentando-os com pelo menos 3 alimentos diferentes e verificando o conteúdo do estomago a cada refeição.
// Experimente fazer com que um macaco coma o outro.
// É possível criar um macaco canibal?

export class Macaco {
  nome: string;
  bucho: string[];

  constructor(nome: string, bucho: string[] = []) {
    try {
      this.nome = nome;
      this.bucho = bucho;
    } catch (error) {
      throw new Error(error);
    }
  }

  comer(comida: string[]): string[] {
    try {
      this.bucho.push(...comida);
      return this.verBucho();
    } catch (error) {
      throw new Error(error);
    }
  }

  verBucho(): string[] {
    try {
      return this.bucho;
    } catch (error) {
      throw new Error(error);
    }
  }
}
