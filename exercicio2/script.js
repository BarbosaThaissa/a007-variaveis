let a = 50;
let b = 25;
let c = null;

console.log("Valor de a = ", a);
console.log("Valor de b = ", b);

c = a; // c recebe o valor de a e assim por diante
a = b;
b = c;

console.log("Novo valor de a = ", a);
console.log("Novo valor de b = ", b);
