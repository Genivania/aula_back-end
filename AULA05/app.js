/**********************************************************************************************************************
 * Objetivo: Realizar cálculos de uma tabuada tendo duas entardas e o contador
 * Data: 09/02/2023
 * Autor: Genivania Macedo
 * Versão: 1.0
 * *********************************************************************************************************************/

var matematica = require('./modulo/tabuada.js');

//Import da biblioteca para a entrada de dados
var readline = require('readline');


//Criar um objeto para receber os dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Entrada de dados tabuada
entradaDados.question('Tabuada: \n', function (tabuada){

    //Entrada de dados maximo contador
    entradaDados.question('MaxContador: \n', function (maxMultiplicador){

        let resultado;

        if( tabuada == '' || maxMultiplicador == ''){
            console.log('ERRO: Não é possível calcular sem preencher todos os dados!')
            entradaDados.close(); //Fecha o objeto de entrada de dados (emcerra o programa)
        
        }else if (isNaN(tabuada) || isNaN(maxMultiplicador)){
            console.log('ERRO: Não é possível calcular sem a entrada de valores numericos!')
            entradaDados.close(); //Fecha o objeto de entrada de dados (emcerra o programa)
        
        }else {
            resultado = matematica.calcularTabuada(tabuada , maxMultiplicador);

            if (resultado === false )     
                entradaDados.close();
        
        else
        console.log(resultado)
        }
    });
});







