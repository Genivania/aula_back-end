/*****************************************************************************
 * Objetivo: Criar um a API para manipulação de dados de Estados e Cidades
 * Autor: Genivania Macedo
 * Data: 10/03/2023
 * Versão: 1.0
 * 
 ****************************************************************************/

/**
 * caso não for da um npm init
 * 
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
app.get('/v1/senai/estados', cors(), async function (request, response, next) {

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
app.get('/v1/senai/estado/sigla/:uf', cors(), async function (request, response, next) {
    //:uf - é uma váriavel que será utilizada para passagem de valores, na URL da requisição

    //Recebe o valor da variavel uf, que será encaminhada na URL da requisição
    let siglaEstado = request.params.uf;
    let statusCode;
    let dadosEstado = {};

    //Tratamento para validar os valores encaminhados no parametro
    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400;
        dadosEstado.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)";
    } else {
        //Chama a função que filtra o estado pela sigla
        let estado = estadosCidades.getDadosEstados(siglaEstado);

        //Valida se houve retorno válido da função
        if (estado) {
            statusCode = 200; // Estado encontrado
            dadosEstado = estado;
        } else {
            statusCode = 404; // Estado não encontrado
        }
    }

    response.status(statusCode);
    response.json(dadosEstado);
});

app.get('/v1/senai/estado/capital/sigla/:uf', cors(), async function (request, response, next) {

    let siglaEstado = request.params.uf;
    let statusCode;
    let dadosEstado = {};

    //Tratamento para validar os valores encaminhados no parametro
    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400;
        dadosEstado.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)";
    } else {
        //Chama a função que filtra o estado pela sigla
        let estado = estadosCidades.getCapitalEstado(siglaEstado);

        //Valida se houve retorno válido da função
        if (estado) {
            statusCode = 200; // Estado encontrado
            dadosEstado = estado;
        } else {
            statusCode = 404; // Estado não encontrado
        }
    }

    response.status(statusCode);
    response.json(dadosEstado);


});

app.get('/v1/senai/estado/regiao/:regiao', cors(), async function (request, response, next) {

    let estadoRegiao = request.params.regiao;
    let statusCode;
    let dadosRegiao = {};

    if (estadoRegiao == '' || estadoRegiao == undefined || !isNaN(estadoRegiao)) {
        statusCode = 400;
        dadosRegiao.message = "Não é possivel processar a requisição pois a região não foi informada"
    }
    else {
        //Chama a função que filtra o estado pela sigla
        let regiao = estadosCidades.getEstadosRegiao(estadoRegiao);

        //Valida se houve retorno válido da função
        if (regiao) {
            statusCode = 200; // Estado encontrado
            dadosRegiao = regiao;
        } else {
            statusCode = 404; // Estado não encontrado
        }
    }

    response.status(statusCode);
    response.json(dadosRegiao);
});


app.get('/v1/senai/estado/capital', cors(), async function (request, response, next) {

    let listaCapitalPais = estadosCidades.getCapitalPais();
    if (listaCapitalPais) {

        response.json(listaCapitalPais)
        response.status(200);
    } else {
        response.status(500);
    }
});

// app.get('/cidades', cors(), async function(request, response,next){

//     let siglaEstado = request.params.uf;
//     let statusCode;
//     let dadosCidade = {};

//      //Tratamento para validar os valores encaminhados no parametro
//      if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
//         statusCode= 400;
//         dadosCidade.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)";
//     } else {
//         //Chama a função que filtra o estado pela sigla
//         let cidade = estadosCidades.getCidades(siglaEstado);

//         //Valida se houve retorno válido da função
//         if(cidade){
//             statusCode = 200; // Estado encontrado
//             dadosCidade = cidade;
//         }else{
//             statusCode = 404; // Estado não encontrado
//         }
//     } 
//     response.status(statusCode);
//     response.json(dadosCidade);
// });

// EndPoint: LIsta de cidades filtrada pela sigla do estado
app.get('/v1/senai/cidades', cors(), async function (request, response, next) {

    // Recebe o valor da variavel que será enviada por QueryString
    //EX: www.uol.com.br?uf+sp

    /**
     * Usamos a query para receber diversas váriaveis para realizar filtros 
     * Usamos o parms para receber o ID, geralmente para fazer PUT, DELETE e GET
     */

    let siglaEstado = request.query.uf;
    let statusCode;
    let dadosCidade = {};

    //Tratamento para validar os valores encaminhados no parametro
    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400;
        dadosCidade.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)";
    } else {
        //Chama a função que filtra o estado pela sigla
        let cidade = estadosCidades.getCidades(siglaEstado);

        //Valida se houve retorno válido da função
        if (cidade) {
            statusCode = 200; // Estado encontrado
            dadosCidade = cidade;
        } else {
            statusCode = 404; // Estado não encontrado
        }
    }
    response.status(statusCode);
    response.json(dadosCidade);

});

//EndPoint versão 2: Lista de cidades filtrada pela sigla do estado
// com mais detalhes
// app.get('/v2/senai/cidades', cors(), async function(request, response, next){

// });



//permite carregar os endpoint criados e aguardar as requisições
//pelo prootocolo http na porta 8080
app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080.')
})

