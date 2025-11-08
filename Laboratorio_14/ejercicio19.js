class Notificacion {
    constructor(mensaje) {
        this.mensaje = mensaje;
    }
    enviar() { 
        console.log(`Tipo de notificación no especificado, Mensaje: ${this.mensaje}`);
    }
}
class Email extends Notificacion {
    enviar() {
        console.log(`[EMAIL] Enviando correo con asunto: ${this.mensaje}`);
    }
}
class SMS extends Notificacion {
    enviar() {
        console.log(`[SMS] Enviando mensaje de texto al móvil: ${this.mensaje}`);
    }
}
class Push extends Notificacion {
    enviar() {
        console.log(`[PUSH] Mostrando alerta en la app: ${this.mensaje}`);
    }
}
 
function procesarNotificaciones(lista) { 

    lista.forEach(notificacion => {
        notificacion.enviar(); 
    });
}

const listaNotificaciones = [
    new Email("Tu pedido ha sido enviado."),
    new SMS("Tu código de verificación es 9876."),
    new Push("¡Nueva actualización disponible!"),
    new Notificacion("Notificación de prueba.")
];

procesarNotificaciones(listaNotificaciones);