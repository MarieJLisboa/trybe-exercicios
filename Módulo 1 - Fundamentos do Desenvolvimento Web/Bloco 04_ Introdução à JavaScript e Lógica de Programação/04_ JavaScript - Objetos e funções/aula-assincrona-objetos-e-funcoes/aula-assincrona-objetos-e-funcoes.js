/* Objeto armazena entradas:
chave: valor */
let singer = {
 name: 'Milton',
 lastName: 'Nascimento',
 nickName: 'Bituca',
 age: 77,
 bestAlbuns: ['Travessia', 'Clube da esquina', 'Minas']
};
console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.');
console.log('O cantor ' + singer['name'] + ' ' + singer['lastName']+ ' possui ' + singer['age'] + ' anos.')

  let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
    };
    
    //diasDaSemana.1; // SyntaxError: Unexpected number
    console.log(diasDaSemana['1']); // domingo

    let conta = {
        agencia: '0000',
        banco: {
          cod: '012',
          id: 4,
          nome: 'TrybeBank',
        },
      };
      
      let infoDoBanco = 'banco';
      console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
      console.log(conta[infoDoBanco]['nome']); // TrybeBank
      
      console.log(conta.agencia); // 0000
      console.log(conta['agencia']); // 0000
      
      console.log(conta.banco.cod); // 012
      console.log(conta['banco']['id']); // 4

      let usuario = {
        id: 99,
        email: 'jakeperalta@gmail.com',
        infoPessoal: {
          nome: 'Jake',
          sobrenome: 'Peralta',
          endereco: {
            rua: 'Smith Street',
            bairro: 'Brooklyn',
            cidade: 'Nova Iorque',
            estado: 'Nova Iorque',
          },
        },
      };
      
      console.log(usuario['id']); // 99
      console.log(usuario.email); // jakeperalta@gmail.com
      
      console.log(usuario.infoPessoal.endereco.rua); // Smith Street
      console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

      let moradores = [
        {
          nome: 'Luiza',
          sobrenome: 'Guimarães',
          andar: 10,
          apartamento: 1005,
        },
        {
          nome: 'William',
          sobrenome: 'Albuquerque',
          andar: 5,
          apartamento: 502,
        },
        {
          nome: 'Murilo',
          sobrenome: 'Ferraz',
          andar: 8,
          apartamento: 804,
        },
        {
          nome: 'Zoey',
          sobrenome: 'Brooks',
          andar: 1,
          apartamento: 101,
        },
      ];
      
      let primeiroMorador = moradores[0];
      console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
      console.log(primeiroMorador['andar']); // 10
      
      let ultimoMorador = moradores[moradores.length - 1];
      console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
      console.log(ultimoMorador.nome); // Zoey

      
      // EXERCICIOS
      // 1. Crie um objeto player contendo as variáveis listadas abaixo.
      let player = {
        name: 'Marta',
        lastName: 'Silva',
        age: 34,
        medals: { 
            golden: 2, 
            silver: 3, 
        },
        bestInTheWorld: [
            2006, 
            2007, 
            2008, 
            2009, 
            2010, 
            2018,
        ],
      };

      // 2. Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
      console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');
      console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' tem ' + player['age'] + ' anos de idade.');

      // 3. Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
      // ok

      // 4.  Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
      console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

      /* 5.  Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
Agora veremos uma variação do laço for , que nos garante facilidade ao lidar com objetos. */
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');


// FOR IN 
// pedidos de pizza
let pizzas = {
    sabor: 'Palmito',
    preco: 39.90,
    bordaCatupiry: true,
};

for (let key in pizzas) {
    console.log(key); // imprime as chaves do objeto: sabor, preco e bordaCatupiry
    console.log(pizzas); // imprime as chaves e seus respectivos valores
    console.log(pizzas.preco); // imprime o valor de preco
    console.log(pizzas['bordaCatupiry']); //imprime o valor de bordaCatupiry
    console.log(pizzas[key]); //passa por cada propriedade e imprime o seu valor
}

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for(let key in pizzasDoces) {
    console.log(key);
    console.log(pizzasDoces);
    console.log(pizzasDoces[key])
    console.log(key, pizzasDoces[key]);
}


// o código que mostra as marcas de carros presentes em um Array é:
let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

// Um outro exemplo é a iteração nas chaves de um objeto:
let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

  let food = ['hamburguer', 'bife', 'acarajé'];
  for (let position in food) {
    console.log(position);
  };

  for (let value of food) {
    console.log(value);
  };


  //PARA FIXAR
  // 1. Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for(let i in names) {
    console.log('Olá,', names[i]);
  }

  // 2. Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
  let voiture = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let specific in voiture) {
    console.log (specific, voiture[specific]);
  };


// FUNÇÕES
var statusCarro = 'desligado';
var aceleracao = 0;
var rotacaoDoVolante = 0;

function ligarDesligar() {
  // aqui vão as instruções de ligar desligar
  if (statusCarro === 'desligado') {
    statusCarro = 'ligado';
  } else {
    statusCarro = 'desligado';
  }
  return console.log(statusCarro);
  }

function acelerar(incremento) {
  //aqui vão instruções de acelerar
  aceleracao = aceleracao + incremento;
  return console.log('Acelerando a ' + aceleracao + ' m/s²');
}

function frear(decremento) {
  //aqui vão instruções de frear
  aceleracao = aceleracao - decremento;
  return console.log('Desacelerando para ' + aceleracao + ' m/s²');
}

function girarVolante(anguloRotacao) {
  //aqui vão instruções de direção
  rotacaoDoVolante = anguloRotacao;
  return console.log(rotacaoDoVolante + '•');
}

ligarDesligar();
acelerar(20);
girarVolante(-45);
frear(5);
girarVolante(0);
frear(15);
ligarDesligar();


// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo

function bomDia() {
  return 'Bom dia!';
}

console.log(bomDia()); // Bom dia!

let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado

// Com função
function soma(a, b) {
  return a + b;
}

console.log(soma(5, 2)); // 7

function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
  } else if (segundoNum > primeiroNum) {
    return segundoNum + ' é maior que ' + primeiroNum;
  } else {
    return 'Os números são iguais';
  }
}

console.log(maiorNum(10, 20)); // 20 é maior que 10
console.log(maiorNum(2, -5)); // 2 é maior que -5
console.log(maiorNum(1, 1)); // Os números são iguais


