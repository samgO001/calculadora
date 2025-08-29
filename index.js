// Calculadora con todas las operaciones básicas
function calculadora() {
  var opcion = prompt(
    "Elija una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Factorial\n6. Exponente\n7. Raíz cuadrada"
  );
  var num1 = parseFloat(prompt("Ingrese el primer número:"));
  var num2, resultado;

  if (opcion !== "5" && opcion !== "7") {
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
  }

  switch (opcion) {
    case "1":
      resultado = sumar(num1, num2);
      break;
    case "2":
      resultado = restar(num1, num2);
      break;
    case "3":
      resultado = multiplicar(num1, num2);
      break;
    case "4":
      resultado = dividir(num1, num2);
      break;
    case "5":
      resultado = factorial(num1);
      break;
    case "6":
      resultado = exponente(num1, num2);
      break;
    case "7":
      resultado = raizCuadrada(num1);
      break;
    default:
      resultado = "Opción no válida";
      break;
  }

  alert("El resultado es: " + resultado);
}

// Función para sumar dos números
function sumar(num1, num2) {
  return num1 + num2;
}

// Función para restar dos números
function restar(num1, num2) {
  return num1 - num2;
}

// Función para multiplicar dos números
function multiplicar(num1, num2) {
  return num1 * num2;
}

// Función para dividir dos números
function dividir(num1, num2) {
  if (num2 === 0) {
    return "Error: No se puede dividir por cero";
  }
  return num1 / num2;
}

// Función para calcular el factorial de un número
function factorial(num) {
  if (num < 0) {
    return "Error: No se puede calcular factorial de números negativos";
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}

// Función para calcular el exponente de un número
function exponente(base, exponente) {
  return Math.pow(base, exponente);
}

// Función para calcular la raíz cuadrada de un número
function raizCuadrada(num) {
  if (num < 0) {
    return "Error: No se puede calcular raíz cuadrada de números negativos";
  }
  return Math.sqrt(num);
}

// Llamar a la función principal
calculadora();
