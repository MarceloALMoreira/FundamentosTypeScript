// const num: number = 16


// if (num > 15) {
//     console.log('Num maior que 15')
// } else if (num === 15) {
//     console.log('Num igual a  15')
// } else {
//     console.log('Num Menor que 15')
// }



//objeto literal

const typeUser = {
    admin: 'Seja bem vindo admin',
    student: 'Bem vindo Estudante',
    viewer: 'Você pode visualizar todas as Aulas'
}

function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = 'admin'

validateUser(usuario)