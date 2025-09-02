// Funciones de la calculadora - Lab 9
// Rama: feature/operacion-resta

// Función para obtener los números de los campos de entrada
function obtenerNumeros() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingresa dos números válidos');
        return null;
    }
    
    return { num1, num2 };
}

// Función para mostrar el resultado
function mostrarResultado(operacion, resultado) {
    document.getElementById('resultado').innerHTML = `${operacion}: ${resultado}`;
}

// Función para sumar dos números
function sumar() {
    const numeros = obtenerNumeros();
    if (numeros) {
        const resultado = numeros.num1 + numeros.num2;
        mostrarResultado('Suma', resultado);
    }
}

// Función para restar dos números
function restar() {
    const numeros = obtenerNumeros();
    if (numeros) {
        const resultado = numeros.num1 - numeros.num2;
        mostrarResultado('Resta', resultado);
    }
}

// Función para multiplicar dos números
function multiplicar() {
    const numeros = obtenerNumeros();
    if (numeros) {
        const resultado = numeros.num1 * numeros.num2;
        mostrarResultado('Multiplicación', resultado);
        
        // Validación adicional para números muy grandes
        if (Math.abs(resultado) > Number.MAX_SAFE_INTEGER) {
            alert('⚠️ El resultado es muy grande y puede no ser preciso');
        }
    }
}

// Función para dividir dos números
function dividir() {
    const numeros = obtenerNumeros();
    if (numeros) {
        if (numeros.num2 === 0) {
            alert('❌ Error: No se puede dividir por cero');
            return;
        }
        
        const resultado = numeros.num1 / numeros.num2;
        
        // Verificar si el resultado es infinito
        if (!isFinite(resultado)) {
            alert('⚠️ El resultado es infinito o no es un número válido');
            return;
        }
        
        // Mostrar resultado con formato
        const resultadoFormateado = Number.isInteger(resultado) ? resultado : resultado.toFixed(4);
        mostrarResultado('División', resultadoFormateado);
    }
}

// Función para calcular el factorial de un número
function factorial() {
    const num1 = parseFloat(document.getElementById('num1').value);
    
    if (isNaN(num1)) {
        alert('Por favor, ingresa un número válido');
        return;
    }
    
    if (num1 < 0 || !Number.isInteger(num1)) {
        alert('❌ Error: El factorial solo se puede calcular para números enteros no negativos');
        return;
    }
    
    // Validar números muy grandes para evitar desbordamiento
    if (num1 > 170) {
        alert('⚠️ El número es muy grande para calcular el factorial con precisión');
        return;
    }
    
    let resultado = 1;
    for (let i = 2; i <= num1; i++) {
        resultado *= i;
    }
    
    // Formatear resultado para números grandes
    const resultadoFormateado = resultado.toLocaleString('es-ES');
    mostrarResultado('Factorial', resultadoFormateado);
}

// Función para calcular el exponente de un número
function exponente() {
    const numeros = obtenerNumeros();
    if (numeros) {
        const resultado = Math.pow(numeros.num1, numeros.num2);
        mostrarResultado('Exponente', resultado);
    }
}

// Función para calcular la raíz cuadrada de un número
function raizCuadrada() {
    const num1 = parseFloat(document.getElementById('num1').value);
    
    if (isNaN(num1)) {
        alert('Por favor, ingresa un número válido');
        return;
    }
    
    if (num1 < 0) {
        alert('No se puede calcular la raíz cuadrada de un número negativo');
        return;
    }
    
    const resultado = Math.sqrt(num1);
    mostrarResultado('Raíz Cuadrada', resultado);
}
