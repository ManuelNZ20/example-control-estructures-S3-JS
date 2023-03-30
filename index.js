// Ejercicios
// Calcular el factorial de un número utilizando bucle for
let number = 5,
  fact = 1;
for (let i = 1; i <= number; i++) {
  fact *= i;
}
console.log(fact);

// Calcular el factorial de un número utilizando bucle while
let i = 1;
fact = 1;
number = 7;
while (i <= number) {
  fact *= i++;
}

console.log(fact);

// Calcular el factorial de un número utilizando el bucle while, una bifuración y una sentencia break
i = 1;
fact = 1;
number = 6;
while (true) {
  fact *= i++;
  if (i > number) {
    break;
  }
}

console.log(fact);
