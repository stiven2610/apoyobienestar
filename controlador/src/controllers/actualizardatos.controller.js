const pool = require("../db");

const actualizardatos = async (req, res, next) => {
  const {
    numero_documento_aprendiz,
    id_tipo_documento,
    direccion_residencia_aprendiz,
    numero_telefono_fijo,
    numero_telefono_movil,
    email_aprendiz,
    id_estado_aprendiz,
    id_obligacion_mensual,
  } = req.body;

  try {
    const update_aprendiz = await pool.query(
      "UPDATE aprendiz SET id_tipo_documento = $1, direccion_residencia_aprendiz = $2, numero_telefono_fijo = $3, numero_telefono_movil = $4, email_aprendiz = $5, id_estado_aprendiz = $6, id_obligacion_mensual = $7 WHERE numero_documento_aprendiz = $8",
      [
        id_tipo_documento,
        direccion_residencia_aprendiz,
        numero_telefono_fijo,
        numero_telefono_movil,
        email_aprendiz,
        id_estado_aprendiz,
        id_obligacion_mensual,
        numero_documento_aprendiz,
      ]
    );

    if (update_aprendiz.rowCount >= 1) {
      res
        .status(200)
        .json({
          success: true,
          message: "¡Actualización de datos realizada con éxito!",
        });
    } else {
      res
        .status(401)
        .json({
          success: false,
          error:
            "¡Los datos no pudieron ser actualizados, inténtelo nuevamente!",
        });
    }
  } catch (error) {
    next(error); // Pasar el error al middleware de manejo de errores
  }
};

module.exports = {
  actualizardatos,
};
