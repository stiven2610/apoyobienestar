const pool = require("../db.js");
const validarUsuario = async (req, res, next) => {
  const { numero_documento_usuario, contrasenha_usuario } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM fun_log($1, $2)",
      [numero_documento_usuario, contrasenha_usuario]
    );
    const documento_existe = result.rows[0].documento_existe;
    const contrasenha_existe = result.rows[0].contrasenha_existe;
console.log(documento_existe,contrasenha_existe)
  } catch (error) {
    next(error);
  }
};

module.exports = {
  validarUsuario,
};
