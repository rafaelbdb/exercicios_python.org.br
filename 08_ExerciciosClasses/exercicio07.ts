// Classe Bichinho Virtual:
// Crie uma classe que modele um Tamagotchi (Bichinho Eletrônico):

// Atributos: Nome, Fome, Saúde e Idade.
// Métodos: Alterar Nome, Fome, Saúde e Idade;
// Retornar Nome, Fome, Saúde e Idade

// Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi, este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então não devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a qualquer momento.

export class Tamagotchi {
  nome: string;
  fome: boolean;
  saude: number;
  idade: number;

  constructor(
    nome: string,
    fome: boolean = false,
    saude: number = 100,
    idade: number = 0,
  ) {
    try {
      this.nome = nome;
      this.fome = fome;
      this.saude = saude;
      this.idade = idade;
    } catch (err) {
      throw new Error(err);
    }
  }

  alterarNome(nome: string): string {
    try {
      this.nome = nome;
      return this.retornarNome();
    } catch (err) {
      throw new Error(err);
    }
  }

  alterarFome(fome: boolean): boolean {
    try {
      this.fome = fome;
      this.alterarSaude(this.fome ? -20 : +20);
      return this.retornarFome();
    } catch (err) {
      throw new Error(err);
    }
  }

  alterarSaude(saude: number): number {
    try {
      this.saude += saude;
      return this.retornarSaude();
    } catch (err) {
      throw new Error(err);
    }
  }

  alterarIdade(): number {
    try {
      this.idade++;
      this.alterarSaude(-5);
      return this.retornarIdade();
    } catch (err) {
      throw new Error(err);
    }
  }

  retornarNome(): string {
    try {
      return this.nome;
    } catch (err) {
      throw new Error(err);
    }
  }
  retornarFome(): boolean {
    try {
      return this.fome;
    } catch (err) {
      throw new Error(err);
    }
  }
  retornarSaude(): number {
    try {
      return this.saude;
    } catch (err) {
      throw new Error(err);
    }
  }
  retornarIdade(): number {
    try {
      return this.idade;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export function verificaHumor(bicho: Tamagotchi): string {
  const SAUDE = bicho.retornarSaude();
  const FOME = bicho.retornarFome();
  let humor = 'Feliz';

  if (SAUDE < 75 && SAUDE >= 50) {
    humor = FOME ? 'Triste' : 'De boa';
  } else if (SAUDE < 50 && SAUDE >= 25) {
    humor = FOME ? 'Puto' : 'Triste';
  } else if (SAUDE < 25) {
    humor = FOME ? 'Morto' : 'Puto';
  }

  return humor;
}
