//Criando um Baking

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
}

// criando as funções

deposit = () => {
    console.log('Voce Depositou R$')
}

withdraw = () => {
    console.log('Você sacou R$')
}