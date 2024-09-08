const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function procesarCompra() {
    return new Promise((resolve, reject) => {
        rl.question("Ingresa el monto de la compra: ", (monto) => {
            monto = parseFloat(monto);
            
            
            setTimeout(() => {
                if (monto > 0) {
                    resolve(`Compra completada por $${monto}`);
                } else {
                    reject('Monto inválido para la compra');
                }
                rl.close(); 
            }, 2000);
        });
    });
}


procesarCompra()
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));

