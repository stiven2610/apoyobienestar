const { db } = require("../config.js");
const nodemailer = require('nodemailer');

const destinatario = 'stivenrozo1@gmail.com';
const bienestar = 'stivenrozo57@gmail.com';

async function enviarCorreo(nombre, asunto, origen, cuerpo) {
  try {
    // Crear un transporte de nodemailer
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: db.mail_user,
        pass: db.mail_password,
        clientId: db.oauth_client,
        clientSecret: db.oauth_client_secret,
        refreshToken: db.oauth_refresh_token
      }
    });

    // Configurar las opciones del correo
    let mailOptions = {
      from: `"Tu Nombre" <${bienestar}>`, // Agrega un nombre al remitente
      to: destinatario,
      subject: asunto,
      html: `
        <p>soy ${nombre},</p>
        <p>${cuerpo}</p>
        <p>Saludos cordiales</p>
        <p>Enviado por : ${origen}</p>
      `
    };

    // Enviar el correo electrónico
    await transporter.sendMail(mailOptions);
    console.log("Correo enviado correctamente");
  } catch (error) {
    console.log("Error al enviar el correo electrónico:", error);
    throw error; // Propagar el error para que lo maneje el código que llamó a esta función
  }
}

module.exports = enviarCorreo;
