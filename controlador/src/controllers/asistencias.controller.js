const pool = require("../db.js");

const asistencias = async (req, res, next) => {
  try {
    const codigo_taller = req.params.codigo_taller; // Obtener el codigo_taller de los parámetros de la solicitud
console.log(codigo_taller)
    // Realizar la consulta a la base de datos filtrando por codigo_taller
    const queryText = 'SELECT * FROM asistencia_taller WHERE codigo_taller = $1';
    const { rows } = await pool.query(queryText, [codigo_taller]);

    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).json({ success: false, message: 'Error en la consulta' });
  }
};

module.exports = { asistencias };
