/* 21 - Crie uma função chamada calculate que possui três parâmetros. O primeiro
é uma string e os outros dois, números. A string será uma das seguintes opções:
"soma", "subtrai", "multiplica", "divide". A função calculate deve retornar o
resultado da operação (definida pela string) entre os dois números. */

function calculate(x, y, z){
    if(x, y, z){
        return ("Soma (+)" +'\n'+ ("Y = " + y + '\n'+ "Z = " +z) + '\n'+ "----------"+'\n'+
                "Subtração (-)" +'\n'+ ("Y = " + y + '\n'+ "Z = " + z) + '\n'+ "----------"+'\n'+
                "Multiplicação (*)" +'\n'+ ("Y = " + y + '\n'+ "Z = " +z) + '\n'+ "----------"+'\n' +
                "Divisão (/)" +'\n'+ ("Y = " + y + '\n'+ "Z = " + z) + '\n'+ "----------"+'\n'+
                ("Soma entre: "+ y + " e " + z + '\n' + (y + z)) + '\n'+"----------" +'\n'+ 
                "Subtração entre: "+ y + " e " + z  +'\n'+ (y - z) + '\n' + "----------" +'\n'+
                "Multplicação entre: "+ y + " e " + z  + '\n' + (y * z)) + '\n'+"----------" +'\n'+
                "Divisão entre: "+ y + " e " + z  +'\n'+ (y / z)
        
    }
        

}
console.log(calculate( "", 4, 2))