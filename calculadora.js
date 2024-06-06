// Função para adicionar valores ao input
function addInput(value) {
    const input = document.getElementById('numero');
    input.value += value;
}

// Função para limpar o input
function clearInput() {
    document.getElementById('numero').value = '';
}

// Função para remover o último caractere do input
function backspaceInput() {
    const input = document.getElementById('numero');
    input.value = input.value.slice(0, -1);
}

// Função para calcular o resultado da expressão no input
function calculateResult() {
    const input = document.getElementById('numero');
    try {
        input.value = eval(input.value.replace('÷', '/').replace('×', '*'));
    } catch (e) {
        alert('Erro na expressão');
        clearInput();
    }
}

// Event listener para o formulário para prevenir o envio e calcular o resultado
document.getElementById('form-calculadora').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateResult();
});
