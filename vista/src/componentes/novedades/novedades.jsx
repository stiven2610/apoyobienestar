import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import "./styles.css";

const NovedadComponent = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/novedades")
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setDatos(data.data);
          setCargando(false);
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        setCargando(false);
      });
  }, []);

  const handleChangeEstado = async (index, nuevoEstado) => {
    const confirmacion = window.confirm(`¿Estás seguro de cambiar el estado del aprendiz a "${nuevoEstado}"?`);

    if (confirmacion) {
      const aprendiz = datos[index]; 
    const { numero_documento_aprendiz, id_estado_aprendiz } = aprendiz; //
      try {
        const res = await fetch("http://localhost:4000/updateestado", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ numero_documento_aprendiz, id_estado_aprendiz }), // Enviar el ID del aprendiz y el nuevo estado al servidor
        });

        if (!res.ok) {
          throw new Error("Error al enviar el formulario");
        }

      } catch (error) {
        console.log("Error:", error);
      }
    }
  };

  return (
    <div className="container-novedades m-4">
      <h4 className="titulos">Novedades presentadas</h4>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Tipo de Documento</th>
            <th>Número de Documento</th>
            <th>Nombre Completo del Aprendiz</th>
            <th>Motivo Novedad</th>
            <th>Nombre Programa</th>
            <th>Fecha Novedad</th>
            <th>Estado del Aprendiz</th>
            <th>Nombre Usuario que Registra</th>
          </tr>
        </thead>
        <tbody>
          {cargando ? (
            <tr>
              <td colSpan="8">Cargando datos...</td>
            </tr>
          ) : (
            datos.map((item, index) => (
              <tr key={index}>
                <td>{item.nombre_documento}</td>
                <td>{item.numero_documento_aprendiz}</td>
                <td>{item.nombre_completo_aprendiz}</td>
                <td>{item.nombre_tipo_novedad}</td>
                <td>{item.nombre_programa}</td>
                <td>{item.fecha_novedad}</td>
                <td>
                  <select
                    value={item.id_estado_aprendiz}
                    onChange={(e) => handleChangeEstado(index, e.target.value)}
                  >
                    <option value="1">A punto de cumplir etapa lectiva</option>
                    <option value="2">Mes de gracia</option>
                    <option value="3">Proyecto productivo</option>
                    <option value="4">Aplazado</option>
                    <option value="5">Etapa lectiva</option>
                    <option value="6">Cancelado</option>
                  </select>
                </td>
                <td>{item.numero_documento_usuario}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NovedadComponent;
