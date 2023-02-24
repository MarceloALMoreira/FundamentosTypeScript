const array: Array<number> = [1, 2, 3, 4]

// const buscaNum = array.find(num => num > 5)
// console.log(buscaNum)

array.forEach(num => {
    if (num > 2) {
        console.log(num)
    }
})