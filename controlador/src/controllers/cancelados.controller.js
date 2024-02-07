
const pool = require("../db.js");

const obtenerCancelados =async (req, res,next) => {
  try {
    // Realiza la consulta a la base de datos
    const { rows } = await pool.query('select a.codigo_ficha ,b.nombre_documento,a.numero_documento_aprendiz, c.nombre_completo_aprendiz, a.motivo_cancelacion , a.fecha_cancelacion ,a.numero_resolucion FROM aprendiz_cancelado AS a ,tipo_documento AS b,aprendiz AS c   WHERE a.numero_documento_aprendiz = c.numero_documento_aprendiz AND b.id_tipo_documento = c.id_tipo_documento;    ');
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).json({ success: false, message: 'Error en la consulta' });
  }
}

module.exports = {obtenerCancelados};