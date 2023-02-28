export abstract class DioAccount {
    private name: string
    accountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string):void => {
        this.name = name
        console.log('Name Alterado com Sucesso')
    }

    getName = (): string => {
        return this.name
    }

    deposit = (): void => {
        if (this.validateStatus()) {
            console.log('Voce Depositou R$: X')
        }
    }

    withdraw = (): void => {
        console.log('Voce Sacou R$: Y')
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    private validateStatus = ():boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error('Conta Inativa')
    }
}
