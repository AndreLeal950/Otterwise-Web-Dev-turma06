/* 24 - Uma pessoa desenvolvedora recebe frequentemente propostas de trabalho
pela CLT(Consolidação das Leis Trabalhistas) e pela PJ (Pessoa Jurídica).
Considerando que o trabalho como CLT envolve férias, 13° salário, R$ 700 de
benefício e 8% mensal referente ao FGTS. Faça um programa que receba como
entrada os dois valores mensais oferecidos e tome a decisão informando qual
proposta a pessoa deve aceitar.
OBS: Você irá utilizar toFixed(), procure à respeito. */

let trabalhoClt = 2000;
let beneficio = 700;
let ferias =  trabalhoClt + 30/100 * trabalhoClt;
let fgtsClt = 8/100 * trabalhoClt;
let decimoTerceiro = parseFloat(trabalhoClt / 12).toFixed(2);
let salarioMesalClt = (trabalhoClt + beneficio + ferias) - fgtsClt;
let trabalhoPj = 4500;
let fgtsPJ = 8/100 * trabalhoPj;
let salarioMesalPJ = trabalhoPj - fgtsPJ;

if(salarioMesalClt > trabalhoPj){
    console.log("A proposta aceita foi o Trabalho CLT")
    console.log("com salário de R$ " + salarioMesalClt.toFixed(2))
}else {
    console.log("A proposta aceita foi o Trabalho PJ")
    console.log("com salário de R$ " + trabalhoPj.toFixed(2))
}