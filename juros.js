import entradaDados from 'readline-sync';

//-----------------PROJETO DE APLICACAO DE JUROS DE UMA DIVIDA EM ATRASO------------------------------------------
console.log("-----------------------------------------------------------------------------------------------------");
console.log("------PROJETO DE APLICACAO DE JUROS DE UMA DIVIDA EM ATRASO------------------------------------------");
console.log("---------------------------------------------------------------------------------------------------\n");

console.log("Aplicacao de juros: \n");

//----------------- PASSO 1 - ENTRADA DE DADOS ----------------
let divida = Number(entradaDados.question("Informe o valor devido: R$"));//Converte divida para numero com Number()
if (divida <= 0) {//Verifica se o valor da divida e maior que zero para continuar
    console.log("\nVoce nao tem divida, sua divida e: R$ " + divida);
} 
else {
    let dias = Number(entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: "));//Converte dias para numero com Number()
    if (dias <= 0) {//Verifica se o valor de dias e maior que zero para continuar
    console.log("\nVoce nao tem juros pois nao tem dias em atraso, seu valor devido continua: R$ " + divida);
    }
    else {
//----------------- PASSO 2 - PROCESSAMENTO DE DADOS ----------
    let taxa = 5;//Taxa inical de 5% do Total, ou se preferir else

    //condicao-----se true--------
    dias > 15 && (taxa = 10);//Se passar de 15 dias a taxa passa a ser de 10% do Total
    //--------if------------------

    let dividaTotal = divida + (divida * (taxa/100));

    //----------------- PASSO 3 - SAIDA DE DADOS ------------------
    console.log("\nValor original da divida: R$ "+divida);
    console.log("Dias atrasados: "+dias);
    console.log("Taxa de juros: "+taxa+"%");
    console.log("Valor total com juros: R$ "+dividaTotal);
    }
}
 
