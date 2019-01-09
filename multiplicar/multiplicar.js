//requireds
const fs = require('fs');

const colors = require('colors/safe');


let listarTabla = (base, limite = 10) => {
    return new Promise((resolbe, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`);
            return;
        }
        console.log('============================'.green);
        console.log(`\t Tabla del ${base}`.green);
        console.log('============================'.green);
        for (let i = 1; i <= limite; i++) {
            console.log(`\t- ${base} * ${i} = ${base * i} `.blue);
        }
    })
}





let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data,
            (err) => {
                if (err) {
                    reject(err);

                } else {
                    resolve(`tabla-${base}.txt`);
                }

            });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}