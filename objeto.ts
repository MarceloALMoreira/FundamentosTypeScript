import { json } from "stream/consumers"

interface Pessoa {
    nome: String,
    idade: Number,
    profissao?: String
}



const pessoa: Pessoa = {
    nome: 'Fulano',
    idade: 40,
}

const outraPessoa: Pessoa = {
    nome: 'Paulo',
    idade: 25,
    profissao: 'Desenvolvedor'
}

const arrayPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
]

console.log(arrayPessoa)