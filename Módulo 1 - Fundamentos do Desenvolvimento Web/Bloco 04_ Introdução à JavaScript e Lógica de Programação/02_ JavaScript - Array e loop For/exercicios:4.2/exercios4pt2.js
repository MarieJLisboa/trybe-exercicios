// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. percorra o array imprimindo todos os valores nele contidos com a função 
//console.log() ;
 //for (let number of numbers) {
  //   console.log(number);
 //}

// 2. some todos os valores contidos no array e imprima o resultado;
let result = 0;

 for (let index = 0; index < numbers.length; index += 1) {
     result += numbers[index];
 }
 console.log(result);

 //3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

 let average = 0;

 for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
    average =+ result / (numbers.length - 1);
 }
 console.log(average);

 // 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem:
 //"valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
 if (average > 20) {
     console.log('valor maior que 20');
 } else {
     console.log('valor menor ou igual a 20');
 }

 // 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
 let max = numbers[0];
 for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > max ) {
    max = numbers[index];
    }
    console.log(max);
 }

 // 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, 
 //imprima a mensagem: "nenhum valor ímpar encontrado";
 let odd = 0;
 for (let index = 0; index < numbers.length; index += 1) {
     if (numbers[index] % 2 !== 0) {
         odd += 1;
     } 
    }
    if (odd === 0) {
        console.log('nenhum valor ímpar encontrado');
    } else {
    console.log(odd);
}

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let min = numbers[0];
 for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < min) {
    min = numbers[index];
    }
    console.log(min);
 }

 // 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let fiveSquared = [];
 for (let index = 1; index <= 25; index += 1) {
     fiveSquared.push(index);
 }
 console.log(fiveSquared);

 // Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
 for (let index = 0; index < fiveSquared.length; index += 1) {
     console.log(fiveSquared[index]/2);
 }

