//requireds
const colors = require('colors/safe');


let get_mult_table = (base, limite = 10) => {
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i} \n`;
    }
    return data;
}


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`);
            return;
        }
        console.log('============================'.green);
        console.log(`\t Tabla del ${base}`.green);
        console.log('============================'.green);
        for (let i = 1; i <= limite; i++) {
            console.log(`\t- ${base} * ${i} = ${base * i} `.red);
        }
    })
}



module.exports = {
    get_mult_table,
    listarTabla
}