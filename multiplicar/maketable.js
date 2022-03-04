//requireds
const fs = require('fs');
const colors = require('colors/safe');
const { resolve } = require('path');
const { get_mult_table } = require('./multiplicar');

let readTable = (base, path) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        console.log('============================'.green);
        console.log(`\t Tabla del ${base}`.green);
        console.log('============================'.green);
        console.log(data.blue);
    });
}
let checking_data = (base) => {

    if (!Number(base)) {
        throw new Error(`El valor ${base} no es un numero`).message;
    }
    if (fs.existsSync(`./tablas/tabla-${base}.txt`)) {
        readTable(base, `./tablas/tabla-${base}.txt`);
        throw new Error("la tabla ya existe").message;
    }
    if (base === true) {
        throw new Error("Valor no compatible con el formato").message;
    }
}

let crearArchivo = async(base, limite = 10) => {
    try {
        checking_data(base);
        let dataTable = get_mult_table(base, limite);
        fs.writeFile(`tablas/tabla-${base}.txt`, dataTable,
            (err) => {
                if (err)
                    throw (err.message);
            });
        return (`tabla-${base}.txt`);
    } catch (error) {
        throw error
    }
}


module.exports = { crearArchivo }