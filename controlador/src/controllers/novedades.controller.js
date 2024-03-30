
const pool = require("../db.js");

const obtenerNovedades = async (req, res, next) => {
  try {
    // Realiza la consulta a la base de datos
    const { rows } = await pool.query('select a.numero_documento_aprendiz,f.nombre_documento,a.fecha_novedad,b.nombre_tipo_novedad,c.nombre_completo_aprendiz,e.codigo_ficha,e.nombre_programa,h.nombre_estado_aprendiz FROM novedad AS a , tipo_novedad AS b , aprendiz AS c ,tipo_documento AS f, ficha AS e, estado_aprendiz AS h WHERE a.id_tipo_novedad = b.id_tipo_novedad AND a.numero_documento_aprendiz = c.numero_documento_aprendiz AND  e.codigo_ficha = c.codigo_ficha AND c.id_estado_aprendiz = h.id_estado_aprendiz AND c.id_tipo_documento = f.id_tipo_documento;');
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).json({ success: false, message: 'Error en la consulta' });
  }
}

module.exports = { obtenerNovedades};