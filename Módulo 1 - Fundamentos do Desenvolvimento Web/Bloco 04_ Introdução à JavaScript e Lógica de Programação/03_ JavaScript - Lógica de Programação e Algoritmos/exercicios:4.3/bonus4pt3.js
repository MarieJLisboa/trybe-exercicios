/* 1. Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 ,
 imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo: */
let n = 5;
let asterisk = '*';
let line = '';

 for (let i = 0; i < n; i += 1) {
     line = asterisk + line;
 };
 for (let i = 0; i < n; i += 1) {
    console.log(line);
}; 

/* 2. Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 
Por exemplo:
n = 5

*
**
***
****
***** */

let size = 5;
let star = '*';
let empty = '';

for (let i = 0; i < size; i += 1) {
    empty = star + empty;
    console.log(empty);
}

/*Agora inverta o lado do triângulo. Por exemplo:
n = 5

    *
   **
  ***
 ****
*****    */

let size = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
    console.log(inputLine);
    inputLine = inputLine + symbol;
}