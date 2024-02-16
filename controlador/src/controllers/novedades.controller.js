
const pool = require("../db.js");

const obtenerNovedades = async (req, res, next) => {
  try {
    // Realiza la consulta a la base de datos
    const { rows } = await pool.query('select h.id_estado_aprendiz ,a.numero_documento_aprendiz,f.nombre_documento,a.fecha_novedad,a.numero_documento_usuario,a.numero_resolucion_adjudicacion,b.nombre_tipo_novedad,c.nombre_completo_aprendiz,d.nombre_usuario,e.codigo_ficha,e.nombre_programa,h.nombre_estado_aprendiz FROM novedad AS a , tipo_novedad AS b , aprendiz AS c ,usuario As d ,tipo_documento AS f, ficha AS e, estado_aprendiz AS h WHERE a.id_tipo_novedad = b.id_tipo_novedad AND a.numero_documento_aprendiz = c.numero_documento_aprendiz AND a.numero_documento_usuario = d.numero_documento_usuario AND e.codigo_ficha = c.codigo_ficha AND c.id_estado_aprendiz = h.id_estado_aprendiz AND c.id_tipo_documento = f.id_tipo_documento;  ');
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).json({ success: false, message: 'Error en la consulta' });
  }
}
const update_estado = async (req, res,next) => {
  const {
    numero_documento_aprendiz,
    id_estado_aprendiz
  } = req.body
  console.log(req.body)
  try {
    const update_estado_aprendiz = await pool.query(
      "UPDATE aprendiz SET  id_estado_aprendiz = $1 WHERE numero_documento_aprendiz = $2 ",[
        id_estado_aprendiz,
        numero_documento_aprendiz
      ]
    )
    if (update_estado_aprendiz.rowCount >= 1) {
      res
        .status(200)
        .json({
          success: true,
          message: "¡Actualización de estado realizada con éxito!",
        });
    } else {
      res
        .status(401)
        .json({
          success: false,
          error:
            "¡El estado no pudo ser actualizado, inténtelo nuevamente!",
        });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { obtenerNovedades, update_estado };