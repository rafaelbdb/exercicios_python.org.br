export class Carro {
  consumo: number;
  tanque: number;

  constructor(consumo: number) {
    this.consumo = consumo;
    this.tanque = 0;
  }

  adicionarGasolina(litros: number): number {
    try {
      this.tanque += litros;
      return this.obterGasolina();
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  andar(distancia: number): number {
    try {
      let gastou = parseFloat((distancia / this.consumo).toFixed(2));
      this.tanque -= gastou;
      return gastou;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  obterGasolina(): number {
    try {
      return parseFloat(this.tanque.toFixed(2));
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
