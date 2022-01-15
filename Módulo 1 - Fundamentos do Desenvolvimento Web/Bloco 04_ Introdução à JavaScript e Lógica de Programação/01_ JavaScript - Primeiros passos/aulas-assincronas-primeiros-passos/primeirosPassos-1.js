const myName = "Maria";
const birthCity = "Brasília";
var birthYear = '????';


console.log(myName, birthCity, birthYear);

let movie = "Avengers"; // string literal
let score = 10.89; // number literal
let isValid = true; // boolean
let name; //undefined
let color = null; // redefinição

let salary = 3500;
 console.log(salary + salary, salary/salary, salary-salary, salary*salary, 3**3);

salary++;// incrementar
//console.log(salary);
salary--; //decrementar
console.log(salary);

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId, typeof isEnrolled, typeof patientInfo, typeof patientEmail);

console.log(typeof patientAge);
patientId = '50';
console.log(typeof patientId);

const base = 5;
const height = 8;
const area = base*height;
console.log(area);
const perimeter = 4 * (base + height);
console.log(perimeter);

// if - se
// else - senão
let trybe = 14;
if (trybe >= 14 && trybe < 14.40) {   //condicao
    console.log('Esquenta');
}
else if (trybe >= 16.30 && trybe < 17.50) {        //outra condicao
console.log('Aula ao vivo');
}
else if (trybe >= 19.40 && trybe < 20) {
    console.log('Fechamento'); 
}
else {                           //última condicao
    console.log('Fora dos momentos síncronos');                              
} 

const nota = 100;
if (nota >= 80) {   
    console.log('Parabéns, você foi aprovada(o)!');
}
else if (nota < 80 && nota > 60) {        
console.log('Você está na nossa lista de espera');
}
else {                          
    console.log('Você foi reprovada(o)');                              
}


// OPERADORES LÓGICOS 
// and -> &&; or -> ||; NOT -> !;

const comida = 'pão francês';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo); 

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;

console.log(listaDeCompras); 

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false 

const currentHour = 9;
var message = '';

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
} 
else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
}
else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour < 14 && currentHour > 11) {
    message = 'Hora do almoço!!!';
}
else {
    message = 'Hmmm, cheiro de café recém passado';
}
    return console.log(message); 

const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false 

var weekDay = 'domingo';
if ( weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || 
weekDay === 'quinta-feira' || weekDay === 'sexta-feira' ) {
    console.log ("Oba, mais um dia de aprendizado na Trybe >:D");
}
else {
    console.log ("FINALMENTE, descanso merecido UwU");
} 

console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4); 

const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false

console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.
console.log(!null); // true

console.log(!undefined); // true

let trafficLight = 'rosa';

switch (trafficLight) {
    case 'vermelho':            // se atender a este caso para aí
    console.log('pare');
    break;        
                      
    case 'amarelo':
    console.log('atenção');
    break;     

    case 'verde':
    console.log('siga');
    break;  
    
    default:
    console.log('valor não identificado');
} 

let result = 'toc toc';

switch (result) {
    case 'Aprovada':            
    console.log('Parabéns!');
    break;        
                      
    case 'lista':
    console.log('Você está na lista de espera');
    break;     

    case 'reprovado':
    console.log('você foi reprovado');
    break;  
    
    default:
    console.log('não se aplica');
}