const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    
    
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor, insira valores válidos para altura e peso.");
        return;
    }
    

    const imc = (peso / (altura * altura)).toFixed(2);
    
    
    const valueElement = document.getElementById('value');
    const descriptionElement = document.getElementById('description');
    
    let description = '';

    
    document.getElementById('result').classList.remove('hidden');

    
    if (imc < 17) {
        description = "Muito abaixo do peso";
    } else if (imc >= 17 && imc <= 18.49) {
        description = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.99) {
        description = "Peso normal";
    } else if (imc >= 25 && imc <= 29.99) {
        description = "Acima do peso";
    } else if (imc >= 30 && imc <= 34.99) {
        description = "Obesidade 1";
    } else if (imc >= 35 && imc <= 39.99) {
        description = "Obesidade 2 (severa)";
    } else if (imc >= 40) {
        description = "Obesidade 3 (mórbida)";
    }

    
    valueElement.textContent = imc;
    descriptionElement.innerHTML = description;
});

