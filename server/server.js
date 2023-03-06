const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'tu-correo@gmail.com',
      pass: 'tu-contraseña'
    }
  });

  const mailOptions = {
    from: email,
    to: 'lorenzocaballerofernandez@gmail.com',
    subject: subject,
    text: `Nombre: ${name} \nCorreo electrónico: ${email} \nMensaje: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email enviado: ' + info.response);
      res.send('éxito');
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
