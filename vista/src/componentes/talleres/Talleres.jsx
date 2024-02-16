import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Boton from "../botones/Boton";
import "./styles.css";
const Talleres = () => {
  const navigate = useNavigate();
  const [talleres, setTalleres] = useState([]);
  const [cargando, setCargando] = useState(true);
const handleCLick = () =>{
navigate("/registroasistencia")
}
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
  }, []);

  return (
    <div className="container_talleres">
      <div className="container_table_talleres">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>GESTIÓN</th>
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
                <tr key={item.codigo_taller}>
                  <td><div onClick={handleCLick}><Boton texto="registrar asistencias" textcolor="f8f8f8"/>  </div>< Boton    texto="eliminar" color="#FC4132"    textcolor="f8f8f8"/></td>
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
