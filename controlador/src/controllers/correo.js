const nodemailer = require('nodemailer');

// Configurar el transporte SMTP
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'stivenrozo1@gmail.com',
        pass: 'stivenygrADSO'
    }
});

// Definir el contenido del correo electrónico
let mailOptions = {
    from: 'stivenrozo1@gmail.com',
    to: 'stivenrozo57@gmail.com',
    subject: 'Asunto del correo',
    text: 'Contenido del correo electrónico.'
};

// Enviar el correo electrónico
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Correo enviado: ' + info.response);
    }
});
