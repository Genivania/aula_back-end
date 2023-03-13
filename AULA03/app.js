/**********************************************************************************************************************
 * Objetivo: Criar uma calculadora
 * Data: 30/01/2023
 * Autor: Genivania Macedo
 * Versão: 1.0
 * *********************************************************************************************************************/ 

 console.log('Calculadora');

//Import da biblioteca para a entrada de dados
var readline = require('readline');
const { parse } = require('querystring');
const { Console } = require('console');

//Objeto para manipular a entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//Função de CallBack para retornar o primeiro numero
    entradaDados.question('Digite o primeiro número: \n', function (digito1){

    /*Variavel local para receber o 1º digito, que 
    vai ser retornado pela função*/
        let numero1 = digito1;

//Função de CallBack para retornar o segundo numero
        entradaDados.question('Digite o segundo número: \n', function (digito2){

        /*Variavel local para receber o 2º digito, que 
        vai ser retornado pela função*/
            let numero2 = digito2;

//Função de CallBack para retornar a operação
            entradaDados.question('Digite a operação (+) (-) (/) (*): \n', function (tipoCalculo){

                let operacao = tipoCalculo.toUpperCase();
                let resultado;
//Validação para tratar entradas vazias
            if (operacao == '' || digito1 == '' || digito2 == '')
            {
                console.log('ERRO: Deve preencher todos os campos!');

//Validação de enrada de dados não numéricos
            }else if (isNaN(digito1) || isNaN(digito2)){
                console.log('ERRO: Não pode ter letras!')

// Tratar as operações
            }else{

                if(operação == '+'){
                    resultado = Number(digito1) + Number(digito2);
                }else if(operação == '-'){
                    resultado = Number(digito1) - Number(digito2);
                }else if(operação == '*'){
                    resultado = Number(digito1) * Number(digito2);
                }else if(operação == '/'){
                    resultado = Number(digito1) / Number(digito2);
                }
            }
        });
    });
 });
