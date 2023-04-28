/*****************************************************************************************
 * Objetivo: Arquivo responsável pelas váriaveis, constantes e funções globais do projeto
 * Data: 28/04/2023
 * Autor: Genivania Macedo
 * versão: 1.0
 *****************************************************************************************/

//*****************************************CONSTANTES DE ERROS*********************************************************/
const ERROR_REQUIRED_DATA = { status: 400, message: 'Existem dados obrigatórios que não foram preenchidos.' };
const ERROR_INTERNAL_SERVER = { status: 500, message: 'Erro interno no servidor de banco de dados' };

//*****************************************CONSTANTES DE SUCESSO******************************************************/
const CREATED_ITEM = { status: 201, message: 'Registro criado com sucesso.' };

module.exports = {
    ERROR_REQUIRED_DATA,
    ERROR_INTERNAL_SERVER,
    CREATED_ITEM
}