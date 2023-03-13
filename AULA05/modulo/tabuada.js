/**********************************************************************************************************************
 * Objetivo: Realizar cálculos de uma tabuada tendo duas entardas e o contador
 * Data: 09/02/2023
 * Autor: Genivania Macedo
 * Versão: 1.0
 * *********************************************************************************************************************/

 //Retorna o resultado de uma tabuada
 const calcularTabuada = function(multiplicando, maxMultiplicador){
    let tabuada = multiplicando;
    let maxContador = maxMultiplicador;

    let cont = 0; //start de repetição
    let resultado;
    let status = true;

    // Validação de entrada vazio e entarda de 0
    if(tabuada == 0 || maxContador == 0){
        status= false;
    //Validação de entrada de caracteres
    }else if (isNaN(tabuada) || isNaN(maxContador)){
        status = false;
    }
            for (let cont = 0; cont <= maxContador ; cont++){
                resultado = tabuada * cont;
                console.log(`${tabuada} x ${cont}=${resultado}`);
            }
        return status
    }
    


   // else{
    //     while(cont <= maxContador){
    //         resultado = tabuada * cont
    //         //2x0=0
    //         console.log( tabuada + 'x' + cont + '=' + resultado);
    
    //         //cont = cont +1;
    //         //cont ++;
    //         cont +=1;
    //     }

//  calcularTabuada( 7, 10);

 module.exports = {
     calcularTabuada
 }