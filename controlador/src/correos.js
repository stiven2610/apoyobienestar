
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const accountTransport = require("./account_transport.json");

const mail_rover = async (callback) => {
    const oauth2Client = new OAuth2(
        accountTransport.auth.clientId,
        accountTransport.auth.clientSecret,
        "https://developers.google.com/oauthplayground",
    );
    oauth2Client.setCredentials({
        refresh_token: accountTransport.auth.refreshToken,
        tls: {
            rejectUnauthorized: false
        }
    });
    oauth2Client.getAccessToken((err, token) => {
        if (err)
            return console.log(err);;
        accountTransport.auth.accessToken = token;
        callback(nodemailer.createTransport(accountTransport));
    });
};


function send(idAplicativo, calback) {
    var id = 0;
    try {
        var id = parseInt(idAplicativo);
    } catch (error) {
        console.log(`error parse idAplicativo feedback.js ${error}`)
    }
    mail_rover(function (emailTransporter) {
        // Define las variables head y footer aquí
        const head = ''; // Define el valor de head según necesites
        const footer = ''; // Define el valor de footer según necesites
        
        switch (id) {
            case 1:
                json = {
                    url: 'http://localhost:4000', 
                    mail: emailTransporter, 
                    app: 'CHECK', 
                    from: 'stivenrozo1@gmail.com',
                    to: 'stivenrozo57@gmail.com',
                    slogan: '😋 Comida exquisita, entregas simples. 🛵 Compra YA! 👇🏻',
                    body_bienvanida: 'Mensaje personalizado', 
                    head_bienvanida: 'En Check pide a tu local favorito, o chatea con un asesor por medicina, y te lo llevamos lo antes posible.',
                    bcc: 'Info <planck.biz@gmail.com>', 
                    head: head, // Utiliza la variable head definida arriba
                    footer: footer // Utiliza la variable footer definida arriba
                };
                return calback(json);
            default:
                json = {
                    url: 'http://localhost:4000', 
                    mail: emailTransporter, 
                    app: 'CHECK', 
                    from: 'stivenrozo1@gmail.com',
                    to: 'stivenrozo57@gmail.com',
                    slogan: '😋 Comida exquisita, entregas simples. 🛵 Compra YA! 👇🏻',
                    body_bienvanida: 'Mensaje personalizado', 
                    head_bienvanida: 'En Check pide a tu local favorito, o chatea con un asesor por medicina, y te lo llevamos lo antes posible.',
                    bcc: 'Info <planck.biz@gmail.com>', 
                    head: head, // Utiliza la variable head definida arriba
                    footer: footer // Utiliza la variable footer definida arriba
                };
                return calback(json);
        }
    });
}
module.exports = send;
