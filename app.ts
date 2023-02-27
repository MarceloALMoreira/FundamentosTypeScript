//Criando um Banking

//Nome, AccountNumber

//Depositar, Sacar

//criando a class

abstract class Account {
    name: string
    accountNumber: number
    balance: number = 0

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = () => {
        console.log('Voce Depositou R$: X')
    }
    withdraw = () => {
        console.log('Voce Sacou R$: Y')
    }
    getBalance = () => {
        console.log(this.balance)
    }
}


class PeopleAccount extends Account {
    doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber)
        this.doc_id = doc_id
    }
}
class CompanyAccount extends Account {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = () => {
        console.log('Voce pegou um empréstimo')
    }

}
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Mar', 10)
console.log(peopleAccount)

const companuAccount: CompanyAccount = new CompanyAccount('Dio', 20)
console.log(companuAccount)


// const adminAccount: Account = new Account('Marcelo', 2)
// console.log(adminAccount)

// const account: Account = new Account('João', 12)
// console.log(account)

