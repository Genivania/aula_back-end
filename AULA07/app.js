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
const bodyParser = require('body-parser');
const { request, response } = require('express');

//Cria o objeto app utilizando a classe do express
const app = express();

app.use((request, response, next) => {
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

const bodyJSON = bodyParser.json();

//Import da controller do aluno
var controllerAluno = require('./controller/controller_aluno.js');

//EndPoint: Retorna todos os dados de alunos
app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response) {

});

//EndPoint: Retorna todos os dados de alunos
app.get('/v1/lion-school/aluno/', cors(), async function(request, response) {

    //Solicita a controller que retorne todos os alunos do BD
    let dados = await controllerAluno.selecionarTodosAluno();

    //Valida se existem registros para retornar n arequisição
    if (dados) {
        response.json(dados);
        response.status(200);
    } else {
        response.json();
        response.status(404);
    }

});

//EndPoint: Inserir aluno
app.post('/v1/lion-school/aluno', cors(), bodyJSON, async function(request, response) {

    //Recebe os dados encaminhados no body da requisição
    let dadosBody = request.body;

    console.log(dadosBody)

    //Envia os dados para a controller
    let resultInsertDados = await controllerAluno.inserirAluno(dadosBody);

    //Retorna o status code e a message
    response.status(resultInsertDados.status);
    response.json(resultInsertDados)

});

//EndPoint: Atualiza o aluno peli ID
app.put('/v1/lion-school/aluno/:id', cors(), async function(request, response) {

});

//EndPoint: Excluir o aluno peli ID
app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response) {

});

app.listen(8080, function() {
    console.log('Servidor aguardando requisições na porta 8080!')
})