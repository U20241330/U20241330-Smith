const readline = require('readline');

function validarEdad(edad) {
    return new Promise((resolve, reject) => {
        if (edad >= 18) {
            resolve("Edad válida para acceder al contenido");
        } else {
            reject("Edad insuficiente para acceder al contenido");
        }
    });
}

function solicitarEdad() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Por favor, ingresa tu edad: ", (entrada) => {
        const edad = parseInt(entrada, 10);

        if (isNaN(edad)) {
            console.log("Por favor, ingresa un número válido.");
            rl.close();
            return;
        }

        validarEdad(edad)
            .then(mensaje => console.log(mensaje))
            .catch(error => console.log(error))
            .finally(() => rl.close());
    });
}


solicitarEdad();

