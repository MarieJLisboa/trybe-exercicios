const button = document.querySelector('#btnSubmit');
let inputNameUser = document.querySelector('#inputNameUser');
const nameUser = document.querySelector('#nameUser');

function getUserValue(event) {
    event.preventDefault(); //previne que o comportamento padrão de um evento seja executado
    console.log(inputNameUser.value);
    nameUser.innerHTML = inputNameUser.value;
}
button.addEventListener('click, getUserValue');

//EXERCICIO DA AULA
// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

/* 1 - Adicione um evento click no elemento a que possui o id href . Na função do evento, implemente o método
 .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve 
 acontecer. */
HREF_LINK.addEventListener('click', function(evento1){
    evento1.preventDefault();
})

/* 2 - Adicione um evento click no elemento checkbox que possui o id input-checkbox . Na função do evento, 
implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar na 
caixinha, nada deve acontecer. */
INPUT_CHECKBOX.addEventListener('click', function(evento2){
    evento2.preventDefault();
});

/* 3 - Adicione um evento keypress no elemento input type="text" que possui o id input-text . Na função do evento,
 implemente o método .preventDefault() de forma que somente o caractere a (letra 'a' minúscula) possa ser digitado
na caixinha. ( dica: para capturar a tecla digitada, utilize o event.key )
Caso deseje entender melhor o comportamento do método .preventDefault() , acesse a documentação do MDN ou a página
 da w3schools .*/
 INPUT_TEXT.addEventListener('keypress', function(evento3){
    evento3.preventDefault();
}); 