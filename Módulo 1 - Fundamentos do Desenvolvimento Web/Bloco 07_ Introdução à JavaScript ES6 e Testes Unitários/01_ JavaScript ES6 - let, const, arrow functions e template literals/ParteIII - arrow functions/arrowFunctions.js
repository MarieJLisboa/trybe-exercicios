/*const printName = function () {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());

function soma (num1, num2) {
  return num1 + num2;
}
console.log(soma(2, 2));

const soma = function soma (num1, num2) {
  return num1 + num2;
}

console.log(soma(2, 2));

// Arrow Function 
 const soma = (num1, num2) => {
 num1 + num2;
}

console.log(soma(2, 2));

// Em uma linha
const soma = (num1, num2) => num1 + num2;
 
 console.log(soma(2, 2));

function contaPalavras (frase) {
  return frase.split(' ').length;
}

console.log(contaPalavras('Fala tribo, beleza?'));

const contaPalavras = frase => frase.split(' ').length;
console.log(contaPalavras('Fala tribo, beleza?')); 

function objetoPessoa (nome, idade) {
  return {
    nome: nome,
    idade: idade
  }
}
console.log(objetoPessoa('Joaquim', 25));

const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade}); // it's necessary to put the object in the ()
console.log(objetoPessoa('Joaquim', 25));  

const printName = () => {
  const myName = 'Lucas';
  return myName;
};

console.log(printName()); 

const printName = () => 'Lucas';
console.log(printName()); */
 /* Mas lembre-se que podemos omitir os parênteses apenas em um cenário:
Quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo */
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

// Em funções que recebem mais de um parâmetro, os parênteses não são omitidos:
const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));

