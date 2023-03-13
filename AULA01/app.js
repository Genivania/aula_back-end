//Comentário em linha 

/*
    Comentário em 
    bloco
*/

//Permite escrever uma mensagem no terminal
console.log('Testando o node.JS');

//Import da biblioteca que faz entrada de dados pelo usuário
var readline = require('readline');

// A função Call back é uma função que quando chamada ela retorna
// o seu conteudo em uma unica instrução, ou seja, em apenas um passo
// na programação

/*Criamos um objeto entradaDados com as referencias do readline
    O objeto de entrada aguarda a digitação do usuário, após a digitação do
    conteudo é acionado um call back para encaminhar os dados para o console.log.
    Esse conteúdo foi encaminhado através do parametro dados da função.
*/
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

//Aciona ele mesmo como função e gera o próprio retorno
entradaDados.question("Digite seu nome: \n", function (dados){

    console.log('Bem vindo,' + dados + ' ao servidor node.JS.')
});

