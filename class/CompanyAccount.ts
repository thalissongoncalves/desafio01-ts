import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  private balanceDue: number = 0

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): string => {
    if (this.validateStatus()) {
      this.deposit(value)
      this.balanceDue += value
      return `Empréstimo feito com sucesso! Seu novo saldo é: R$${this.getBalance()}. Seu saldo devedor é: R$${this.balanceDue}.`
    }

    return `Insira um valor válido.`
  }
}
