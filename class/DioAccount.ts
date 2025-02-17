export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  deposit = (value: number): string => {
    if(this.validateStatus()){
      this.balance += value
      return `Depósito feito com sucesso! Seu novo saldo é: R$${this.balance}.`
    }

    return `Valor inserido inválido.`
  }

  withdraw = (value: number): string => {
    if(this.validateStatus() && this.balance >= value){
      this.balance -= value
      return `Você sacou: R$${value}. Seu novo saldo é: R$${this.balance}.`
    }

    return `Saldo insuficiente. Seu saldo é: R$${this.balance}.`
  }

  protected getBalance = (): number => {
    return this.balance
  }

  validateStatus = (): boolean => {
    if (!this.status) {
      throw new Error('Conta inválida')
    }

    return true
  }
}
