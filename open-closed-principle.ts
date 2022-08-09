/**
 * 1. Calcular imposto
 */

// ruim
class CalcTaxes {
  public calcTaxes(type: string, value: number): number {
    if (type === 'ICMS') {
      return value * 0.1;
    }

    if (type === 'IOF') {
      return value * 0.25;
    }

    return value;
  }
}

// bom

interface Imposto {
  calc(value: number): number;
}

class ICMS {
  public calc(value: number): number {
    return value * 0.1;
  }
}

class IOF {
  public calc(value: number): number {
    return value * 0.25;
  }
}

class CalculadorDeImpostos {
  public calcularImposto(imposto: Imposto, value: number): number {
    return imposto.calc(value);
  }
}

const calculadora = new CalculadorDeImpostos()

calculadora.calcularImposto(new ICMS(), 200)
calculadora.calcularImposto(new IOF(), 250)