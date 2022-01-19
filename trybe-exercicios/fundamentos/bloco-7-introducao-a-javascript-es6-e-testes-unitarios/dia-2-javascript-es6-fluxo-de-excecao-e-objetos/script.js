// EXERCICIOS

/* <!DOCTYPE html>
<html lang='pt-BR'>
<head>
  <meta charset='UTF-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Calculadora</title>
</head>
<body>
  <p>Informe dois números para realizar a soma:</p>
  <label for='value1'>Valor 1:</label>
  <input type='text' id='value1'>
  <label for='value2'>Valor 2:</label>
  <input type='text' id='value2'>
  <button id='button'>Somar</button>
  <p id='result'></p>
  <script>
    function sum() {
      const value1 = document.getElementById('value1').value;
      const value2 = document.getElementById('value2').value;
      const result = parseInt(value1) + parseInt(value2);
      document.getElementById('result').innerHTML = `Resultado: ${result}`;
      document.getElementById('value1').value = '';
      document.getElementById('value2').value = '';
    }
    window.onload = () => {
      const button = document.getElementById('button');
      button.addEventListener('click', sum);
    } */
    
    /* 1 - Crie um erro personalizado que será chamado se a pessoa usuária digitar apenas um número.
a) Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?
b) Utilize o throw new Error e o bloco try/catch .
c) Imprima o erro no parágrafo com id result , para que a pessoa usuária saiba o que aconteceu. Lembre-se de 
usar erros descritivos!
d) Evite funções que tenham muitas responsabilidades distintas.
2 - Agora adicione uma outra exceção, caso a pessoa usuária digite um valor que não seja numérico.
a) Você pode fazer essa verificação utilizando a função isNan() .
3 - Você se lembrou de limpar os inputs após o clique do botão? Teve que repetir código para isso? Que tal 
refatorar sua função utilizando o finally? */
    
function numberVerification(value1, value2) {
  if (!value1 || !value2) {
    throw new Error('Ambos valores devem ser preenchidos!');
  } 
}
function sum() {
  try {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  numberVerification(value1, value2);
  const result = parseInt(value1) + parseInt(value2); /* o parseInt faz a conversão do valor que chega à função em forma de string */
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
 }  catch (error) {
  document.getElementById('result').innerHTML = `Erro: ${error.message}`;
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
 } 
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}