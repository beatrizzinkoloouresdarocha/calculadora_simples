function addInput(value) {
    const input = document.getElementById('numero');
    input.value += value;
}

function clearInput() {
    document.getElementById('numero').value = '';
}

function backspaceInput() {
    const input = document.getElementById('numero');
    input.value = input.value.slice(0, -1);
}

function evaluateExpression(expression) {
    return new Function('return ' + expression)();
}

function calculateResult() {
    const input = document.getElementById('numero');
    try {
        const result = evaluateExpression(input.value.replace('÷', '/').replace('×', '*'));
        if (!isNaN(result)) {
            input.value = result;
        } else {
            throw new Error('Erro de cálculo');
        }
    } catch (error) {
        alert('Erro ao calcular. Certifique-se de que a expressão é válida.');
        clearInput();
    }
}

document.getElementById('form-calculadora').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateResult();
});

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[\d\.\+\-\*\/]/.test(key)) {
        addInput(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        backspaceInput();
    }
});
