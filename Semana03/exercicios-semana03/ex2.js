/* 2 - [REFATORAÇÃO] Uma pessoa desenvolvedora recebe frequentemente
propostas de trabalho pela CLT(Consolidação das Leis Trabalhistas) e pela PJ
(Pessoa Jurídica). Considerando que o trabalho como CLT envolve férias, 13°
salário, R$ 700 de benefício e 8% mensal referente ao FGTS. Faça um programa
que receba como entrada os dois valores mensais oferecidos e tome a decisão
informando qual proposta a pessoa deve aceitar. */

const propTrab = (prop1, prop2) => {
    let clt = (prop1 * 8/100) + prop1 + 700 + (prop1 * 2) + (prop1 * 2) + 30/100;
    let pj = prop2
    console.log('De acordo com os valores abaixo:')
    console.log(`CLT - R$ ${clt}`)
    console.log(`PJ - R$ ${pj}`)
    if( clt > pj){
        console.log('A proposta aceita foi pela CLT.');
    }else{
        console.log('A proposta aceita foi como PJ.')
    }
   
}
propTrab(2000, 8500)
