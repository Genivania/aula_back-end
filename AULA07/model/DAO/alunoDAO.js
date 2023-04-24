/*********************************************************************
 * Objetivo: Realizar a interação do aluno com o banco de dados
 * DATA: 14/04/2023
 * Autor: Genivania Macedo
 * Versão: 1.0
 ********************************************************************/

//Inserir um novo registro no Banco de Dados
const insertAluno = function (dadosAluno) {

}

//Atualizar um novo registro no Banco de Dados
const updateAluno = function (dadosAlunos) {

}

//Apagar registro no Banco de Dados
const deleteAluno = function (id) {

}

//Retorna todos os registro no Banco de Dados
const selectAllAluno = async function () {
    //Import da biblioteca do prisma client(responsável por manipular dados no BD)
    let {PrismaClient} = require('@prisma/client')

    //Instancia da classe do PrismaClient
    let prisma = new PrismaClient();


    //Variavel com o scriptSQl para executar no BD
    let sql = 'select * from tbl_aluno';

    //executa um script dentro do Banco de dados
    //$queryRawUnsafe() é utilizado quando o scriptSQL esta em uma variavel
    //$queryRaw() é utilizado quando passar o script direto no metodo (EX: $queryRaw('select * from tbl_aluno'))
    // await só funciona se tiver o async
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Valida se o BD retornou algum registro
    if (rsAluno.length > 0)
        return rsAluno;
    else
        return false;



}

//Retotna um registro filtrado pelo id no Banco de Dados
const selectByIdAluno = function (id) {

}

module.exports = {
    selectAllAluno
}