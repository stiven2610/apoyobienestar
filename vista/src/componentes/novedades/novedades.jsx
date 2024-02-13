import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Boton from '../botones/Boton';
import "./styles.css";


const NovedadComponent = ({ novedades, eliminarNovedad }) => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    fetch("http://localhost:4000/novedades").then((response) => response.json()).then((data) => {
      if (data.data && Array.isArray(data.data)) {
        setDatos(data.data);
        setCargando(false);
      }
    }).catch((error) => {
      console.error("Error en la solicitud:", error);
      setCargando(false);
    });
  }, []);
  return (
    <>
      <div className="container-novedades m-4">

          <h4 className="titulos">Novedades prensentadas</h4>
            <table className="table table-bordered table-striped">
              <thead className="">
                <tr>
                  <th>Gestión</th>
                  <th>Tipo de Documento</th>
                  <th>Número de Documento</th>
                  <th>Nombre Completo del Aprendiz</th>
                  <th>Motivo Novedad</th>
                  <th>Nombre Programa </th>
                  <th>Fecha novedad</th>
                  <th>Estado del Aprendiz</th>
                  <th>Nombre Usuario que Registra</th>
                </tr>
              </thead>
              <tbody>
                {cargando ? (
                  <tr>
                    <td colSpan="21">Cargando datos...</td>
                  </tr>
                ) : (
                  datos.map((item) => (
                    <tr key={item.id_tipo_novedad}>
                      <td>

                          <div>
                          <Boton texto="cambiar estado"  color="#39A900" textcolor="#fefefe"/>
                        </div>
                      </td>
                      <td>{item.nombre_documento}</td>
                      <td>{item.numero_documento_aprendiz}</td>
                      <td>{item.nombre_completo_aprendiz}</td>
                      <td>{item.nombre_tipo_novedad}</td>
                      <td>{item.nombre_programa}</td>
                      <td>{item.fecha_novedad}</td>
                      <td>{ }</td>
                      <td>{item.numero_documento_usuario}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

    </>

  );
};

export default NovedadComponent;
