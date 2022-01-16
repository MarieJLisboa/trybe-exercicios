 function userInfo() {
  const userEmail ='maria@email.com';
  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  //console.log(userEmail);
}

userInfo();

if (true) {
  // inicio do escopo do if
  var userAge = '20';
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20

var userName = 'Isabella';
var userName = 'Lucas';
//console.log(userName); // Resultado: Lucas

let userName = 'Isabella';
let userName = 'Lucas';
//console.log(userName); // Resultado: Lucas

const userName = 'Isabella';
const userName = 'Lucas';
console.log(userName); // Resultado: Lucas 

const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro 

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition 

const userInfo = {
  name: 'Cláudio',
  id: '5489-2',
  email: 'claudio@email.com',
};

userInfo.name = 'João';

console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro

age = 20;

var age;

console.log(age); /* 20  Mesmo atribuindo um valor à variável age antes mesmo 
de declará-la, o console.log conseguiu imprimir o seu valor, isso por causa do 
hoisting . É como se tivéssemos primeiro declarado a variável age e depois 
atribuído o valor 20, como no exemplo abaixo: */

var age;

age = 20;

console.log(age); // 20

/* Porém, apenas a declaração da variável é movida para o topo do escopo e não seu
 valor. No código abaixo podemos ver um exemplo disso. Ao atribuirmos um valor 
 à variável age apenas após o console.log , recebemos undefined como resultado. */
 var age;

 console.log(age); // undefined
 
 age = 20;
