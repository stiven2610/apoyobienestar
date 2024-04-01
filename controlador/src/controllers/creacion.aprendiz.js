const pool = require("../db");

const insert_aprendiz = async (req, res, next) => {
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
    id_modalidad_formacion,
    fecha_inicio_ficha,
    fecha_inicio_productiva,
    fecha_fin_ficha,
    nivel_formacion,
    nombre_programa,
    numero_documento_instructor_lider,
    nombre_instructor_lider,
    email_instructor
  } = req.body;
console.log(req.body)
try {
  const result = await pool.query(
    "SELECT * FROM fun_ins_apr($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)",
    [
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
      id_modalidad_formacion,
      fecha_inicio_ficha,
      fecha_inicio_productiva,
      fecha_fin_ficha,
      nivel_formacion,
      nombre_programa,
      numero_documento_instructor_lider,
      nombre_instructor_lider,
      email_instructor
    ]
  );

  // Acceder a las variables booleanas por separado
  const { instructor_existe, aprendiz_existe, insercion_realizada } = result.rows[0];

  // Hacer algo con las variables
  console.log('¿El instructor existe?', instructor_existe);
  console.log('¿El aprendiz existe?', aprendiz_existe);
  console.log('¿Se realizó la inserción?', insercion_realizada);
  
  if (insercion_realizada) {
    return res.status(200).json({
      success: true,
      message: "¡Inserción de datos realizada con éxito!"
    });
  } else if (aprendiz_existe) {
    return res.status(409).json({
      success: false,
      message: "El aprendiz ya existe"
    });
  } else if (instructor_existe) {
    return res.status(409).json({
      success: true,
      message: "El instructor ya existe, por lo tanto, tiene una ficha asignada. Solo se inserta el aprendiz."
    });
  } else {
    return res.status(400).json({
      success: false,
      error: "Error al insertar datos, inténtelo nuevamente."
    });
  }
} catch (error) {
  next(error);
}
}
module.exports = {
  insert_aprendiz
};
