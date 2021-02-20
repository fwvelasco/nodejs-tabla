const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base=5, listar=false, hasta=10 ) => {

    try {
        
        let salida = '';
        let salidavista = '';
        
        for (let i = 1; i <= hasta ; i++) {
            salida += `${base} x ${ i } = ${ base * i}\n`;
            salidavista += `${base} ${ 'x'.green } ${ i } ${ '='.green } ${ base * i}\n`;
        }
        
        if(listar){

            console.log('====================================='.green);
            console.log('Tabla del: ', base);
            console.log('====================================='.green);

            console.log(salidavista);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        
        return `tabla-${base}.txt creado`;
        
    } catch (err) {
        throw err;
    }

}

module.exports = { crearArchivo }