// # CALCULADORA

const OPERATION = document.querySelector(".js-screen__operation");
const RESULT = document.querySelector(".js-screen__result");
const CLEAR = document.querySelector(".js-keyboard__clear");
const DELETE = document.querySelector(".js-keyboard__delete");
const EQUAL = document.querySelector(".js-keyboard__equal");
const ZERO = document.querySelector(".js-keyboard__zero")
const DOT = document.querySelector(".js-keyboard__dot")

const NUMBERS = document.querySelectorAll(".js-keyboard__number");
const OPERATORS = document.querySelectorAll(".js-keyboard__operator");





// Limpar a tela ao pressionar no botão "C".
CLEAR.addEventListener("click", _clear);

function _clear() {
    OPERATION.innerHTML = "";
    RESULT.innerHTML = "";
};


// Deletar um por um os dígitos da tela.
DELETE.addEventListener("click", _delete);

function _delete() {
    RESULT.innerHTML = RESULT.innerText.slice(0, -1);
    OPERATION.innerHTML = RESULT.innerHTML;
};


// Imprimir zeros na tela
DOT.addEventListener("click", typeDot);

function typeDot() {
    let display = RESULT.innerHTML.length;
    let dot = RESULT.innerHTML.includes(",");

    if (display < 8 && display > 0) {
        if (dot < 1) {
            RESULT.innerHTML += this.value;
        }
    }

    OPERATION.innerHTML = RESULT.innerHTML;
}


// Imprimir zeros na tela
ZERO.addEventListener("click", typeZero);

function typeZero() {
    let display = RESULT.innerHTML.length;
    let zero = RESULT.innerHTML.charAt(0);

    if (display < 8) {
        if (zero == "" || zero > 0 || display > 1) {
            RESULT.innerHTML += this.value;
        }
    };

    OPERATION.innerHTML = RESULT.innerHTML;
}



// Imprimir os números na tela
for (let i = 0; i < NUMBERS.length; i++) {
    NUMBERS[i].addEventListener("click", typeNumber);

    function typeNumber() {
        let display = RESULT.innerHTML.length;
        let zero = RESULT.innerHTML.charAt(0);

        if (display < 8) {
            if (zero == "0" && display < 1) {
                RESULT.innerHTML = "";
                RESULT.innerHTML += this.value;
            } else {
                RESULT.innerHTML += this.value;
            }
        };

        OPERATION.innerHTML = RESULT.innerHTML;
    };
};


// Imprimir os operadores matemáticos na tela
for (let i = 0; i < OPERATORS.length; i++) {
    OPERATORS[i].addEventListener("click", typeOperator);

    function typeOperator() {
        let display = OPERATION.innerHTML.length;
        let operator = OPERATION.innerHTML.includes(this.value);

        if (display > 0 && display < 8) {
            if (operator < 1) {

                OPERATION.innerHTML += this.value;
                RESULT.innerHTML = "";


            }
        };
    };

}




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