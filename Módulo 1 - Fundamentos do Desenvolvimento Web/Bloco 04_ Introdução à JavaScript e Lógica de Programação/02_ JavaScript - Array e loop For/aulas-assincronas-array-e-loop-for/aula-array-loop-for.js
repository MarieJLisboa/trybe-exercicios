var pizza1 = '4 Queijos';
var pizza2 = 'Frango com catupiry';
var pizza3 = 'Marguerita';
var pizza4 = 'Palmito';
var pizza5 = 'Chocolate';

// or use arrays [];

let pizzas = ['4 Queijos', 'Frango com catupiry', 'Marguerita', 'Palmito', 'Chocolate'];

pizzas.push('Peito de peru');  //it adds another flavor to the last position of array
pizzas.push('Gratinada');

console.log(pizzas.length)  // it shows the quantity of elements in the array

console.log('Menu de sabores: ' + pizzas);

console.log(pizzas.sort());   // it shows the array ordered

console.log(pizzas[0]); // it shows the element which occupy that position in an array 

//Repeating structure

for (let index =0; index < pizzas.length; index += 1) {      //this is basically a repeating structure which will 
    console.log(pizzas[index]);                         // read each element in the array lenght
};

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length); //3

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

/* the .push () adds the element to the end of the array, if we want to add something in the beggining
we should use .unshift() */

tasksList.unshift('Fazer atividade física');
console.log(tasksList);

tasksList.pop();  // it removes the last task
console.log(tasksList);

tasksList.shift();  // it removes the first task
console.log(tasksList);

let indexOfTask = tasksList.indexOf('Reunião');   //indexOf() is used to find the index of an item in the array

// for more read the documentations: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

var numero = 7;
for (var contador = 1; contador <= 9; contador ++) {
    console.log (numero * contador);
}

var listaDeNomes = ['Joana', 'Maria', 'Lucas'];
for (var indice = 0; indice < listaDeNomes.length; indice ++) {
    var mensagem = 'Boas vindas, ' + listaDeNomes[indice] + '!';
    console.log(mensagem)
}

/* Embora seja um recurso da linguagem, o uso do operador de incremento ( ++ ) não é recomendado. 
O maior problema é que, embora seu uso principal esteja na geração de um side effect , esse operador 
sempre irá retornar algum valor e, pra piorar, as expressões ( ++x ) e ( x++ ), embora sejam facilmente 
confundidas por usar o mesmo operador e possuir o mesmo side effect, retornam valores diferentes.
Levando isso em consideração, o uso desse operador pode gerar confusão e causar bugs inesperados. 
Sendo assim, uma vez que o += 1 substitui completamente o ++ , recomenda-se o uso exclusivo de += 1 , 
e é essa a regra que iremos adotar neste conteúdo daqui pra frente!
Suponha que temos uma lista com marcas de carros: */

// The next code:
let cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW

// is better written using for: 
for (let index = 0; index < cars.length; index += 1) {
    console.log(cars[index]);
  }

  // EXERCÍCIO 1
  // Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

  let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

  for (let index = 0; index < groceryList.length; index += 1) {
      console.log(groceryList[index]);
  }

  // For/of allows to create loops in iterable objects such as strings, arrays and others...

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}


let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}


let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}


console.log(arrOfNumbers);

// EXERCICIO 2
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names) {
    console.log(name);
}