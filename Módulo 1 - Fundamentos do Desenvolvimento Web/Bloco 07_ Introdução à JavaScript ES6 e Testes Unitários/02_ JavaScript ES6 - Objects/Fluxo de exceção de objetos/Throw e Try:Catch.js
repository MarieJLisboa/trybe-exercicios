const sum = (value1, value2) => value1 + value2;
 console.log(sum(2, 3));
console.log(sum(2, '3')); /* resultado: 23, nesse caso, o primeiro parâmetro foi convertido
para uma string que foi concatenada com a outra através do sinal de mais.
O JS é considerada uma linguaguem dinâmica, que por isso, permite essa alteração. */

 const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'Os valores devem ser numéricos';
  }
  return value1 + value2;
};

console.log(sum(2, '3')); 

const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};

console.log(sum(2, '3')); 

const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
};

const sum = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    throw error.message;
  }
};

console.log(sum(2, '3')); 
