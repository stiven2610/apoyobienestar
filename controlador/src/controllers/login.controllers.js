const pool = require('../db.js');

const validarUsuario = async (req, res, next) => {
  const {
    codigo_usuario,
    contrasenha_usuario,
  } = req.body;

  try {
    const validarUser = await pool.query(
      "SELECT * FROM usuario_admin WHERE codigo_usuario = $1 ",
      [codigo_usuario]
    );

    if (validarUser.rows.length === 1) {
      const validarContraseña = await pool.query(
        "SELECT * FROM usuario_admin WHERE codigo_usuario = $1 AND contrasenha_usuario = $2",
        [codigo_usuario, contrasenha_usuario]
      );

      if (validarContraseña.rows.length === 1) {
        // Usuario y contraseña válidos
        res.status(200).json({ success: true, message: "Inicio de sesión exitoso" });
      } else {
        // Contraseña incorrecta
        res.status(401).json({ success: false, error: "La contraseña es incorrecta" ,field: "contrasenha_usuario"});
      }
    } else {
      // Usuario no encontrado
      res.status(404).json({ success: false, error: "El usuario no existe",field:"codigo_usuario" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  validarUsuario
};
