class User {
    name: string = ''
    age: number = 32
    profissao?: string


    // contrutor 
    constructor(name: string, age: number, profissao?: string) {
        this.name = name
        this.age = age
        this.profissao = profissao
    }

    showName = () => {
        console.log(this.name)
    }
}


// uma instancia da class 'User'
const user = new User('Jorge', 50)
user.showName()