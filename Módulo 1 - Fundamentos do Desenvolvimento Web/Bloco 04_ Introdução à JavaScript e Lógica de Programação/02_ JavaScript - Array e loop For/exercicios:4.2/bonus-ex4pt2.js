// http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/
/*for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  } */

  // 1. Ordene o array numbers em ordem crescente e imprima seus valores;
  let numbers = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

  for (let i = 0; i < numbers.length; i += 1) {
      for (let j = 0; j < i; j += 1) {
          if (numbers[i] < numbers[j]) {
              let position = numbers[i];
              numbers[i] = numbers[j];
              numbers[j] = position;
          }
      }
  }
  console.log(numbers);

  // 2. Ordene o array numbers em ordem decrescente e imprima seus valores;
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
        if (numbers[i] > numbers[j]) {
            let position = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = position;
        }
    }
}
console.log(numbers);

/* 3. Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. 
Cada valor do novo array deverá ser igual ao valor correspondente do array anterior 
multiplicado pelo próximo. Por exemplo: o primeiro valor do novo array deverá ser 45, 
pois é a multiplicação de 5 (valor correspondente) e 9 (próximo valor). Caso não haja 
próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o
 método push. */
 let newNumbers = [];

 for (let i = 0; i < numbers.length; i += 1) {
     if(i + 1 < numbers.length) {
     newNumbers.push(numbers[i] * numbers[i + 1]); 
    } else {
        newNumbers.push(numbers[i] * 2);
        }
    }
console.log(newNumbers);