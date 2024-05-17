document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('factorialForm');
    const numberInput = document.getElementById('numberInput');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const input = numberInput.value.trim();
        
        if (isNaN(input) || input === '' || !Number.isInteger(parseFloat(input)) || input < 0) {
            result.textContent = 'Por favor, ingrese un número entero no negativo válido.';
            return;
        }

        const number = parseInt(input);
        const factorial = calculateFactorial(number);
        result.textContent = `El factorial de ${number} es ${factorial}.`;
    });

    function calculateFactorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * calculateFactorial(n - 1);
    }
});


