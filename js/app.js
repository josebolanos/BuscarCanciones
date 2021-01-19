// Importamos todo el interfaz.js

import * as UI from './interfaz.js';
import API from './api.js';

// Vemos todo lo que hay en el formulario
UI.formularioBuscar.addEventListener('submit', buscarCancion);

// Creamos una funcion de busqueda de cancion
function buscarCancion(e) {

    e.preventDefault();

    //Obtener datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if( artista === '' || cancion === '' ) {
        // El usario dejo al menos un campo vacio, mostrar error
        UI.divMensajes.textContent = 'Error... Todos los campos son obligatirios';
        UI.divMensajes.classList.add('error');

        setTimeout(() =>{
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        },3000)

        return;

    }

    // Consultar API
    const  busqueda = new API(artista,cancion);
    busqueda.consultarAPI();
    console.log(busqueda);

  
}


    

        


