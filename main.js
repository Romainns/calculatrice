let calculer = document.getElementById('calculate');
let historique = [];
let compteur = 1;

calculer.addEventListener('click', function() {
    let number1 = document.getElementById('number1');
    let number2 = document.getElementById('number2');
    let operation = document.getElementById('operation');
    let resultat = document.querySelector('.result');
    let historyDiv = document.getElementById('history');

    let num1 = parseFloat(number1.value);
    let num2 = parseFloat(number2.value);
    let result;

    if (operation.value == '+') {
        result = num1 + num2;
    } else if (operation.value == '-') {
        result = num1 - num2;
    } else if (operation.value == '*') {
        result = num1 * num2;
    } else if (operation.value == '/') {
        result = num1 / num2;
    } else {
        resultat.textContent = 'Opération non valide';
        return;
    }

    resultat.textContent = 'Le résultat est : ' + result;

    let operationText = `N°${compteur} : ${num1} ${operation.value} ${num2} = ${result}`;
    historique.push(operationText);
    compteur++;

    let p = document.createElement('p');
    p.textContent = operationText;
    historyDiv.appendChild(p);
});