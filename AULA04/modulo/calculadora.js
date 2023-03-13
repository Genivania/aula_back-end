/**********************************************************************************************************************
 * Objetivo: Arquivo de funções para realizar cálculos matemáticos
 * Data: 03/02/2023
 * Autor: Genivania Macedo
 * Versão: 1.0
 * *********************************************************************************************************************/

//Realizar calculo matemático das 4 operações (SOMAR, SUBTRAIR , MULTIPLICAR E DIVIDIR)
//Forma o1 (tradicional)
// function calcular(numero1, numero2, tipoCalculo) {

//     let valor1 = Number(numero1);
//     let valor2 = Number(numero2);
//     let operacao = tipoCalculo.toUpperCase();

//     let resultado;

//     // if (operacao == 'SOMAR') {
//     //     resultado = valor1 + valor2;
//     // } else if (operacao == 'SUBTRAIR') {
//     //     resultado = valor1 - valor2;
//     // } else if (operacao == 'MULTIPLICAR') {
//     //     resultado = valor1 * valor2;
//     // } else if (operacao == 'DIVIDIR') {
       
//     //    //Validação divisao por 0
//     //     if (valor2 == 0) {
//     //         console.log('ERRO: Não é possível fazer uma divisão por 0.');
//     //         status = false;
//     //     } else
//     //         resultado = valor1 / valor2;

//     //     //Validar entrada
//     // } else {
//     //     console.log('ERRO: A OPERAÇÃO INFORMADA NÃO É VALIDA. CONFIRA A ENTRADA')
//     //     status = false;
//     // }


//     //abre apenas a chave dele, depois não precisa mais
//     switch (operacao){
//         case 'SOMAR':
//             resultado = valor1 + valor2;
//             break;
//         case 'SUBTRAIR':
//             resultado = valor1 - valor2;
//             break;
//         case 'MULTIPLICAR':
//             resultado = valor1 * valor2;
//             break;
//         case 'DIVIDIR':
//            // Validação divisao por 0
//             if (valor2 == 0) {
//                 console.log('ERRO: Não é possível fazer uma divisão por 0.');
//                 status = false;
//             } else
//                 resultado = valor1 / valor2;

//             break;

//         default:
//             console.log('ERRO: A OPERAÇÃO INFORMADA NÃO É VALIDA. CONFIRA A ENTRADA')
//             status = false;
//     }

//     //Validação para trvatar a variavel resultado quando nenhum calculo é realizado.
//     if (resultado != undefined) {
//         return resultado;
//     } else {
//         return false;
//     }
// }

//Forma 02
const calcular = function(numero1, numero2, tipoCalculo){
    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();

    let resultado;


    //abre apenas a chave dele, depois não precisa mais
    switch (operacao){
        case 'SOMAR':
            resultado = SOMAR(valor1 , valor2);
            break;
        case 'SUBTRAIR':
            resultado = SUBTRAIR(valor1 , valor2);
            break;
        case 'MULTIPLICAR':
            resultado = MULTIPLICAR(valor1 , valor2);
            break;
        case 'DIVIDIR':
           // Validação divisao por 0
            if (valor2 == 0) {
                console.log('ERRO: Não é possível fazer uma divisão por 0.');
                status = false;
            } else
                resultado = DIVIDIR(valor1 , valor2);

            break;

        default:
            console.log('ERRO: A OPERAÇÃO INFORMADA NÃO É VALIDA. CONFIRA A ENTRADA')
            status = false;
    }

    //Validação para tratar a variavel resultado quando nenhum calculo é realizado.
    if (resultado != undefined) {
        return Number(resultado.toFixed(2));
    } else {
        return status;
    }

}


//Forma 03 (Arrow Function)   PRIVADAS
const SOMAR         = (valor1,valor2) => valor1 + valor2;
const SUBTRAIR      = (valor1,valor2) => valor1 - valor2;
const MULTIPLICAR   = (valor1,valor2) => valor1 * valor2;
const DIVIDIR       = (valor1,valor2) => valor1 / valor2;


//Exporta uma função para ser utilizada em outro arquivo
module.exports = {
    calcular
}