let calculer = document.getElementById('calculate');
let historique = [];
let compteur = 1;

calculer.addEventListener('click', function () {
    let number1 = document.getElementById('number1');
    let number2 = document.getElementById('number2');
    let operation = document.getElementById('operation');
    let resultat = document.querySelector('.result');
    let historyDiv = document.getElementById('history');
    let errorMessage = document.querySelector('.error-message');

    // Réinitialisation
    resultat.textContent = '';
    resultat.className = 'result';
    errorMessage.textContent = '';
    number1.classList.remove('error-input');
    number2.classList.remove('error-input');

    let num1 = parseFloat(number1.value);
    let num2 = parseFloat(number2.value);
    let result;

    // Validation des entrées
    let erreur = false;

    if (isNaN(num1)) {
        number1.classList.add('error-input');
        errorMessage.textContent = 'Erreur: Nombre 1 n\'est pas valide';
        erreur = true;
    }

    if (isNaN(num2)) {
        number2.classList.add('error-input');
        errorMessage.textContent = 'Erreur: Nombre 2 n\'est pas valide';
        erreur = true;
    }

    if (operation.value === '+') {
        result = num1 + num2;
    } else if (operation.value === '-') {
        result = num1 - num2;
    } else if (operation.value === '*') {
        result = num1 * num2;
    } else if (operation.value === '/') {
        if (num2 === 0) {
            number2.classList.add('error-input');
            errorMessage.textContent = 'Erreur : division par zéro';
            return;
        }
        result = num1 / num2;
    } else {
        errorMessage.textContent = 'Opération non valide';
        return;
    }

    // Couleur du résultat
    if (result > 0) {
        resultat.classList.add('positive');
    } else if (result < 0) {
        resultat.classList.add('negative');
    }

    resultat.textContent = 'Résultat: ' + result;

    // Historique
    let operationText = `N°${compteur} : ${num1} ${operation.value} ${num2} = ${result}`;
    historique.push(operationText);
    compteur++;

    let p = document.createElement('p');
    p.textContent = operationText;
    historyDiv.appendChild(p);
});
