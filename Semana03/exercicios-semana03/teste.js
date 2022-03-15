let arrayObject = [
    { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
    { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
    { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
    { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
    { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
    { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
    { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
    ];
let idadeCresc = arrayObject;
let idadeDecresc = arrayObject;
let salarioCresc = arrayObject;
let salarioDecresc = arrayObject;
let senioridadeCresc = arrayObject;
let senioridadeDecresc = arrayObject;

    idadeCresc.sort(function(a, b) {
        if(a.idade < b.idade) {
          return -1;
        } else {
          return true;
        }
        
      });
      idadeDecresc.sort(function(a, b) {
        if(a.idade > b.idade) {
          return -1;
        } else {
          return true;
        }
        
      });
      salarioCresc.sort(function(a, b) {
        if(a.salario > b.salario) {
          return -1;
        } else {
          return true;
        }
        
      });
      salarioDecresc.sort(function(a, b) {
        if(a.salario < b.salario) {
          return -1;
        } else {
          return true;
        }
        
      });
      senioridadeCresc.sort(function(a, b) {
        if(a.senioridade > b.senioridade) {
          return -1;
        } else {
          return true;
        }
        
      });
      senioridadeDecresc.sort(function(a, b) {
        if(a.senioridade < b.senioridade) {
          return -1;
        } else {
          return true;
        }
        
      });
      console.log(idadeCresc);
      console.log(idadeDecresc);
      console.log(salarioCresc);
      console.log(salarioDecresc);
      console.log(senioridadeCresc);
      console.log(senioridadeDecresc);