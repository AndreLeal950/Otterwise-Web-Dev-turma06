/* 1 - [REFATORAÇÃO] Pegue um valor de entrada e calcule o menor número de
notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas
consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a
relação de notas necessárias.
2 */

const totalNotas = (value) => {

    console.log(value);
    
    let notas100 = parseInt(value / 100);
    value = value % 100;
    let notas50 = parseInt(value / 50);
    value = value % 50;
    let notas20 = parseInt(value / 20);
    value = value % 20;
    let notas10 = parseInt(value / 10);
    value = value % 10;
    let notas5 = parseInt(value / 5);
    value = value % 5;
    let notas2 = parseInt(value / 2);
    value = value % 2;
    let notas1 = parseInt(value / 1);
    value = value % 1;
    
    console.log(`${notas100} nota (s) de R$ 100,00`);
    console.log(`${notas50} nota (s) de R$ 50,00`);
    console.log(`${notas20} nota (s) de R$ 20,00`);
    console.log(`${notas10} nota (s) de R$ 10,00`);
    console.log(`${notas5} nota (s) de R$ 5,00`);
    console.log(`${notas2} nota (s) de R$ 2,00`);
    console.log(`${notas1} nota (s) de R$ 1,00`);

};

totalNotas(576);


    
   
    
    
   

   

    

    
    
  
    



