
const pool = require("../db.js");

const obtenerAdjudicados =async (req, res,next) => {
  try {
    // Realiza la consulta a la base de datos
    const { rows } = await pool.query('select a.numero_documento_aprendiz, a.nombre_completo_aprendiz, a.codigo_ficha , b.nombre_documento, c.nombre_estado_aprendiz, d.nombre_obligacion_mensual,a.numero_consecutivo, a.numero_resolucion_adjudicacion, e.nombre_beneficio , a.fecha_adjudicacion, a.numero_telefono_fijo, a.numero_telefono_movil, a.direccion_residencia_aprendiz, a.email_aprendiz FROM aprendiz AS a , tipo_documento AS b , estado_aprendiz AS c ,obligacion_mensual AS d ,  beneficio AS e WHERE a.id_tipo_documento  = b.id_tipo_documento AND a.id_estado_aprendiz = c.id_estado_aprendiz AND a.id_obligacion_mensual = d.id_obligacion_mensual AND a.codigo_beneficio = e.codigo_beneficio');
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).json({ success: false, message: 'Error en la consulta' });
  }
}

module.exports = {obtenerAdjudicados};
