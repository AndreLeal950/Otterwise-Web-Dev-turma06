const numbers = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]

const troca = numbers => {
  numbers.forEach((number, index) => {
    if (number % 2) {
      numbers[index] = "X"
    }
  })
}
troca(numbers)
console.log(numbers)