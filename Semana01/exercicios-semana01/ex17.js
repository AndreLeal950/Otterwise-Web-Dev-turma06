/* 17 - Faça um programa que receberá a hora inicial e a hora final de um jogo. A
seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um
dia e terminar em outro, tendo uma duração máxima de 24 horas.
Ex: Início: 22 - Término: 06 - Tempo de Duração: 8 horas */

let initialHour = 8;
let finalHour = 8;
let hourTotal = (finalHour - initialHour)

    if(initialHour < finalHour){
        console.log("Início: " + initialHour + " - " + "Término: " + finalHour + " - " + "Tempo de Duração: "+ hourTotal + " horas")
    }else if(initialHour > finalHour){
        console.log("Início: " + initialHour + " - " + "Término: " + finalHour + " - " + "Tempo de Duração: "+ (hourTotal + 12) + " horas")
    }else{
        console.log("Início: " + initialHour + " - " + "Término: " + finalHour + " - " + "Tempo de Duração: "+ (hourTotal + 24) + " horas")
    }
