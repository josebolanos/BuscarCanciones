import * as UI from './interfaz.js';

// Podia a ver sido export  API
class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }
    // Accedemos al URL de la API
    consultarAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        // Conectamos la API
        fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => {
            if(resultado.lyrics) {
                const { lyrics } = resultado;
                // Lo pasamos al HTML
            UI.divResultado.textContent = lyrics;
            UI.headingResultado.textContent = `Letra de la cancion: ${this.cancion} de ${this.artista}`
            }else {
                UI.divMensajes.textContent = 'La cancion no existe prueba con otra busqueda'
                UI.divMensajes.classList.add('error');

                setTimeout(() => {
                    UI.divMensajes.textContent = '';
                UI.divMensajes.classList.remove('error');
                }, 3000);
            }
            
        })
    }
}

export default API;