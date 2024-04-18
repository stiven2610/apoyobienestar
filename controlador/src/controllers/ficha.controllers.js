const pool = require("../db.js");

const Get_ficha = async (req, res) => {
    const { codigo_ficha } = req.params; // Aquí se corrige
    console.log(codigo_ficha);
    
    try {
        const { rows } = await pool.query('SELECT * FROM ficha WHERE codigo_ficha = $1', [codigo_ficha]);
        if (rows.length === 0) {
            return res.status(404).json({ success: false, message: 'La ficha no existe' });
        }
        res.json({ success: true, data: rows[0] }); 
    } catch (error) {
        console.error("Error en la consulta:", error);
        res.status(500).json({ success: false, message: 'Error en la consulta' });
    }
}

module.exports ={
    Get_ficha
}
