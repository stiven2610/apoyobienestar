const pool = require("../db.js");

const formularioRegistroAsistencia = async (req, res, next) => {
  const { codigo_taller, numero_documento_aprendiz } = req.body;

  try {
    const asis = await pool.query(
      "SELECT * FROM asistencia_taller WHERE numero_documento_aprendiz = $1 AND codigo_taller = $2",
      [numero_documento_aprendiz, codigo_taller]
    );
    if (asis.rowCount === 0) {
      const aprendiz = await pool.query(
        "SELECT * FROM aprendiz WHERE numero_documento_aprendiz = $1",
        [numero_documento_aprendiz]
      );

      if (aprendiz.rowCount !== 1) {
        return res.status(404).json({
          success: false,
          error: "Aprendiz no encontrado",
          field: "numero_documento_aprendiz",
        });
      }

      const taller = await pool.query(
        "SELECT * FROM taller_mensual WHERE codigo_taller = $1",
        [codigo_taller]
      );

      if (taller.rowCount !== 1) {
        return res.status(404).json({
          success: false,
          error: "Taller no encontrado",
          field: "codigo_taller",
        });
      }

      const result = await pool.query(
        "INSERT INTO asistencia_taller (codigo_taller, numero_documento_aprendiz) VALUES ($1, $2) RETURNING *",
        [codigo_taller, numero_documento_aprendiz]
      );

      res.status(200).json(result.rows[0]);
    } else {
      res.status(400).json({
        success: false,
        error: "Ya has registrado la asistencia a este taller.",
      });
    }
  } catch (error) {
    // Manejar cualquier error que ocurra durante la consulta.
    next(error);
  }
};

module.exports = {
  formularioRegistroAsistencia,
};
