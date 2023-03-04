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

const KEY_NUMBERS   = document.querySelectorAll(".js-keyboard__number");
const KEY_OPERATORS = document.querySelectorAll(".js-keyboard__operator");

let displayLimit = 9;

// *Eventos

// Imprimir os números na tela
KEY_NUMBERS.forEach(function (numbers) {
  numbers.addEventListener("click", typeNumbers);
});

function typeNumbers() {
  let display        = SCREEN_RESULT.innerHTML.length;
  let zero           = SCREEN_RESULT.innerHTML.charAt(0);
  let operation      = SCREEN_OPERATION.innerHTML;
  let operatorPlus   = operation.indexOf("+");
  let operatorMinus  = operation.indexOf("-");
  let operatorTimes  = operation.indexOf("×");
  let operatorDivide = operation.indexOf("÷");

  SCREEN_EQUAL.innerHTML = "";

  if (display < displayLimit) {
    if (zero == "0" && display == 1) {
      SCREEN_RESULT.innerHTML = "";
      SCREEN_RESULT.innerHTML += this.value;
    } else {
      SCREEN_RESULT.innerHTML += this.value;
    }
  }

  if (
    operatorPlus >= 0 ||
    operatorMinus >= 0 ||
    operatorTimes >= 0 ||
    operatorDivide >= 0
  ) {
    if (display < displayLimit) {
      SCREEN_OPERATION.innerHTML += SCREEN_RESULT.innerHTML.slice(-1);
    }
  } else {
    SCREEN_OPERATION.innerHTML = SCREEN_RESULT.innerHTML;
  }
}

// // Limpar a tela ao pressionar no botão "C".
// CLEAR.addEventListener("click", _clear);

// // Deletar um por um os dígitos da tela.
// DELETE.addEventListener("click", _delete);

// // Imprimir ponto na tela
// DOT.addEventListener("click", typeDot);

// // Imprimir zeros na tela
// ZERO.addEventListener("click", typeZero);

// // Imprimir os operadores matemáticos na tela
// for (let i = 0; i < OPERATORS.length; i++) {
//   OPERATORS[i].addEventListener("click", typeOperator);
// }

// // -Funções
// //
// function _clear() {
//   OPERATION.innerHTML = "";
//   RESULT.innerHTML = "";
//   SCREEN__EQUAL.innerHTML = "";
// }

// //
// function _delete() {
//   let lastOperator = OPERATION.innerHTML.slice(-1);

//   if (
//     lastOperator != "+" &&
//     lastOperator != "-" &&
//     lastOperator != "×" &&
//     lastOperator != "÷"
//   ) {
//     RESULT.innerHTML = RESULT.innerText.slice(0, -1);
//     OPERATION.innerHTML = OPERATION.innerText.slice(0, -1);
//     SCREEN__EQUAL.innerHTML = "";
//   }
// }

// //
// function typeDot() {
//   let display = RESULT.innerHTML.length;
//   let dot = RESULT.innerHTML.includes(",");
//   let operation = OPERATION.innerHTML;
//   let operatorPlus = operation.indexOf("+");
//   let operatorMinus = operation.indexOf("-");
//   let operatorTimes = operation.indexOf("×");
//   let operatorDivide = operation.indexOf("÷");

//   if (display < displayLimit && display > 0) {
//     if (dot < 1) {
//       RESULT.innerHTML += this.value;
//       SCREEN__EQUAL.innerHTML = "";
//     }
//   }

//   if (
//     operatorPlus >= 0 ||
//     operatorMinus >= 0 ||
//     operatorTimes >= 0 ||
//     operatorDivide >= 0
//   ) {
//     if (display < displayLimit) {
//       OPERATION.innerHTML += RESULT.innerHTML.slice(-1);
//     }
//   } else {
//     OPERATION.innerHTML = RESULT.innerHTML;
//     SCREEN__EQUAL.innerHTML = "";
//   }
// }

// //
// function typeZero() {
//   let display = RESULT.innerHTML.length;
//   let zero = RESULT.innerHTML.charAt(0);
//   let operation = OPERATION.innerHTML;
//   let operatorPlus = operation.indexOf("+");
//   let operatorMinus = operation.indexOf("-");
//   let operatorTimes = operation.indexOf("×");
//   let operatorDivide = operation.indexOf("÷");

//   if (display < displayLimit) {
//     if (zero == "" || zero > 0 || display > 1) {
//       RESULT.innerHTML += this.value;
//       SCREEN__EQUAL.innerHTML = "";
//     }
//   }

//   if (
//     operatorPlus >= 0 ||
//     operatorMinus >= 0 ||
//     operatorTimes >= 0 ||
//     operatorDivide >= 0
//   ) {
//     if (display < displayLimit) {
//       OPERATION.innerHTML += RESULT.innerHTML.slice(-1);
//     }
//   } else {
//     OPERATION.innerHTML = RESULT.innerHTML;
//   }
// }

// //

// function typeOperator() {
//   let display = OPERATION.innerHTML.length;
//   let lastOperator = OPERATION.innerText.charAt(display - 1);
//   let operation = OPERATION.innerHTML;
//   let operatorPlus = operation.indexOf("+");
//   let operatorMinus = operation.indexOf("-");
//   let operatorTimes = operation.indexOf("×");
//   let operatorDivide = operation.indexOf("÷");
//   let equal = SCREEN__EQUAL.innerText;

//   if (display > 0) {
//     if (
//       operatorPlus < 0 &&
//       operatorMinus < 0 &&
//       operatorTimes < 0 &&
//       operatorDivide < 0
//     ) {
//       if (
//         lastOperator != "+" &&
//         lastOperator != "-" &&
//         lastOperator != "×" &&
//         lastOperator != "÷"
//       ) {
//         OPERATION.innerHTML += this.value;
//         RESULT.innerHTML = "";
//         SCREEN__EQUAL.innerHTML = "";
//       }
//     } else if (
//       lastOperator == "+" ||
//       lastOperator == "-" ||
//       lastOperator == "×" ||
//       lastOperator == "÷"
//     ) {
//       OPERATION.innerHTML = OPERATION.innerText.slice(0, -1);
//       OPERATION.innerHTML += this.value;
//     }
//   }

//   if (equal == "=" && operation == "") {
//     SCREEN__EQUAL.innerHTML = "";
//     OPERATION.innerHTML = RESULT.innerHTML;
//     OPERATION.innerHTML += this.value;
//     RESULT.innerHTML = "";
//   }
// }

// // TODO:
// EQUAL.addEventListener("click", typeEqual);

// function typeEqual() {
//   let display = OPERATION.innerHTML.length;
//   let operation = OPERATION.innerText;
//   let lastOperator = OPERATION.innerText.charAt(display - 1);
//   let operatorPlus = operation.indexOf("+");
//   let operatorMinus = operation.indexOf("-");
//   let operatorTimes = operation.indexOf("×");
//   let operatorDivide = operation.indexOf("÷");
//   let result = "";

//   if (
//     operatorPlus > 0 ||
//     operatorMinus > 0 ||
//     operatorTimes > 0 ||
//     operatorDivide > 0
//   ) {
//     if (
//       lastOperator != "+" &&
//       lastOperator != "-" &&
//       lastOperator != "×" &&
//       lastOperator != "÷"
//     ) {
//       result =
//         "" +
//         eval(
//           OPERATION.innerText
//             .replaceAll(",", ".")
//             .replace("×", "*")
//             .replace("÷", "/")
//         );
//       RESULT.innerHTML = result.replace(".", ",");
//       SCREEN__EQUAL.innerHTML = "= ";
//       OPERATION.innerHTML = "";
//     }
//   }
// }

// lastOperator != "+" || lastOperator != "-" || lastOperator != "&times" || lastOperator != "&divide"

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
