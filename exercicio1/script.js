let nome;
let idade;

console.log("Tipo da variavel nome:", typeof nome);
console.log("Tipo da variavel idade:", typeof idade);
/* Retornou undefined porque as variaveis foram declaradas 
sem atribuir nenhum valor */

nome = prompt("Digite seu nome: ");
idade = Number(prompt("Digite seu idade: "));

console.log("Tipo da variavel nome:", typeof nome);
console.log("Tipo da variavel idade:", typeof idade);
/* Retornou string e number, depois que seus valores foram atribuidos 
e "convertidos" */

console.log("Olá", nome, "você tem", idade, "anos");

const pergunta1 = "Você gosta de música?";
const pergunta2 = "Você assisti séries?";
const pergunta3 = "Você pratica exercicios físicos?";

const resposta1 = prompt(pergunta1);
const resposta2 = prompt(pergunta2);
const resposta3 = prompt(pergunta3);

console.log(pergunta1, "-", resposta1);
console.log(pergunta2, "-", resposta2);
console.log(pergunta3, "-", resposta3);
