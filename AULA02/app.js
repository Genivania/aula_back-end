/**********************************************************************************************************************
 * Objetivo: Realizar a média escolar dos alunos
 * Data: 27/01/2023
 * Autor: Genivania Macedo
 * Versão: 1.0
 * *********************************************************************************************************************/ 

 console.log('Sistema de Cálculo de Médias Escolares');

//Import da biblioteca para a entrada de dados
 var readline = require('readline');
const { parse } = require('querystring');
const { Console } = require('console');

//Criamos um objeto para manipular a entrada de dados via teclado
 var entradaDados = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });


/****************************************************************************
                    CONCEITOS SOBRE A CRIAÇÃO DE VARIAVEIS

*var- toda variavel criada como var, tem por objetivo ser um escopo global,
    ou seja, ela poderá ser utilizada em diversos pontos da programação.
    
    
*let- toda variavel criada como let, tem por objetivo ser um escopo local, 
    ou seja, será utilizada somente naquela função

*const- Tem por objetivo criar um espaço em memória para armazenar dados que
    não sofrem mudança
*****************************************************************************/

 //Função de CallBack para retornar o nome do aluno
 entradaDados.question('Digite o nome do aluno: \n', function (nome){

    /*Variavel local para receber o nome do aluno, que 
    vai ser retornado pela função*/
    let nomeAluno = nome;

//Função de CallBack para entrada da Nota1
    entradaDados.question('Digite a nota1: \n', function (nota1){
        //Nota1
        let primeiraNota = nota1;

//Função de CallBack para entrada da Nota2
        entradaDados.question('Digite a nota2: \n', function (nota2){
            //Nota2
            let segundaNota = nota2;

//Função de CallBack para entrada da Nota3          
            entradaDados.question('Digite a nota3: \n', function (nota3){
                //Nota3
                let terceiraNota = nota3;

//Função de CallBack para entrada da Nota4
                entradaDados.question('Digite a nota4: \n', function (nota4){
                    //Nota4
                    let quartaNota = nota4;
                    let media = 0;


//Faz aparecer a junção de tudo no final.
// console.log(nome +  ":" + primeiraNota + "," + segundaNota + "," + terceiraNota + "," + quartaNota)


                /*  
                * Conversão de dados String para numero
                   * parseInt() ou Number.parseInt - converte para inteiro
                   * parseFloat() ou Number.parseFloat - converte para real
                   * Number() - converte para int ou float, conforme a  entrada do dado.
                   
                   
                * Operadores de comparação 
                   * == (Verifica a igualdade de conteudo)
                   * != (Verifica a diferença de conteudo)
                   * <  (Verifica o menor valor)
                   * >  (Verifica o maior valor)
                   * <= (Verifica o menor ou igual valor)
                   * >= (Verifica o maior ou igual valor)
                   * === (Verificar a igualdade de conteudo e validar a tipagem de dados)
                   * EX: 0 == 0         V
                         0 == ‘0’       V
                         0 === ‘0’      F
                   
                *Operadores Lógicos
                    * OU       || (pipe)     OR
                    * E        &&            AND
                    * Negaçaõ  !             NOT
                    * 
                    * ORDEM DE EXECUÇÃO DOS OPERADORES LÓGICOS
                    * 0º ()
                    * 1º Negação
                    * 2º E
                    * 3ºOU
                    * 
                */
            //Validação para tratar entradas vazias
                   if (primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '')
                   {
                       console.log('ERRO: É necessário digitar algum valor na entrada.');
                       //Validação de enrada de dados não numéricos
                   }else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota))
                   {
                        console.log('ERRO: É necessário que todos os digitos sejam números.');
                        //Validação de entrada de valores entre 0 e 10
                   }else if (primeiraNota < 0 || primeiraNota > 10 || segundaNota < 0 || segundaNota > 10 || terceiraNota < 0 || terceiraNota > 10 || quartaNota < 0 || quartaNota > 10)
                   {
                       console.log(' ERRO: O sistema só aceita notas entre 0 e 10');
                   }
                   /*else if (primeiraNota > '10' || segundaNota > '10' || terceiraNota > '10' || quartaNota > '10')
                   {
                        console.log('ERRO: Digite apenas numeros menor que 10')
                   }else if (primeiraNota < '0' || segundaNota < '0' || terceiraNota < '0' || quartaNota < '0')
                   {
                        console.log('ERRO: Digite apenas numeros maior que 0')}*/
                    else{
                    media = ( Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota))/4;
                    console.log(media);
                   }

            //Validar para aprovado ou reprovado
                   if (media >= 7)
                   {
                        console.log('Aluno: APROVADO');
                   }else
                   {
                       console.log('Aluno: REPROVADO');
                   }
                        console.log('Média final: ' + media.toFixed(1));
                

                });
            });
        });
    });
 });