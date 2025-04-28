function calcularHerencia() {
    const padre = document.getElementById("padre").value;
    const madre = document.getElementById("madre").value;
    
    let combinaciones = [];
    
    // Obtener los alelos de los padres
    let alelosPadre = padre.split('');
    let alelosMadre = madre.split('');

    // Generar todas las combinaciones posibles
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            combinaciones.push(alelosPadre[i] + alelosMadre[j]);
        }
    }

    // Normalizar combinaciones (ordenar alelos)
    combinaciones = combinaciones.map(genotipo => genotipo.split('').sort().join(''));

    // Contar las probabilidades de cada genotipo
    let conteo = { "AA": 0, "Aa": 0, "aa": 0 };
    
    combinaciones.forEach(genotipo => {
        conteo[genotipo]++;
    });

    // Calcular porcentajes
    let total = combinaciones.length;
    let resultadoHTML = `
        <p>AA: ${(conteo["AA"] / total) * 100}%</p>
        <p>Aa: ${(conteo["Aa"] / total) * 100}%</p>
        <p>aa: ${(conteo["aa"] / total) * 100}%</p>
    `;

    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = resultadoHTML;
}

