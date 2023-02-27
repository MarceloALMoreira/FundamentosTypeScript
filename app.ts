//Criando um Banking

//Nome, AccountNumber

//Depositar, Sacar

//criando a class

class Account {
    name: string | undefined
    accountNumber: number | undefined

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    // criando as funções

    deposit = () => {
        console.log('Voce Depositou R$'  )
    }

    withdraw = () => {
        console.log('Você sacou R$')
    }
}

const newAccount : Account =  new Account('Fulano', 1)
console.log(newAccount)



const account: Account = new Account('João', 20)
account.deposit() 
 