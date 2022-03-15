/* 26 - Uma pessoa desenvolvedora resolveu trabalhar como freelancer e quer
conseguir colocar o preço nos trabalhos que ela irá pegar. As informações que
ela terá como entrada do seu programa são: O valor mensal do salário que ela
quer ter; Ela irá trabalhar 160 horas no mês; O custo que ela tem com impostos
e demais despesas empresariais é o valor do salário mensal dela, ou seja, ela irá
precisar do dobro do valor que ela pretende adquirir como salário para
conseguir pagar os seus impostos e ficar com o seu salário. Levando em
consideração que ela estipula o preço por horas que ela irá utilizar para concluir
o projeto, faça um programa que tenha como entrada variável a quantidade de
horas e como saída no console o preço que custará esse projeto. */

let custosMesal = 4500;
let salarioMensal = custosMesal * 2
let qtdHorasMes = 160;
let qtdDias = 6;
let qtdHorasDia = (qtdHorasMes / 30).toFixed(2)
let valorHoras = salarioMensal / qtdHorasMes
let valorProjeto = (valorHoras * qtdHorasDia * qtdDias).toFixed(2)


console.log("Esse projeto custará R$ " + valorProjeto);
