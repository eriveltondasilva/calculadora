"use strict";

// #CALCULADORA
// TODO: refatorar o código focando em enxugar as partes repetidas e desnecessárias
// *Constantes
const SCREEN_OPERATION = document.querySelector(".js-screen__operation");
const SCREEN_RESULT    = document.querySelector(".js-screen__result");
const SCREEN_EQUAL     = document.querySelector(".js-screen__equal");

const KEY_CLEAR  = document.querySelector(".js-keyboard__clear");
const KEY_DELETE = document.querySelector(".js-keyboard__delete");
const KEY_EQUAL  = document.querySelector(".js-keyboard__equal");
const KEY_DOT    = document.querySelector(".js-keyboard__dot");
const KEY_ZERO   = document.querySelector(".js-keyboard__zero");

const KEY_NUMBERS   = document.querySelectorAll(".js-keyboard__number");
const KEY_OPERATORS = document.querySelectorAll(".js-keyboard__operator");

let display_limiter = 9;
//
//
//
//
//
// *Eventos & Funções
// Limpa a tela ao pressionar no botão "C".
KEY_CLEAR.addEventListener("click", typeClear);

function typeClear() {
  SCREEN_OPERATION.innerHTML = "";
  SCREEN_RESULT.innerHTML    = "";
  SCREEN_EQUAL.innerHTML     = "";
}
//
//
//
// Deleta os dígitos da tela da direita para a esquerda.
KEY_DELETE.addEventListener("click", typeDelete);

function typeDelete() {
  let operation_display_length = SCREEN_OPERATION.innerHTML.length;
  let result_display_length    = SCREEN_RESULT.innerHTML.length;

  if (SCREEN_EQUAL.innerHTML) {
    return;
  }

  // Retorna o primeiro número digitado ao apertar deletar quando o result não tiver conteúdo
  if (operation_display_length > 0 && result_display_length === 0) {
    SCREEN_RESULT.innerHTML    = SCREEN_OPERATION.innerHTML.slice(0, -1);
    SCREEN_OPERATION.innerHTML = "";
    return;
  }

  SCREEN_RESULT.innerHTML = SCREEN_RESULT.innerHTML.slice(0, -1);
}
//
//
//
// Imprime os números na tela
KEY_NUMBERS.forEach((number) => number.addEventListener("click", typeNumbers));

function typeNumbers() {
  let display_length  = SCREEN_RESULT.innerHTML.length;
  let first_character = SCREEN_RESULT.innerHTML.charAt(0);

  if (display_length === display_limiter) {
    return;
  }

  if (first_character == 0 && display_length == 1) {
    SCREEN_RESULT.innerHTML = "";
  }

  if (SCREEN_EQUAL.innerHTML) {
    SCREEN_OPERATION.innerHTML = "";
    SCREEN_RESULT.innerHTML    = "";
  }

  SCREEN_RESULT.innerHTML += this.value;
  SCREEN_EQUAL.innerHTML   = "";
}
//
//
//
// Imprime zeros na tela
KEY_ZERO.addEventListener("click", typeZero);

function typeZero() {
  let display_length  = SCREEN_RESULT.innerHTML.length;
  let first_character = SCREEN_RESULT.innerHTML.charAt(0);

  if (display_length === display_limiter) {
    return;
  }

  // Impede que exista mais de um zero do início do número
  if (first_character == 0 && display_length == 1) {
    return;
  }

  if (SCREEN_EQUAL.innerHTML) {
    SCREEN_OPERATION.innerHTML = "";
    SCREEN_RESULT.innerHTML    = "";
  }

  SCREEN_RESULT.innerHTML += this.value;
  SCREEN_EQUAL.innerHTML   = "";
}
//
//
//
// Imprime o ponto na tela para os números decimais
KEY_DOT.addEventListener("click", typeDot);

function typeDot() {
  let display_length = SCREEN_RESULT.innerHTML.length;
  let dot_limiter    = SCREEN_RESULT.innerHTML.includes(",");

  if (display_length === 0) {
    SCREEN_RESULT.innerHTML = 0;
  }

  if (dot_limiter) {
    return;
  }

  if (SCREEN_EQUAL.innerHTML) {
    SCREEN_OPERATION.innerHTML = "";
    SCREEN_RESULT.innerHTML    = 0;
  }

  SCREEN_RESULT.innerHTML += this.value;
  SCREEN_EQUAL.innerHTML   = "";
}
//
//
//
// Imprimir os operadores matemáticos na tela
KEY_OPERATORS.forEach((operator) =>
  operator.addEventListener("click", typeOperators)
);

function typeOperators() {
  const pattern                  = /[-+×÷]/;
  let   operator_limiter         = pattern.test(SCREEN_OPERATION.innerHTML);
  let   last_operator            = pattern.test(SCREEN_OPERATION.innerHTML.slice(-1));
  let   result_display_length    = SCREEN_RESULT.innerHTML.length;
  let   operation_display_length = SCREEN_OPERATION.innerHTML.length;

  // Impede que exista um operador matemático no início do número
  if (!result_display_length && !operation_display_length) {
    alert(
      "Você não pode inserir operadores matemáticos\n sem antes inserir um número."
    );
    return;
  }

  // Quando o último digito for um operador matemático, apaga-o e insere o novo
  if (last_operator === true && result_display_length === 0) {
    SCREEN_OPERATION.innerHTML  = SCREEN_OPERATION.innerHTML.slice(0, -1);
    SCREEN_OPERATION.innerHTML += this.value;
    return;
  }

  // Impede que exista mais de um operador matemático no número
  if (operator_limiter) {
    return;
  }

  SCREEN_OPERATION.innerHTML  = SCREEN_RESULT.innerHTML;
  SCREEN_OPERATION.innerHTML += this.value;
  SCREEN_RESULT.innerHTML     = "";
}
//
//
//
// ...
KEY_EQUAL.addEventListener("click", typeEqual);

function typeEqual() {
  let operation_display_length = SCREEN_OPERATION.innerHTML.length;
  let result_display_length    = SCREEN_RESULT.innerHTML.length;
  let result                   = "";
  // const pattern = /[-+×÷]/;
  // let operation_display_number = SCREEN_OPERATION.innerHTML.split(pattern);
  // operation_display_number = number(operation_display_number);
  // let first_number = operation_display_number[0];
  // let second_number = operation_display_number[1];

  if (operation_display_length === 0 || result_display_length === 0) {
    return;
  }

  if (SCREEN_EQUAL.innerHTML) {
    return;
  }

  SCREEN_OPERATION.innerHTML += SCREEN_RESULT.innerHTML;
  SCREEN_RESULT.innerHTML     = "";

  result =
    "" +
    eval(
      SCREEN_OPERATION.innerHTML
        .replaceAll(",", ".")
        .replace("×", "*")
        .replace("÷", "/")
    );
    
  SCREEN_RESULT.innerHTML = result.replace(".", ",");
  SCREEN_EQUAL.innerHTML  = "=";
}
//
//
//
//
//
// EQUAL.addEventListener("click", _equal);

// function _equal() {
//     let q = OPERATION.innerHTML;

//     switch (key) {
//         case "+":

//             break;

//         case "-":

//             break;

//         case "&divide":

//             break;

//         case "&times":

//             break;

//         default:
//             break;
//     }

//     RESULT.innerHTML = "= " + q;
// };
