const send = require ("./correos.js")

const idAplicativo = 1; // ID correspondiente a la aplicación que deseas probar
send(idAplicativo, (json) => {
    console.log('Enviando correo con la siguiente configuración:', json);
});
