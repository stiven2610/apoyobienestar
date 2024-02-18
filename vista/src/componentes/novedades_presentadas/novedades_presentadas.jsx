import  { useEffect, useState } from "react";
import "./styles.css";

const Novedades_presentadas = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [estados, setEstados] = useState([]);
  const [ setEstadoSeleccionado] = useState(""); // Estado para almacenar el nombre del estado seleccionado

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

  useEffect(() => {
    fetch("http://localhost:4000/getestadoaprendiz")
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setEstados(data.data);
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  }, []);

  const handleChangeEstado = async (index, nuevoEstado) => {
    const confirmacion = window.confirm(
      `¿Estás seguro de cambiar el estado del aprendiz "${nuevoEstado}"?`
    );

    if (confirmacion) {
      const aprendiz = datos[index];
      const { numero_documento_aprendiz } = aprendiz;

      try {
        const res = await fetch("http://localhost:4000/updateestado", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            numero_documento_aprendiz,
            id_estado_aprendiz: nuevoEstado,
          }), 
        });

        if (!res.ok) {
          throw new Error("Error al enviar el formulario");
        }

        // Actualizar el estado local de los datos después de la actualización
        const newData = [...datos];
        newData[index].id_estado_aprendiz = nuevoEstado;
        setDatos(newData);

        // Obtener el nombre del estado seleccionado y almacenarlo en el estado local
        const selectedState = estados.find(state => state.id_estado_aprendiz === nuevoEstado);
        if (selectedState) {
          setEstadoSeleccionado(selectedState.nombre_estado_aprendiz);
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
                    onChange={(e) =>
                      handleChangeEstado(index, e.target.value)
                    }
                  >
                    {estados.map((estado) => (
                      <option key={estado.id_estado_aprendiz} value={estado.id_estado_aprendiz}>
                        {estado.nombre_estado_aprendiz}
                      </option>
                    ))}
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

export default Novedades_presentadas;
