// # CALCULADORA

const OPERATION = document.querySelector(".js-screen__operation");
const RESULT = document.querySelector(".js-screen__result");

const NUMBERS = document.querySelectorAll(".js-keyboard__number");
const OPERATORS = document.querySelectorAll(".js-keyboard__operator");
const CLEAR = document.querySelector(".js-keyboard__clear");
const DELETE = document.querySelector(".js-keyboard__delete");





// Imprimir os números na tela
for (let i = 0; i < NUMBERS.length; i++) {
    NUMBERS[i].addEventListener("click", typeNumber);

    function typeNumber() {
        OPERATION.innerHTML += this.value;
    };


};


// Imprimir os operadores matemáticos na tela
for (let j = 0; j < OPERATORS.length; j++) {
    OPERATORS[j].addEventListener("click", typeOperator);

    function typeOperator() {
        let op = OPERATION.innerHTML

        if (op.length > 0) {
            OPERATION.innerHTML += this.value;
        }
    }
}





// Limpar a tela ao pressionar no botão "C".
CLEAR.addEventListener("click", _clear);

function _clear() {
    OPERATION.innerHTML = "";
    RESULT.innerHTML = "= 0";
}


// Deletar os dígitos do .screen__operation.
DELETE.addEventListener("click", _delete);

function _delete() {

    OPERATION.innerHTML = OPERATION.innerText.slice(0, -1);
}