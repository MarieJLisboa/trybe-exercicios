/* O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10. */
let factorial = 1;
for (i = 10; i > 0; i -= 1) {
    factorial *= i;
}
console.log(factorial);

/* 2. Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" 
seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar
 se seu algoritmo está funcionando corretamente. */
 let word = 'trybe';
 inverted = '';
 reversed = '';
 for (i = 0; i < word.length; i += 1) {
     inverted += word[word.length - 1 - i];
 }
 console.log(inverted);

 reversed = word.split('').reverse().join(''); 
/*split divide uma string numa lista ordenada de substrings, colocando-as numa array e retornando o array. A divisão é feita procurando um padrão, que é fornecido como o primeiro parâmetro na chamada desse método. Ex.: str.split([separator[, limit]]). 
 reverse inverte a ordem dos itens do array; e
 e join junta os itens separados pelo split */
 console.log(reversed);

 // 3. Considere o array de strings abaixo:
 let array = ['java', 'javascript', 'python', 'html', 'css'];
 /* Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. 
 Considere o número de caracteres de cada palavra. */
 let countMax = array[0];
 let countMin = array[0];
 for (let i = 0; i < array.length; i += 1) {
     if (countMax.length < array[i].length) {
     countMax = array[i]; 
    }
 }
 console.log(countMax);

 for (let i = 0; i < array.length; i += 1) {
    if (countMin.length > array[i].length) {
    countMin = array[i]; 
   }
}
console.log(countMin);

/* 4. Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que 
retorne o maior número primo entre 0 e 50. */
let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);