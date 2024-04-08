const tecnologias = ["while", "for","do while","if","else","ifelse","condicional","printf","scanf","f","c","d","s","n"];
const letrasErradas = [];
const letrasCorretas = [];
let indiceAleatorio; // Variável para armazenar o índice da pergunta selecionada
let palavraSecreta; // Variável para armazenar a palavra secreta atual
let respostaCorreta; // Variável para armazenar a resposta correta da pergunta atual

// Array de perguntas e respostas
var perguntasRespostas = [
  { 
    pergunta: "Em C, qual estrutura de repetição é utilizada para percorrer uma coleção de elementos?",
    respostaCorreta: "for"
  },
  { 
    pergunta: "Qual estrutura de repetição em C é mais adequada quando a condição de repetição pode ser alterada dinamicamente durante a execução?",
    respostaCorreta: "while"
  },
  { 
    pergunta: "Em C, qual estrutura de repetição é mais recomendada para implementar um menu de opções em um programa?",
    respostaCorreta: "dowhile"
  },
  { 
    pergunta: "Qual estrutura de repetição em C é mais comumente usada para um número fixo de iterações?",
    respostaCorreta: "for"
  },
  { 
    pergunta: "Em C, qual estrutura de repetição é preferível quando a condição de repetição é conhecida antes da primeira iteração?",
    respostaCorreta: "while"
  },
  { 
    pergunta: "Qual estrutura de repetição em C é mais apropriada quando você precisa garantir que um bloco de código seja executado pelo menos uma vez?",
    respostaCorreta: "dowhile"
  },
  { 
    pergunta: "Em C, qual estrutura de repetição é mais propensa a causar loops infinitos se a condição não for atualizada corretamente?",
    respostaCorreta: "while"
  },
  { 
    pergunta: "Qual estrutura de repetição em C é utilizada para iterar sobre os elementos de uma matriz?",
    respostaCorreta: "for"
  },
  { 
    pergunta: "Em C, qual estrutura de repetição é comumente usada para processar uma sequência de valores de entrada até que um valor específico seja encontrado?",
    respostaCorreta: "while"
  },
  { 
    pergunta: "Em C, qual estrutura de repetição é frequentemente usada para implementar um contador?",
    respostaCorreta: "for"
  },
  { 
    pergunta: "Qual estrutura de repetição em C é adequada quando a quantidade de iterações é desconhecida e a condição de repetição precisa ser verificada no início do loop?",
    respostaCorreta: "while"
  },
  { 
    pergunta: "Qual estrutura de repetição em C é mais apropriada quando a execução do bloco de código precisa ser garantida pelo menos uma vez, independentemente da condição de repetição?",
    respostaCorreta: "dowhile"
  },
  { 
    pergunta: "Em C, qual estrutura de repetição é usada para processar um bloco de código até que a condição especificada seja falsa?",
    respostaCorreta: "dowhile"
  },
  { 
    pergunta: "Em C, qual estrutura de repetição é recomendada quando o número de iterações é conhecido de antemão?",
    respostaCorreta: "for"
  },
  { 
    pergunta: "Qual estrutura de repetição em C é adequada quando você precisa garantir que um bloco de código seja executado pelo menos uma vez, mas não sabe ao certo quantas vezes ele será repetido?",
    respostaCorreta: "dowhile"
  },
  { 
    pergunta: "Em C, qual estrutura de repetição é geralmente usada quando a condição de repetição precisa ser verificada no início do loop?",
    respostaCorreta: "while"
  },
  { 
    pergunta: "Qual estrutura de repetição em C é preferível quando você sabe exatamente quantas vezes o loop deve ser executado?",
    respostaCorreta: "for"
  },
  { 
    pergunta: "Qual estrutura de repetição em C é recomendada quando você precisa iterar sobre os elementos de uma coleção de maneira ordenada?",
    respostaCorreta: "for"
  },
  { 
    pergunta: "Em C, qual estrutura de repetição é mais adequada para percorrer os caracteres de uma string?",
    respostaCorreta: "for"
  },
  { 
    pergunta: "Qual estrutura de repetição em C é comumente usada para processar um conjunto de instruções até que uma condição específica seja atendida?",
    respostaCorreta: "while"
  },
  { 
    pergunta: "Qual é a palavra-chave em C usada para definir um bloco de código a ser executado se a condição anterior for falsa?",
    respostaCorreta: "else"
  },
  { 
    pergunta: "Qual é o nome da estrutura de controle em C que permite executar um bloco de código se uma condição for verdadeira e outro bloco se a condição for falsa?",
    respostaCorreta: "else"
  },
  { 
    pergunta: "Qual é o papel do 'else' em uma estrutura de controle em C?",
    respostaCorreta: "condicional"
  },

  { 
    pergunta: "Qual é o objetivo principal da palavra-chave 'else' em uma instrução em C?",
    respostaCorreta: "else"
  },
{ 
    pergunta: "Em C, qual estrutura de seleção é usada para executar um bloco de código se uma condição for verdadeira?",
    respostaCorreta: "if"
  },
 { 
    pergunta: "Qual estrutura de seleção em C é usada quando você precisa executar um bloco de código se uma condição for verdadeira e outro bloco de código se a condição for falsa?",
    respostaCorreta: "ifelse"
  },
  { 
    pergunta: "Em C, qual estrutura de seleção é usada quando você precisa executar diferentes blocos de código com base no valor de uma variável?",
    respostaCorreta: "ifelse"
  },
  { 
    pergunta: "Em C, qual estrutura de seleção é usada para executar diferentes ações com base no valor de uma expressão?",
    respostaCorreta: "ifelse"
  },
 { 
    pergunta: "Em C, qual estrutura de seleção é usada quando você precisa verificar uma condição e executar diferentes ações com base em seu resultado?",
    respostaCorreta: "ifelse"
  },
{ 
    pergunta: "Em C, qual estrutura de seleção é usada quando você precisa executar diferentes blocos de código com base em múltiplas condições?",
    respostaCorreta: "ifelse"
  },
  { 
    pergunta:"qual função é utilizada para imprimir dados na tela em C?",
    respostaCorreta: "printf"
  },
{ 
    pergunta:"Como você lê um número de ponto flutuante que o usuário digitou em C?",
    respostaCorreta: "f"
  },
{ 
    pergunta:"Como você lê um caractere único do usuário em C?",
    respostaCorreta: "c"
  },
{ 
    pergunta:"Como você formata a saída de dados para imprimir um caractere de nova linha usando `printf` em C?",
    respostaCorreta: "n"
  },
{ 
    pergunta:"Qual função em C é utilizada para receber entrada de dados do usuário?",
    respostaCorreta: "scanf"
  },
{ 
    pergunta:"Como você imprime um número inteiro usando printf em C?",
    respostaCorreta: "d"
  },
{ 
    pergunta:"Como você lê uma string do usuário em C?",
    respostaCorreta: "s"
  },




];



// Escolha aleatória de uma pergunta
function escolherPerguntaAleatoria() {
  indiceAleatorio = Math.floor(Math.random() * perguntasRespostas.length);
  return perguntasRespostas[indiceAleatorio];
}

function iniciarJogo() {
  const perguntaAleatoria = escolherPerguntaAleatoria();
  palavraSecreta = perguntaAleatoria.respostaCorreta;
  respostaCorreta = perguntaAleatoria.respostaCorreta;
  document.getElementById("pergunta").innerText = perguntaAleatoria.pergunta
}

document.addEventListener("keydown", (evento) => {
  const codigo = evento.keyCode; // 65 - 90 (intervalo)
  if (isLetra(codigo)) {
    const letra = evento.key;
    if (letrasErradas.includes(letra) || letrasCorretas.includes(letra)) {
      mostrarAvisoLetraRepetida();
    } else {
      if (respostaCorreta.includes(letra)) {
        letrasCorretas.push(letra);
      } else {
        letrasErradas.push(letra);
      }
    }
    atualizarJogo();
  }
});

function atualizarJogo() {
  mostrarLetrasErradas();
  mostrarLetrasCertas();
  desenharForca();
  checarJogo();
}

function mostrarLetrasErradas() {
  const div = document.querySelector(".letras-erradas-container");
  div.innerHTML = "<h3>Letras erradas</h3>";
  letrasErradas.forEach((letra) => {
    div.innerHTML += `<span>${letra}</span>`;
  });
}

function mostrarLetrasCertas() {
  const container = document.querySelector(".palavra-secreta-container");
  container.innerHTML = "";
  palavraSecreta.split("").forEach((letra) => {
    if (letrasCorretas.includes(letra)) {
      container.innerHTML += `<span>${letra}</span>`;
    } else {
      container.innerHTML += `<span>_</span>`;
    }
  });
}

function checarJogo() {
  let mensagem = "";
  const container = document.querySelector(".palavra-secreta-container");
  const partesCorpo = document.querySelectorAll(".forca-parte");

  if (letrasErradas.length === partesCorpo.length) {
    mensagem = "Fim de jogo! Você perdeu!";
  }

  if (respostaCorreta === container.innerText) {
    mensagem = "Parabéns! Você ganhou!";
  }

  if (mensagem) {
    document.querySelector("#mensagem").innerHTML = mensagem;
    document.querySelector(".popup-container").style.display = "flex";
  }
}

function desenharForca() {
  const partesCorpo = document.querySelectorAll(".forca-parte");
  for (let i = 0; i < letrasErradas.length; i++) {
    partesCorpo[i].style.display = "block";
  }
}

function mostrarAvisoLetraRepetida() {
  const aviso = document.querySelector(".aviso-palavra-repetida");
  aviso.classList.add("show");
  setTimeout(() => {
    aviso.classList.remove("show");
  }, 1000);
}

function isLetra(codigo) {
  return codigo >= 65 && codigo <= 90;
}

function reiniciarJogo() {
  window.location.reload();
}

// Iniciar o jogo quando a página é carregada
window.addEventListener("load", iniciarJogo);