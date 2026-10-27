//---Aplicação que faz a comparação entre salário e inflação------------------------------------------------------------------
//---Autor: Jeferson Savy-----------------------------------------------------------------------------------------------------

import entradaDados from 'readline-sync';

let titulo = "=== Aplicação que faz a comparação entre salário e inflação ===";//Criando o título
console.log("\n");
console.log(titulo.toUpperCase());//transforma todas as letras do título em maiúsculas e console.log() imprime o resultado no console
console.log("\n");//quebra de linha, pula para proxima linha

const salarios = [
    { ano: "2010",               salario: "510.00"},
    { ano: "2011",               salario: "545.00"},
    { ano: "2012",               salario: "622.00"},
    { ano: "2013",               salario: "678.00"},
    { ano: "2014",               salario: "724.00"},
    { ano: "2015",               salario: "788.00"},
    { ano: "2016",               salario: "880.00"},
    { ano: "2017",               salario: "937.00"},
    { ano: "2018",               salario: "954.00"},
    { ano: "2019",               salario: "998.00"},
    { ano: "2020",               salario: "1045.00"}
];

const inflacao = [
    { ano: "2010",               ipca: "5.91"},
    { ano: "2011",               ipca: "6.50"},
    { ano: "2012",               ipca: "5.84"},
    { ano: "2013",               ipca: "5.91"},
    { ano: "2014",               ipca: "6.41"},
    { ano: "2015",               ipca: "10.67"},
    { ano: "2016",               ipca: "6.29"},
    { ano: "2017",               ipca: "2.95"},
    { ano: "2018",               ipca: "3.75"},
    { ano: "2019",               ipca: "4.31"},
    { ano: "2020",               ipca: "4.52"}
];

console.log("Escolha uma das alternativas:");
console.log("\n");
console.log("1 - Listar os salários mínimos de 2010 a 2020");
console.log("2 - Listar o índice IPCA de 2010 a 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");
console.log("\n");


let escolha = entradaDados.question("Digite o numero de sua escolha: ");
console.log("\n");

if(Number(escolha) == 1)
{
	for(let i = 0; i < salarios.length; i++)
    {
        let Ano = salarios[i].ano;
        let Salario_minimo = salarios[i].salario.replace(".",",");

        console.log("Ano: ".padEnd(30, ".") + Ano);
        console.log("Salário mínimo: ".padEnd(30, ".") + "R$: " + Salario_minimo);
        console.log("\n");
    }
}
else if(Number(escolha) == 2)
{
	for(let i = 0; i < inflacao.length; i++)
    {
        let Ano = inflacao[i].ano;
        let IPCA = inflacao[i].ipca.replace(".",",");
        
        console.log("Ano: ".padEnd(30, ".") + Ano);
        console.log("Inflação: ".padEnd(30, ".") + IPCA + "%");
        console.log("\n");
    }
}
else if(Number(escolha) == 3)
{
    for(let i = 0; i < salarios.length; i++)
    {
        let Ano = salarios[i].ano;
        let Salario_minimo = salarios[i].salario.replace(".",",");
        let indice_anterior = i - 1;
        if(indice_anterior < 0)
         {
            indice_anterior = i;
         }
       else
         {
           indice_anterior = i - 1;
         }
        let diferenca_salarial = (salarios[i].salario - salarios[indice_anterior].salario);
        let percentual_crescimento = (diferenca_salarial / salarios[indice_anterior].salario)*100;

        console.log("Ano: ".padEnd(30, ".") + Ano);
        console.log("Salário mínimo: ".padEnd(30, ".") + "R$: " + Salario_minimo);
        if(salarios[i].ano > 2010)
         {
            console.log("Crescimento Salarial: ".padEnd(30, ".") + percentual_crescimento.toFixed(2).replace(".", ",") + "%");
         }
        else
         {
            console.log("Crescimento Salarial: ".padEnd(30, ".") + "-");
         }
        console.log("Inflação IPCA: ".padEnd(30, ".") + inflacao[i].ipca.replace(".", ",") + "%");
        console.log("\n");
    }
}
else
{
	console.log("Opção inválida!");
}
