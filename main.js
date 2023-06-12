// Se deben crear todas las restricciones en caso que los valores ingresados
// no sean los correctos (int cuando corresponda, string cuando corresponda)
// Restricciones creadas hasta el ejercicio 10
// Faltan 5 ejercicios.


// 1) Calcular perimetro de un cuadrado
function calcularPerimetro() {
  let lado = parseFloat(prompt("Ingrese el valor del lado del cuadrado:"));

  if (isNaN(lado)) {
    alert("Por favor, ingrese un numero valido.");
    return;
  } else if (lado <= 0) {
    alert("El valor ingresado no puede ser menor o igual a cero.");
    return;
  }

  let perimetro = lado * 4;
  alert("El perímetro del cuadrado es: " + perimetro);
}

// 2) Calcular suma y producto
function calcularSumaProducto() {
  let num1 = parseFloat(prompt("Ingrese el primer número:"));
  let num2 = parseFloat(prompt("Ingrese el segundo número:"));
  let num3 = parseFloat(prompt("Ingrese el tercer número:"));
  let num4 = parseFloat(prompt("Ingrese el cuarto número:"));

  if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
    alert("Por favor, ingrese numeros validos en todos los campos.");
    return;
  }

  let suma = num1 + num2;
  let producto = num3 * num4;
  alert("La suma de los dos primeros numeros es: " + suma);
  alert("El producto del tercer y cuarto número es: " + producto);
}


// 3) Calcular suma y producto (4 valores)
function calcularSumaProducto2() {
  let num1 = parseFloat(prompt("Ingrese el primer número:"));
  let num2 = parseFloat(prompt("Ingrese el segundo número:"));
  let num3 = parseFloat(prompt("Ingrese el tercer número:"));
  let num4 = parseFloat(prompt("Ingrese el cuarto número:"));

  if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
    alert("Por favor, ingrese numeros validos en todos los campos.");
    return;
  }

  let suma = num1 + num2 + num3 + num4;
  let producto = num1 * num2 * num3 * num4;
  alert("La suma de los cuatro números es: " + suma);
  alert("El producto de los cuatro números es: " + producto);
}


// 4) Calcular aumento de sueldo
function calcularAumentoSueldo() {
  let sueldo = parseFloat(prompt("Ingrese el sueldo:"));
  let antiguedad = parseInt(prompt("Ingrese los años de antigüedad:"));
  let sueldoFinal = 0;

  if (isNaN(sueldo) || isNaN(antiguedad)) {
    alert("Por favor, ingrese numeros validos en todos los campos.");
    return;
  }

  if (sueldo < 500) {
    if (antiguedad >= 10) {
      sueldoFinal = sueldo * 1.2;
    } else {
      sueldoFinal = sueldo * 1.05;
    }
  } else {
    sueldoFinal = sueldo;
  }

  alert("El sueldo a pagar es: " + sueldoFinal);
}

  

// 5) Imprimir serie
function imprimirSerie() {
    let serie = "";

    for (let i = 11; i <= 275; i += 11) {
        serie += i + ", ";
    }

    alert("La serie es: " + serie);
}

// 6) Contar valores
function contarValores() {
  let negativos = 0;
  let positivos = 0;
  let multiplos15 = 0;
  let acumuladoPares = 0;

  for (let i = 1; i <= 10; i++) {
    let valor = parseInt(prompt("Ingrese el valor " + i + ":"));

    if (isNaN(valor)) {
      alert("Por favor, ingrese un valor numerico valido.");
      return;
    }

    if (valor < 0) {
      negativos++;
    } else if (valor > 0) {
      positivos++;
    }

    if (valor % 15 === 0) {
      multiplos15++;
    }

    if (valor % 2 === 0) {
      acumuladoPares += valor;
    }
  }

  alert("Cantidad de valores negativos: " + negativos);
  alert("Cantidad de valores positivos: " + positivos);
  alert("Cantidad de múltiplos de 15: " + multiplos15);
  alert("Valor sumado de los números pares: " + acumuladoPares);
}

// 7) Mostrar secuencia
function mostrarSecuencia() {
  let menor = parseInt(prompt("Ingrese el numero menor:"));
  let mayor = parseInt(prompt("Ingrese el numero mayor:"));

  if (isNaN(menor) || isNaN(mayor)) {
    alert("Por favor, ingrese numeros validos en todos los campos.");
    return;
  }

  if (menor <= mayor) {
    let secuencia = "";

    for (let i = menor; i <= mayor; i++) {
      secuencia += i + ", ";
    }

    alert("La secuencia es: " + secuencia);
  } else {
    alert("El primer numero ingresado debe ser menor al segundo numero.");
  }
}


// 8) Ordenar numeros
function ordenarNumeros() {
  let num1 = parseInt(prompt("Ingrese el primer numero:"));
  let num2 = parseInt(prompt("Ingrese el segundo numero:"));
  let num3 = parseInt(prompt("Ingrese el tercer numero:"));

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Por favor, ingrese valores numéricos validos en todos los campos.");
    return;
  }

  let numeros = [num1, num2, num3];
  let numerosOrdenados = [...numeros].sort((a, b) => a - b);

  alert("Los numeros ordenados de menor a mayor son: " + numerosOrdenados.join(", "));
}


// 9) Calcular valores del vector
const calcularValoresVector = () => {
  let vector = [];

  for (let i = 0; i < 8; i++) {
    let valor = parseFloat(prompt("Ingrese el valor ${i + 1}:"));

    if (isNaN(valor)) {
      alert("Por favor, ingrese un valor numérico válido.");
      return;
    }

    vector.push(valor);
  }

  // Toma el valor del array "vector" y la funcion reduce() para reducir el array a 1 solo valor
  // Los valores son manejados con una funcion acumuladora de flecha que toma los valores a y b
  // "a" es el valor acumulado y "b" el valor actual del array. 0 es el valor inicial de la funcion que se asigna a "a" inicialmente
  // Asi "a" parte de cero y suma el primer valor del array (vector[0]) y se le asigna a "b" ((0 + vector[0] => 0 + valor)) y se acumula.
  let acumuladoTotal = vector.reduce((a, b) => a + b, 0); 


  // Es similar a la funcion de arriba solo que usa un operador ternario para comprobar que los valores del array
  // sean mayores a 36, de ser asi los agrega a la variable creada, sino devuelve el valor acumulado ("a") que se inicializa en cero.
  let acumuladoMayores36 = vector.reduce((a, b) => b > 36 ? a + b : a, 0);


  
  let mayores50 = vector.reduce((a, b) => b > 50 ? a + b: a, 0);

  alert("Valor acumulado de todos los elementos del vector: " + acumuladoTotal);
  alert("Valor acumulado de los elementos mayores a 36: " + acumuladoMayores36);
  alert("Cantidad de valores mayores a 50: " + mayores50);
};



// 10) Mostrar boton presionado
function botonPresionado(event) {
    const botonId = event.target.id;
    
    if (botonId === 'boton1') {
      alert('Presionaste el Boton 1');
    } else if (botonId === 'boton2') {
      alert('Presionaste el Boton 2');
    } else if (botonId === 'boton3') {
      alert('Presionaste el Boton 3');
    }
  }
