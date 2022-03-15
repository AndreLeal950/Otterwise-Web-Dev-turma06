/* 15 - Elabore um programa que receba três valores como entrada e mostre eles
em ordem crescente no console. */


let valueOne = 80
let valueTwo = 90
let valueTree = 85

console.log("Os valores de entrada são: " + valueOne + ", "+ valueTwo + ", "+ valueTree)

if(valueOne < valueTwo && valueTwo < valueTree){

    console.log("1 - A ordem crescente deles é: " + valueOne + ", "+ valueTwo + ", "+ valueTree)

}else if(valueOne > valueTwo && valueTwo > valueTree){

    console.log("2 - A ordem crescente deles é: " + valueTree + ", "+ valueTwo + ", "+ valueOne)
}else if(valueOne < valueTwo && valueTwo > valueTree && valueOne > valueTree){

    console.log("3 - A ordem crescente deles é: " + valueTree + ", "+ valueOne + ", "+ valueTwo)
}else if(valueOne < valueTwo && valueTwo > valueTree && valueOne < valueTree){

    console.log("4 - A ordem crescente deles é: " + valueOne + ", "+ valueTree + ", "+ valueTwo)
}else if(valueOne > valueTwo && valueTwo < valueTree && valueTree < valueOne){

    console.log("5 - A ordem crescente deles é: " + valueTwo + ", "+ valueTree + ", "+ valueOne)
}else{

    console.log("6 - A ordem crescente deles é: " + valueTwo + ", "+ valueOne + ", "+ valueTree)
}   