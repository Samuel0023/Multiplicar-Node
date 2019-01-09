const argv = require('./config/yargs.js').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).catch(
            (err) => console.log(err)
        )
        break;
    case 'crear':
        console.log(argv.base);
        crearArchivo(argv.base, argv.limite)
            .then(
                (archivo) => console.log(`Archivo creado: `, colors.green(archivo))).catch(
                (err) => console.log(err)
            );
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

//console.log(process.argv);

//let argv2 = process.argv;

// let parametro = argv[2];

// let base = parametro.split('=')[1];

//console.log(argv.base);