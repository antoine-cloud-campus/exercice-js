    function calculate() {
        const value1 = document.getElementById('value1').value.replace(',', '.');
        const value2 = document.getElementById('value2').value.replace(',', '.');
        const operator = document.getElementById('operator').value;
        let result = '';

        if (isNaN(value1) || isNaN(value2)) {
            alert('Veuillez entrer des valeurs numériques valides.');
            return;
        }

        const num1 = parseFloat(value1);
        const num2 = parseFloat(value2);

        if (operator === '/' && num2 === 0) {
            alert('Impossible de divisé par 0');
            return;
        }

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '%':
                result = num1 % num2;
                break;
            case '**':
                result = num1 ** num2;
                break;
            default:
                alert('Veuillez sélectionner un opérateur valide');
                return;
        }

        result = result.toString().replace('.', ',');

        document.getElementById('result').textContent = `${num1} ${operator} ${num2} = ${result}`;
    }

    const calculator = document.getElementById('calculator');

    function cacherCalculatrice() {
        calculator.classList.add('hidden');
    };

    function afficherCalculatrice() {
        calculator.classList.remove('hidden');
    };
