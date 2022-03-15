/* 23 - Crie uma função que recebe como argumento um valor em segundos,
calcula e retorne uma string formatada HH:MM:SS (horas:minutos:segundos) .
OBS: Você irá utilizar parseInt(), pesquise a respeito. */

function calcTime(s){
    hora = parseInt(s / 3600);
    minuto = parseInt((s % 3600) / 60);
    segundo = parseInt((s % 3600) % 60);
    formatado = hora+":"+minuto+":"+segundo;
    return formatado;
  }
  console.log(calcTime(3673));