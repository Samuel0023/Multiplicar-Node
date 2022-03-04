const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const yargs = require('./../node_modules/yargs')
    .command('listar', 'Imprime en econsola la tabla de multiplicar', opts)
    .command('crear', 'Crea la tabla de multiplicar de base especificada', opts)
    .help()
    .argv;


module.exports = {
    yargs
}