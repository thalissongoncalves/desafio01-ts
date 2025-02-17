import { DioAccount } from "./DioAccount";

export class AdminAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  adminDeposit = (value: number): string => {
    if (this.validateStatus()) {
      this.deposit(value + 10)
      return `Valor depositado para o administrador de: R$${value + 10}. O novo saldo do administrador é: R$${this.getBalance()}.`
    }

    return `Valor inserido inválido.`
  }
}