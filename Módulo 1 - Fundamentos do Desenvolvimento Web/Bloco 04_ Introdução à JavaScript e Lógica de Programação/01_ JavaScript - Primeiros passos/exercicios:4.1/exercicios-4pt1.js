/*1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, 
a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

let a = 12;
let b = 4;

//console.log(a+b, a-b, a*b, a/b, a%b);

/*2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os
 valores que serão comparados. */

 const first = 381;
 const second = 5463;

 if(first > second) {
    console.log (first);
 }
 else {
    console.log (second);
 };
 
 /*3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os 
 valores que serão comparados. */
 const third = 846;

 if(first > second && first > third) {
    console.log (first);
 }
 else if (second > first && second > third){
    console.log (second);
 }
 else {
    console.log (third);
 };

 /*4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for 
 positivo, "negative" se for negativo e "zero" caso contrário. */
const signal = 3;

if (signal > 0){
    console.log('positive');
}
else if (signal < 0){
    console.log('negative');
}else{
    console.log('zero');
};

/*5.Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo.
 Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum 
 ângulo for inválido o programa deve retornar uma mensagem de erro. */
    const hypotenuse = -50;
    const heighA = -90;
    const baseB = -40;

    if ( (hypotenuse + heighA + baseB) < 0) {
        console.log ('Valor inválido!');
    } else if ((hypotenuse + heighA + baseB) == 180) {
        return console.log(true);
    }
    else {
        console.log(false);
    };

    /*6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
    Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto
     com letras minúsculas, sem aumentar a quantidade de condicionais. Como dica, você pode pesquisar uma 
     função que faz uma string ficar com todas as letras minúsculas (lower case) .
    Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
    Exemplo: bishop (bispo) -> diagonals (diagonais) */
    const piece = "QUEEN";

    switch ( piece.toLowerCase()) {
        case "king":            
        console.log('One square in any direction, castling');
        break;        
                          
        case "queen":
        console.log('diagonally, horizontally, vertically');
        break;     
    
        case "rooks":
        console.log('horizontally, vertically');
        break;  

        case "bishops":
            console.log('diagonally');
            break;

        case "knights":
            console.log('L shape');
            break;

        case "pawns":
            console.log('vertically');
        
        default:
        console.log("peça não identificada!");
    };

    /*7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. 
    Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */
const percent = 100;

if (percent > 100 || percent < 0 ) {
        console.log(' Nota inválida');
} else if (percent >= 90) {
        console.log('Nota A');
} else if (percent >= 80) {
    console.log('Nota B');
} else if (percent >= 70) {
    console.log(' Nota C');
} else if (percent >= 60) {
    console.log(' Nota D');
} else if (percent >= 50) {
    console.log(' Nota E');
} else {
    console.log(' Nota F');
};

/*8.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par.
 Caso contrário, ele retorna false. */
 const numberOne = 2;
 const numberTwo = 4;
 const numberThree = 9;
 let pair = false;

 if ((numberOne % 2 === 0 || numberTwo % 2 === 0 || numberThree % 2 === 0)) {
     pair = true;
 };
 console.log(pair);

 /* 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar.
  Caso contrário, ele retorna false. */
  let unpair = false;

  if ((numberOne % 2 !== 0 || numberTwo % 2 !== 0 || numberThree % 2 !== 0)) {
    unpair = true;
};
console.log(unpair);

/* 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu 
valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa 
terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também 
faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto) */
const productCost = Math.abs(7000);
const priceTag = Math.abs(10000);
const profit = (priceTag - (productCost * 1.2)) * 1000;

console.log(profit);

/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que,
 dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela 
de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos? */

var calInss;
var calIr; 

const grossSalary = 3000;


if(grossSalary <= 1556.94) {
    calInss = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
    calInss = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
    calInss = grossSalary * 0.11;
} else {
    calInss = 570.88;
};

const baseSalary = grossSalary - calInss;

if (baseSalary <= 1903.98) {
    calIr = 0;
} else if (baseSalary <= 2826.65) {
    calIr = (baseSalary * 0.075) - 142.80;
}  else if (baseSalary <= 3751.05) {
    calIr = (baseSalary * 0.15) - 354.80;
}   else if (baseSalary <= 4664.68) {
    calIr = (baseSalary * 0.225) - 636.13;
}   else {
    calIr = (baseSalary * 0.275) - 869.36;
}
console.log(baseSalary - calIr);

