const pool = require("../db.js");

const creacionTaller = async (req, res) => {
  const { codigo_taller, tema_taller, fecha_taller, contrasenha_taller } = req.body;

  try {
    // Verificar si el taller ya existe en la base de datos
    const checkQuery = "SELECT COUNT(*) FROM taller_mensual WHERE codigo_taller = $1";
    const checkValues = [codigo_taller];
    
    const { rows } = await pool.query(checkQuery, checkValues);
    const rowCount = parseInt(rows[0].count);

    if (rowCount > 0) {
      // Si el taller ya existe, devuelve un error
      res.status(400).json({ error: "El taller ya existe" });
    } else {
      // Si el taller no existe, realiza la inserción en la base de datos
      const insertQuery = "INSERT INTO taller_mensual (codigo_taller, tema_taller, fecha_taller, contrasenha_taller) VALUES ($1, $2, $3, $4)";
      const insertValues = [codigo_taller, tema_taller, fecha_taller, contrasenha_taller];
      
      await pool.query(insertQuery, insertValues);

      // Envía una respuesta exitosa
      res.status(200).json({ message: "Taller creado exitosamente" });
    }
  } catch (error) {
    // Captura y maneja los errores
    console.error("Error al crear el taller:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = {
  creacionTaller,
};
