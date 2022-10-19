let nomeComp = null;
let dataNascimen = null;
let endereco = null;
let cpf = null;
let escolaridade = null;
let temCNH = null;
let numFilhos = null;
let cargoAtual = null;
let salario = 0;
let comissao = 0;
let anoAdmissao = 0;

// inclusao de dados
dataNascimen = prompt("Data de nascimento: dd/mm/aaaa");
nomeComp = prompt("Nome completo: ");
endereco = prompt("Endereço: ");
cpf = prompt("CPF");
escolaridade = prompt("Escolaridade: ");
temCNH = prompt("Tem CNH");
numFilhos = prompt("números de filhos: ");
cargoAtual = prompt("Cargo atual");
salario = Number(prompt("Salário"));
comissao = Number(
  prompt(
    "Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero: "
  )
);
anoAdmissao = Number(prompt("Informe o ano de admissão: "));

//Impressao dos tipos das variaveis

console.log("------- Tipo das variaveis -------");
console.log("Nome completo:", typeof nomeComp);
console.log("Data de nascimento;", typeof dataNascimen);
console.log("Endereço:", typeof endereco);
console.log("CPF:", typeof cpf);
console.log("Escolaridade:", typeof escolaridade);
console.log("Tem CNH:", typeof temCNH);
console.log("Número de filhos:", typeof numFilhos);
console.log("Cargo atual:", typeof cargoAtual);
console.log("salário:", typeof salario);
console.log("Comissão:", typeof comissao);
console.log("Ano da admissão:", typeof anoAdmissao);
console.log("-----------------------------------");

//Impressao da ficha funcionario

console.log("------ Ficha do funcionário ------");
console.log("Nome completo:", nomeComp);
console.log("Data de nascimento:", dataNascimen);
console.log("Endereço:", endereco);
console.log("CPF:", cpf);
console.log("Escolaridade:", escolaridade);
console.log("Tem CNH:", temCNH);
console.log("Numeros de filhos:", numFilhos);
console.log("Cargo atual:", cargoAtual);
console.log("Salario:", salario);
console.log("Comissão:", comissao, "%");
console.log("Ana da admissão:", anoAdmissao);
console.log("-----------------------------------");
