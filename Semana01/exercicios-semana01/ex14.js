/* 14 - Faça um programa que receba de entrada três valores e mostre no console
a soma dos dois maiores. */

let valueOne = 5;
let valueTwo = 18;
let valueTree = 15;

if(valueOne > valueTwo && valueTwo > valueTree){
    console.log(" condição um : " +valueOne + " e " + valueTwo + " São os maiores números" )
}else if(valueTwo > valueTree && valueTree> valueOne){
    console.log(" condição dois :" +valueTwo + " e " + valueTree + " São os maiores" )    
}else{
    console.log(" condição três :" +valueOne + " e " + valueTree + " São os maiores números" ) 
    }
