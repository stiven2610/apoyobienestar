const pool = require("../db.js");
const jwt = require('jsonwebtoken');
const secretKey = 'alphaRomeo_@bienecset';
const validarUsuario = async (req, res, next) => {
  const { numero_documento_usuario, contrasenha_usuario } = req.body;
  const password = contrasenha_usuario;
  try {
    const result = await pool.query("SELECT * FROM fun_log($1, $2)", [
      numero_documento_usuario,
      password,
    ]);
    
    const documento_existe = result.rows[0].documento_existe;
    const contrasenha_existe = result.rows[0].contrasenha_existe;

    if (documento_existe && contrasenha_existe) {
      const token = jwt.sign({ numero_documento_usuario }, secretKey, { expiresIn: '1h' });
      res.status(200).json({
        success: true,
        message: "Sesión iniciada correctamente",
        token: token
      });
    } else if (!documento_existe && !contrasenha_existe) {
      res.status(400).json({
        success: false,
        message: "Credenciales incorrectas",
      });
    } else if (!documento_existe) {
      res.status(404).json({
        success: false,
        error: "El usuario no existe",
      });
    } else if (!contrasenha_existe) {
      res.status(401).json({
        success: false,
        error: "La contraseña es incorrecta",
      });
    }
  } catch (error) {
    console.error("Error en la validación de usuario:", error);
    res.status(500).json({
      success: false,
      error: "Error interno del servidor",
    });
  }
};

module.exports = {
  validarUsuario,
};
