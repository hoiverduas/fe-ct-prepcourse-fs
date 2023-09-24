/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Esta función toma un argumento "string" y simplemente lo devuelve.
   return string;
}

function suma(x, y) {
   // Esta función toma dos números, "x" e "y", y retorna su suma.
   var result = x + y;
   return result;
}

function resta(x, y) {
   // Esta función toma dos números, "x" e "y", y retorna su resta.
   var result = x - y;
   return result;
}

function divide(x, y) {
   // Esta función toma dos números, "x" e "y", y retorna el resultado de su división.
   var result = x / y;
   return result;
}

function multiplica(x, y) {
   // Esta función toma dos números, "x" e "y", y retorna el resultado de su multiplicación.
   var result = x * y;
   return result;
}

function obtenerResto(x, y) {
   // Esta función toma dos números, "x" e "y", y retorna el resto de la división de "x" entre "y".
   var result = x % y;
   return result;
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
