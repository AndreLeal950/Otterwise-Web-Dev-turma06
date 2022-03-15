/* 25 - A mesma pessoa do exercício anterior quer saber o quanto ela irá pagar de
imposto de renda em cada uma das propostas que ela recebe. Tendo por base a
tabela abaixo realize o cálculo do imposto de renda e informe a pessoa para
ambas as propostas.
OBS: Você irá utilizar toFixed(), procure à respeito. */
let trabalhoClt = 800;
let beneficio = 700;
let ferias =  trabalhoClt + 30/100 * trabalhoClt;
let fgtsClt = 8/100 * trabalhoClt;
let decimoTerceiro = parseFloat(trabalhoClt / 12).toFixed(2);
let salarioMesalClt = (trabalhoClt + beneficio + ferias) - fgtsClt;
let trabalhoPj = 2500;
let fgtsPJ = 8/100 * trabalhoPj;
let salarioMesalPJ = trabalhoPj - fgtsPJ;
let rendimentoAnualClt = salarioMesalClt * 12;
let rendimentoAnualPJ = salarioMesalPJ * 12;

console.log(rendimentoAnualClt, rendimentoAnualPJ);

if(rendimentoAnualClt && rendimentoAnualPJ > 21453.24 && rendimentoAnualClt <= 32151.48 
       && rendimentoAnualPJ <= 32151.48 ){
       let valorimpCLT = 7.5/100 * rendimentoAnualClt;
       let valorimpPJ = 7.5/100 * rendimentoAnualPJ;
       console.log("O valor da alícota de 7.5 % sobre o rendimento anual de: R$ "+ rendimentoAnualClt.toFixed(2) + " pela CLT é: R$ " + valorimpCLT.toFixed(2));
       console.log("O valor da alícota de 7.5 % sobre o rendimento anual de: R$ " + rendimentoAnualPJ.toFixed(2) + " como PJ é: R$ " + valorimpPJ.toFixed(2));
   }else if(rendimentoAnualClt && rendimentoAnualPJ > 32151.48 && rendimentoAnualClt <= 42869.16 
       && rendimentoAnualPJ <= 42869.16){
       let valorimpCLT = 15/100 * rendimentoAnualClt;
       let valorimpPJ = 15/100 * rendimentoAnualPJ;
       console.log("O valor da alícota de 15 % sobre o rendimento anual de: R$ "+ rendimentoAnualClt.toFixed(2) + " pela CLT é: R$ " + valorimpCLT.toFixed(2));
       console.log("O valor da alícota de 15 % sobre o rendimento anual de: R$ " + rendimentoAnualPJ.toFixed(2) + " como PJ é: R$ " + valorimpPJ.toFixed(2));
    }else if(rendimentoAnualClt && rendimentoAnualPJ > 42869.16 && rendimentoAnualClt <= 53565.72
        && rendimentoAnualPJ <= 53565.72){
       let valorimpCLT = 22.5/100 * rendimentoAnualClt;
       let valorimpPJ = 22.5/100 * rendimentoAnualPJ;
       console.log("O valor da alícota de 22.5 % sobre o rendimento anual de: R$ "+ rendimentoAnualClt.toFixed(2) + " pela CLT é: R$ " + valorimpCLT.toFixed(2));
       console.log("O valor da alícota de 22.5 % sobre o rendimento anual de: R$ " + rendimentoAnualPJ.toFixed(2) + " como PJ é: R$ " + valorimpPJ.toFixed(2));
   

        }else if(rendimentoAnualClt && rendimentoAnualPJ > 53565.72){
            let valorimpCLT = 27.5/100 * rendimentoAnualClt;
            let valorimpPJ = 27.5/100 * rendimentoAnualPJ;
            console.log("O valor da alícota de 27.5 % sobre o rendimento anual de: R$ "+ rendimentoAnualClt.toFixed(2) + " pela CLT é: R$ " + valorimpCLT.toFixed(2));
            console.log("O valor da alícota de 27.5 % sobre o rendimento anual de: R$ " + rendimentoAnualPJ.toFixed(2) + " como PJ é: R$ " + valorimpPJ.toFixed(2));
        }