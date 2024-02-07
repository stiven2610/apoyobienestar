
const pool = require("../db.js");

const obtenerNovedades =async (req, res,next) => {
  try {
    // Realiza la consulta a la base de datos
    const { rows } = await pool.query('select b.nombre_tipo_novedad ,d.nombre_completo_aprendiz, c.nombre_documento ,a.numero_documento_aprendiz , a.numero_documento_usuario, a.fecha_novedad , a.numero_resolucion_adjudicacion FROM novedad AS a, tipo_documento AS c, aprendiz AS d, tipo_novedad AS b  WHERE a.id_tipo_novedad = b.id_tipo_novedad AND a.numero_documento_aprendiz = d.numero_documento_aprendiz;');
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).json({ success: false, message: 'Error en la consulta' });
  }
}

module.exports = {obtenerNovedades};