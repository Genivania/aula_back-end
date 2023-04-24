/*********************************************************************
 * Objetivo: Implementar a regra de negócio entre o APP e a MODEL
 * DATA: 24/04/2023
 * Autor: Genivania Macedo
 * Versão: 1.0
 ********************************************************************/

//Função para receber os dados dos app e enviar para a Model para inserir um novo item
const inserirAluno = function (dadosAluno) {

};

//Função para receber os dados dos app e enviar para a Model para atualizar um item 
const atualizarAluno = function (dadosAluno) {

};

//Função para excluir um aluno filtrado pelo ID, será encaminhado para o model
const deletarAluno = function (id) {

};

//Função para retornar todos os itens da tabela reecebidos da Model
const selecionarTodosAluno = async function () {
  //Import do arquivo de acesso ao BD
    let alunoDAO = require('../model/DAO/alunoDAO.js');
    
    //Solicita ao DAO todos os alunos do BD
    let dadosAluno = await alunoDAO.selectAllAluno();
    
    //Cria um obj JSON
    let dadosJSON = {};

    //Valida se o BD teve registros
    if ( dadosAluno){
      //Adiciona o array de alunos e um JSON para retornar ao app
      dadosJSON.alunos = dadosAluno;
      return dadosJSON;
    }else 
      return false;
};

//Função para buscar um item filtrando pelo id, que será encaminhado para a Model
const buscarIdAluno = function (id) {

};

module.exports = {
  selecionarTodosAluno
}