

class Camara {

    constructor( videoNode ) {

        this.videoNode = videoNode;
        console.log('Camara Class init');
    }


    encender() {

        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: { width: 200, height: 200 }
        }).then( stream => {

            this.videoNode.srcObject = stream;
            this.stream = stream;

        });

    }


    apagar() {


        this.videoNode.pause();

        if ( this.stream ) {
            this.stream.getTracks()[0].stop();
        }


    }


    tomarFoto() {

        // Crear un elemento canvas para renderizr ahí la foto
        let canvas = document.createElement('canvas');


        // Colocar las dimensiones igual al elemento del video
        canvas.setAttribute('width', 200 );
        canvas.setAttribute('height', 200 );

        // obtener el contexto del canvas
        let context = canvas.getContext('2d'); // una simple imagen

        // dibujar, la imagen dentro del canvas
        context.drawImage( this.videoNode, 0, 0, canvas.width, canvas.height );


        this.foto = context.canvas.toDataURL();

        // limpieza
        canvas  = null;
        context = null;

        return this.foto;

    }


}


