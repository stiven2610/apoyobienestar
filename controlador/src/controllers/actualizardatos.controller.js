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
console.log(req.body);
try {
  const update_aprendiz = await pool.query(
      "SELECT fun_act_apr($1, $2, $3, $4, $5, $6, $7, $8)",
      [
          numero_documento_aprendiz,
          id_tipo_documento,
          direccion_residencia_aprendiz,
          numero_telefono_fijo,
          numero_telefono_movil,
          email_aprendiz,
          id_estado_aprendiz,
          id_obligacion_mensual,
      ]
  );

  const exito = update_aprendiz.rows[0]; // Accede directamente a la primera fila de resultados
  console.log(exito); // Imprime la fila de resultados

  if (exito) {
      console.log("buena pa ")
      res.status(200).json({
          success: true,
          message: "¡Actualización de datos realizada con éxito!",
      });
  } else {
      console.log("pailas socio")
      res.status(401).json({
          success: false,
          error: "¡Los datos no pudieron ser actualizados, inténtelo nuevamente!",
      });
  }
} catch (error) {
  next(error);
}

};
module.exports = {
  actualizardatos,
};
