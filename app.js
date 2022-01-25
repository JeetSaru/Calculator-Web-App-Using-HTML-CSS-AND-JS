// CODE WRITTEN BY CODING DESIGN

let output_screen = document.querySelector('.output_screen');
const equals = document.querySelector('.equals');
const buttons = document.querySelectorAll('.row');

let press_audio = new Audio('Audio/Button.mp3');
let error_audio = new Audio('Audio/Error.mp3');

for (let btn of buttons) {
    for (let operator of btn.children) {
        operator.onclick = function (e) {
            press_audio.play();
            let operator_value = e.target.innerHTML

            switch (operator_value) {
                case '×':
                    output_screen.value += '*';
                    break;
                case '÷':
                    output_screen.value += '/';
                    break;
                case '−':
                    output_screen.value += '-';
                    break;
                case 'log':
                    output_screen.value = Math.log(output_screen.value);
                    break;
                case 'sin':
                    output_screen.value = Math.sin(output_screen.value);
                    break;
                case 'cos':
                    output_screen.value = Math.cos(output_screen.value);
                    break;
                case 'tan':
                    output_screen.value = Math.tan(output_screen.value);
                    break;
                case 'random':
                    output_screen.value = Math.round(Math.random(output_screen.value) * 100);
                    break;
                case '√':
                    output_screen.value = Math.sqrt(output_screen.value);
                    break;
                case 'π':
                    output_screen.value = 3.14159265359;
                    break;
                case 'DEL':
                    output_screen.value = output_screen.value.slice(0, -1);
                    break;
                case 'AC':
                    output_screen.value = '';
                    break;
                case 'x!':
                    let fact = 1;
                    for (let i = 1; i <= parseInt(output_screen.value); i++) {
                        fact = fact * i;
                    }
                    output_screen.value = fact;
                    break;
                default:
                    if (operator_value == '=') {
                        output_screen.value += '';
                    } else {
                        output_screen.value += operator_value;
                    }

            }
        }
    }
}

equals.addEventListener('click', () => {
    try {
        output_screen.value = eval(output_screen.value);
    } catch (err) {
        error_audio.play();
        output_screen.value = "Error";
    }
})