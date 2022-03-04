const { yargs } = require('./config/yargs');
const { listarTabla } = require('./multiplicar/multiplicar');
const { crearArchivo } = require('./multiplicar/maketable');
const colors = require('colors');

//console.log(yargs.base);
let comando = yargs._[0];
//console.log(comando);
switch (comando) {
    case 'listar':
        listarTabla(yargs.base, yargs.limite)
            .catch((err) => console.log(err));
        break;
    case 'crear':
        crearArchivo(yargs.base, yargs.limite)
            .then(menssage => console.log(menssage))
            .catch(err => console.log(err));
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