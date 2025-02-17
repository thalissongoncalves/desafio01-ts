import { AdminAccount } from './class/AdminAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount.deposit(100))
console.log(peopleAccount.withdraw(50))
console.log(peopleAccount.getBalance())
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount.deposit(100))
console.log(companyAccount.withdraw(50))
console.log(companyAccount.getBalance())
console.log(companyAccount.getLoan(10000))
const adminAccount: AdminAccount = new AdminAccount('Admin', 100)
console.log(adminAccount.deposit(100))
console.log(adminAccount.withdraw(50))
console.log(adminAccount.getBalance())
console.log(adminAccount.adminDeposit(200))