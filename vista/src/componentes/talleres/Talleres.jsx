import React, { useEffect, useState } from "react";
import "./styles.css";
const Talleres = () => {
  const [talleres, setTalleres] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/talleres")
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setTalleres(data.data);
          setCargando(false);
        } else {
          console.error("Los datos recibidos no son válidos.");
          setCargando(false);
        }
      })
      .catch((error) => {
        console.error("Error al obtener talleres:", error);
        setCargando(false);
      });
  }, []); // Ejecutar el efecto solo una vez al montar el componente

  return (
    <div className="container_talleres">
      <div className="container_table_talleres">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Registrar asistencias</th>
              <th>Nombre de taller</th>
              <th>Fecha de taller</th>
              <th>Total de aprendices</th>
            </tr>
          </thead>
          <tbody>
            {cargando ? (
              <tr>
                <td colSpan="4">Cargando Datos...</td>
              </tr>
            ) : (
              talleres.map((item) => (
                <tr key={item.id}>
                  <td></td>
                  <td>{item.nombre_taller}</td>
                  <td>{item.fecha_taller}</td>
                  <td>{item.total_aprendices}</td> {/* Ajustar el campo si es necesario */}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Talleres;
