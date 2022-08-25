const fs = require('fs');
const colors= require('colors');

const crearArchivo = async (base = 3, listar, hasta) => {
  try {
    
    let salida = '';
    let consola = '';
  
    for(let i = 1; i <= hasta; i++){
      salida += `${base} x ${i} = ${base*i}\n`;
      consola += `${base} x ${i} = ${base*i}\n`.rainbow;
    }
  
    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //   if(err) throw err;
  
    //   console.log(`tabla-${base}.txt creado`);
    // });
  
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    if(listar){
      console.log('==================='.random);
      console.log(colors.white('   Tabla del ', base))
      console.log('==================='.random);
      console.log(consola)
    }
  
    return `tabla-${base}.txt`.zebra;
  } catch (error) {
    throw error;
  }

}

module.exports = {
  crearArchivo
};