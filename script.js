let display = document.querySelector("#display");
let buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let value = button.textContent;

        if (value == "C") {
            display.textContent = "";
        }

        else if (value == "⌫") {
            display.textContent = display.textContent.slice(0, -1);
        }

        else if (value == "=") {

            let expression = display.textContent;

            expression = expression.replaceAll("×", "*");
            expression = expression.replaceAll("÷", "/");

            display.textContent = eval(expression);
        }

        else {
            display.textContent += value;
        }

    });

});