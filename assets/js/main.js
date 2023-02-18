// # CALCULADORA
// TODO: refatorar o código focando em enxugar as partes repetidas


// -Constantes
const OPERATION = document.querySelector(".js-screen__operation");
const RESULT = document.querySelector(".js-screen__result");
const CLEAR = document.querySelector(".js-keyboard__clear");
const DELETE = document.querySelector(".js-keyboard__delete");
const EQUAL = document.querySelector(".js-keyboard__equal");
const ZERO = document.querySelector(".js-keyboard__zero")
const DOT = document.querySelector(".js-keyboard__dot")

const NUMBERS = document.querySelectorAll(".js-keyboard__number");
const OPERATORS = document.querySelectorAll(".js-keyboard__operator");





// -Eventos
// Limpar a tela ao pressionar no botão "C".
CLEAR.addEventListener("click", _clear);


// Deletar um por um os dígitos da tela.
DELETE.addEventListener("click", _delete);


// Imprimir ponto na tela
DOT.addEventListener("click", typeDot);


// Imprimir zeros na tela
ZERO.addEventListener("click", typeZero);


// Imprimir os números na tela
for (let i = 0; i < NUMBERS.length; i++) {
    NUMBERS[i].addEventListener("click", typeNumber);
}


// Imprimir os operadores matemáticos na tela
for (let i = 0; i < OPERATORS.length; i++) {
    OPERATORS[i].addEventListener("click", typeOperator);
}





// -Funções
// 
function _clear() {
    OPERATION.innerHTML = "";
    RESULT.innerHTML = "";
};


//
function _delete() {
    let lastOperator = OPERATION.innerText.slice(-1);

    if (
        lastOperator != "+" &&
        lastOperator != "-" &&
        lastOperator != "×" &&
        lastOperator != "÷"
    ) {
        RESULT.innerHTML = RESULT.innerText.slice(0, -1);
        OPERATION.innerHTML = OPERATION.innerText.slice(0, -1);
    };
};


//
function typeDot() {
    let display = RESULT.innerHTML.length;
    let dot = RESULT.innerHTML.includes(",");
    let operation = OPERATION.innerHTML;
    let operatorPlus = operation.indexOf("+");
    let operatorMinus = operation.indexOf("-");
    let operatorTimes = operation.indexOf("×");
    let operatorDivide = operation.indexOf("÷");

    if (display < 9 && display > 0) {
        if (dot < 1) {
            RESULT.innerHTML += this.value;
        }
    }

    if (
        operatorPlus >= 0 ||
        operatorMinus >= 0 ||
        operatorTimes >= 0 ||
        operatorDivide >= 0
    ) {
        if (display < 9) {
            OPERATION.innerHTML += RESULT.innerHTML.slice(-1);
        }
    } else {
        OPERATION.innerHTML = RESULT.innerHTML;
    }
}


//
function typeZero() {
    let display = RESULT.innerHTML.length;
    let zero = RESULT.innerHTML.charAt(0);
    let operation = OPERATION.innerHTML;
    let operatorPlus = operation.indexOf("+");
    let operatorMinus = operation.indexOf("-");
    let operatorTimes = operation.indexOf("×");
    let operatorDivide = operation.indexOf("÷");


    if (display < 9) {
        if (zero == "" || zero > 0 || display > 1) {
            RESULT.innerHTML += this.value;
        }
    };

    if (
        operatorPlus >= 0 ||
        operatorMinus >= 0 ||
        operatorTimes >= 0 ||
        operatorDivide >= 0
    ) {
        if (display < 9) {
            OPERATION.innerHTML += RESULT.innerHTML.slice(-1);
        }
    } else {
        OPERATION.innerHTML = RESULT.innerHTML;
    }
}


//
function typeNumber() {
    let display = RESULT.innerHTML.length;
    let zero = RESULT.innerHTML.charAt(0);
    let operation = OPERATION.innerHTML;
    let operatorPlus = operation.indexOf("+");
    let operatorMinus = operation.indexOf("-");
    let operatorTimes = operation.indexOf("×");
    let operatorDivide = operation.indexOf("÷");

    if (display < 9) {
        if (zero == "0" && display == 1) {
            RESULT.innerHTML = "";
            RESULT.innerHTML += this.value;
        } else {
            RESULT.innerHTML += this.value;
        };
    };


    if (
        operatorPlus >= 0 ||
        operatorMinus >= 0 ||
        operatorTimes >= 0 ||
        operatorDivide >= 0
    ) {
        if (display < 9) {
            OPERATION.innerHTML += RESULT.innerHTML.slice(-1);
        }
    } else {
        OPERATION.innerHTML = RESULT.innerHTML;
    }

};


function typeOperator() {
    let display = OPERATION.innerHTML.length;
    let lastOperator = OPERATION.innerText.charAt(display - 1);
    let operation = OPERATION.innerHTML;
    let operatorPlus = operation.indexOf("+");
    let operatorMinus = operation.indexOf("-");
    let operatorTimes = operation.indexOf("×");
    let operatorDivide = operation.indexOf("÷");

    if (display > 0) {
        if (
            operatorPlus < 0 &&
            operatorMinus < 0 &&
            operatorTimes < 0 &&
            operatorDivide < 0
        ) {
            if (
                lastOperator != "+" &&
                lastOperator != "-" &&
                lastOperator != "×" &&
                lastOperator != "÷"
            ) {
                OPERATION.innerHTML += this.value;
                RESULT.innerHTML = "";
            }
        } else if (
            lastOperator == "+" ||
            lastOperator == "-" ||
            lastOperator == "×" ||
            lastOperator == "÷"
        ) {
            OPERATION.innerHTML = OPERATION.innerText.slice(0, -1);
            OPERATION.innerHTML += this.value;
        };
    };
};



// TODO:
EQUAL.addEventListener("click", typeEqual);

function typeEqual() {

}


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