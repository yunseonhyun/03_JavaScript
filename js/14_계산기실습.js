
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const operator = document.getElementById("operator");
    const calculateBtn = document.getElementById("calculateBtn");
    const calcResult = document.getElementById("calc-result");

    calculateBtn.addEventListener("click", function() {
        const number1 = Number(num1.value);
        const number2 = Number(num2.value);
        const op = operator.value;

        if(op == "+") {
            calcResult.innerText = number1 + number2;
        } else if( op == "-") {
            calcResult.innerText = number1 - number2;
        }else if( op == "*") {
            calcResult.innerText = number1 * number2;
        } else {
            calcResult.innerText = number1 / number2;
        }


    })

    