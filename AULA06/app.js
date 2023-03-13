/*****************************************************************************
 * Objetivo: Criar um a API para manioulação de dados de Estados e Cidades
 * Autor: Genivania Macedo
 * Data: 10/03/2023
 * Versão: 1.0
 * 
 ****************************************************************************/

/**
 * Express - dependencia do Node, que permite a integração entre o protocolo http com o código
 *     npm install express --save
 * 
 * Cors - Gerenciador de permissões para o protocolo HTTP
 *     npm install cors --save
 * 
 * Body-parser - É uma dependencia que permite manipular dados enviados pelo body da requisição 
 *     npm install body-parser --save
 * 
 */

//Import das dependências para criar a API
//Responsavel pelas requisições
const express = require('express');
//Responsavel pelas permissões das requisições
const cors = require('cors');
//Responsavel pelas manipulações do body(corpo) da requisições
const bodyParser = require('body-parser');

 //Import do arquivo de funções
 const estadosCidades = require('./modulo/estados_cidades.js');

//Cria um objeto com as informações da classe express
const app = express();


//Define as permissões no header da API
app.use((request, response, next) => {
    //permite gerenciar a origem das requisições da API
    // * - Significa que a API será publica 
    // IP - se colocar o IP, a API somente responderá para aquela máquina
    response.header('Access-Control-Allow-Origin', '*')

    //Permite gerenciar quais verbos (metodos) poderão fazer requisições
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //ativa no cors das requisições as permissões estabelecidas
    app.use(cors())

    next()
});

//endPoints 

//endPoint para listar os Estados
app.get('/estados', cors(), async function (request, response, next) {

    //Chama a função e retorna os estados
    let listaDeEstados = estadosCidades.getListaDeEstados();
    if (listaDeEstados) {

        //Retorna o JSON e o Status Code
        response.json(listaDeEstados)
        response.status(200);
    } else {
        response.status(500);
    }
});


//endPoint: Lista as caracteisticas do estado pela sigla.
app.get('/estado/sigla/:uf', cors(),async function(request, response, next){
    //:uf - é uma váriavel que será utilizada para passagem de valores, na URL da requisição

    //Recebe o valor da variavel uf, que será encaminhada na URL da requisição
    let siglaEstado = request.params.uf;
    let statusCode;
    let dadosEstado= {};

    //Tratamento para validar os valores encaminhados no parametro
    if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
        statusCode= 400;
        dadosEstado.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)";
    } else {
        //Chama a função que filtra o estado pela sigla
        let estado = estadosCidades.getDadosEstados(siglaEstado);

        //Valida se houve retorno válido da função
        if(estado){
            statusCode = 200; // Estado encontrado
            dadosEstado = estado;
        }else{
            statusCode = 404; // Estado não encontrado
        }
    }
    
    response.status(statusCode);
    response.json(dadosEstado);
});


app.get('/capitalEstado/sigla/:uf', cors(), async function(request, response,next){

    let siglaEstado = request.params.uf;
    let statusCode;
    let dadosEstado = {};

     //Tratamento para validar os valores encaminhados no parametro
     if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
        statusCode= 400;
        dadosEstado.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)";
    } else {
        //Chama a função que filtra o estado pela sigla
        let estado = estadosCidades.getCapitalEstado(siglaEstado);

        //Valida se houve retorno válido da função
        if(estado){
            statusCode = 200; // Estado encontrado
            dadosEstado = estado;
        }else{
            statusCode = 404; // Estado não encontrado
        }
    }
    
    response.status(statusCode);
    response.json(dadosEstado);


});

app.get('/estadoRegiao/regiao/:regiao', cors(), async function(request, response,next){

    let estadoRegiao = request.params.regiao;
    let statusCode;
    let dadosEstado = {};

    if(estadoRegiao == ''|| estadoRegiao == undefined || !isNaN(estadoRegiao)){
        statusCode= 400;
        dadosEstado.message = "Não é possivel processar a requisição pois a região não foi informada"
    }else {
        //Chama a função que filtra o estado pela sigla
        let regiao = estadosCidades.getEstadosRegiao(estadoRegiao);

        //Valida se houve retorno válido da função
        if(regiao){
            statusCode = 200; // Estado encontrado
            dadosEstado = estado;
        }else{
            statusCode = 404; // Estado não encontrado
        }
    }
    
    response.status(statusCode);
    response.json(dadosEstado);
});




//permite carregar os endpoint criados e aguardar as requisições
//pelo prootocolo http na porta 8080
app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080.')
})

