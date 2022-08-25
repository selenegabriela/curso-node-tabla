const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const { rainbow } = require('colors');
require('colors');


console.clear();


// const base = 5;
// console.log(process.argv);
// console.log(argv);
// console.log(argv.b);
// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base ] = arg3.split('=');
// console.log(arg3, base);

crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'.random))
  .catch(err => console.log(err));