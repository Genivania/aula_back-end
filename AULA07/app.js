/*****************************************************************************
 * Objetivo: API para interagir com o banco (GET, POST, DELETE, PUT)
 * Autor: Genivania Macedo
 * Data: 14/04/2023
 * Versão: 1.0
 ****************************************************************************/

/**
    Para realizar  a conexão com Banco e dados iremos utilizar o PRISMA
        npm install prisma --save
        npx prisma
        npx prisma init
        npm install @prisma/client

 */

 //Import das bibliotecas do projeto
 const express = require('express');
 const cors = require('cors');
 const bodyParser = require('bodyParser');
const { request, response } = require('express');


 //Cria o objeto app utilizando a classe do express
const app = express();

app.use((request,require, next)=>{
    //Permissões de origin da requisição
    response.header('Access-Control-Allow-Origin', '*')

    //Permissões de metodos que serao utilizados na api
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Define as perissões para o cors
    app.use(cors())

    //Contunua para a leitura dos EndPoints
    next();

});

//CRUD (Create, Read, Update e Delete)



//EndPoint: Retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function(request,response){


});

//EndPoint: Retorna dado do alunos pelo ID
app.post('/v1/lion-school/aluno/:id', cors(), async function(request,response){

    
});

//EndPoint: Atualiza o aluno peli ID
app.put('/v1/lion-school/aluno/:id', cors(), async function(request,response){

    
});

//EndPoint: Excluir o aluno peli ID
app.delete('/v1/lion-school/aluno/:id', cors(), async function(request,response){

    
});