const pool = require("../db.js");

const pruebaControlador= async (req, res) => {
  const {
    numero_documento_aprendiz,
    codigo_ficha,
    id_tipo_documento,
    id_estado_aprendiz,
    id_obligacion_mensual,
    numero_consecutivo,
    numero_resolucion_adjudicacion,
    codigo_beneficio,
    nombre_completo_aprendiz,
    fecha_adjudicacion,
    numero_telefono_fijo,
    numero_telefono_movil,
    direccion_residencia_aprendiz,
    email_aprendiz,
    user_insert,
    fecha_insert,
    user_update,
    fecha_update,
  } = req.body;

  try {
    // Verificar si el aprendiz ya existe en la base de datos
    const checkQuery = "SELECT COUNT(*) FROM tabla_aprendices WHERE numero_documento_aprendiz = $1";
    const checkValues = [numero_documento_aprendiz];

    const { rows } = await pool.query(checkQuery, checkValues);
    const rowCount = parseInt(rows[0].count);

    if (rowCount > 0) {
      // Si el aprendiz ya existe, devuelve un error
      res.status(400).json({ error: "El aprendiz ya existe" });
    } else {
      // Si el aprendiz no existe, realiza la inserción en la base de datos
      const insertQuery = `
        INSERT INTO tabla_aprendices (
          numero_documento_aprendiz,
          codigo_ficha,
          id_tipo_documento,
          id_estado_aprendiz,
          id_obligacion_mensual,
          numero_consecutivo,
          numero_resolucion_adjudicacion,
          codigo_beneficio,
          nombre_completo_aprendiz,
          fecha_adjudicacion,
          numero_telefono_fijo,
          numero_telefono_movil,
          direccion_residencia_aprendiz,
          email_aprendiz,
        
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      `;
      const insertValues = [
        numero_documento_aprendiz,
        codigo_ficha,
        id_tipo_documento,
        id_estado_aprendiz,
        id_obligacion_mensual,
        numero_consecutivo,
        numero_resolucion_adjudicacion,
        codigo_beneficio,
        nombre_completo_aprendiz,
        fecha_adjudicacion,
        numero_telefono_fijo,
        numero_telefono_movil,
        direccion_residencia_aprendiz,
        email_aprendiz
       
      ];

      await pool.query(insertQuery, insertValues);

      // Envía una respuesta exitosa
      res.status(200).json({ message: "Datos del formulario insertados exitosamente" });
    }
  } catch (error) {
    // Captura y maneja los errores
    console.error("Error al insertar datos del formulario:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = {
  pruebaControlador,
};
