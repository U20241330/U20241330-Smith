const readline = require('readline');

// Configuración de readline para capturar la entrada del usuario desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarNumero() {
    return new Promise((resolve, reject) => {
        rl.question("Ingresa un número: ", (numero) => {
            numero = parseInt(numero, 10);

            if (numero === 5) {
                resolve("El número es igual a 5");
            } else {
                reject("El número no es igual a 5");
            }

            rl.close(); // Cierra la interfaz de readline
        });
    });
}

// Ejemplo de uso
verificarNumero()
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));
