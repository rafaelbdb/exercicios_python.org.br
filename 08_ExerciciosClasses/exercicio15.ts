export class TamagotchiPlus {
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
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  alterarNome(nome: string): string {
    try {
      this.nome = nome;
      return this.retornarNome();
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  alterarFome(fome: boolean): boolean {
    try {
      this.fome = fome;
      this.alterarSaude(this.fome ? -20 : +20);
      return this.retornarFome();
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  alterarSaude(saude: number): number {
    try {
      this.saude += saude;
      return this.retornarSaude();
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  alterarIdade(): number {
    try {
      this.idade++;
      this.alterarSaude(-5);
      return this.retornarIdade();
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  retornarNome(): string {
    try {
      return this.nome;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  retornarFome(): boolean {
    try {
      return this.fome;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  retornarSaude(): number {
    try {
      return this.saude;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  retornarIdade(): number {
    try {
      return this.idade;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export function verificaHumor(bicho: TamagotchiPlus): string {
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
