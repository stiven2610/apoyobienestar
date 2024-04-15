import { useEffect , useState} from "react";
import BackIcon from "../backIcon/BackIcon";
const Suspendidos = () =>{
    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true);
  
    useEffect(() => {
      fetch("http://localhost:4000/get_suspendidos")
        .then((response) => response.json())
        .then((data) => {
          if (data.data && Array.isArray(data.data)) {
            setDatos(data.data);
            setCargando(false);
          } else {
            console.error("Los datos recibidos no son válidos.");
            setCargando(false);
          }
        })
        .catch((error) => {
          console.error("Error en la solicitud:", error);
          setCargando(false);
        });
    }, []);
  
    return(
        <>
        <div className="container-cancelados">
          <div className="table-container">
          <h4 className="titulos">Aprendices Suspendidos</h4>
    <BackIcon/>
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Nombre Completo del Aprendiz</th>
                    <th>Código de Ficha</th>
                    <th>Tipo de Documento</th>
                    <th>Número de Documento</th>
                    <th>Número de Resolución</th>
                    <th>Motivo de suspensión</th>
                    <th>Fecha de inicio de suspensión</th>
                    <th>Fecha limite de suspensión</th>
                  </tr>
                </thead>
                <tbody>
                  {cargando ? (
                    <tr>
                      <td colSpan="21">Cargando datos...</td>
                    </tr>
                  ) : (
                    datos.map((item) => (
                      <tr key={item.numero_documento_aprendiz}>
                        <td>{item.nombre_completo_aprendiz}</td>
                        <td>{item.codigo_ficha}</td>
                        <td>{item.nombre_documento}</td>
                        <td>{item.numero_documento_aprendiz}</td>
                        <td>{item.numero_resolucion}</td>
                        <td>{item.nombre_motivo_suspension}</td>
                        <td> {new Date(item.fecha_inicio_suspension).toLocaleDateString(
                        "es-ES",
                        {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        }
                      )}</td>
                        <td> {new Date(item.fecha_fin_suspension).toLocaleDateString(
                        "es-ES",
                        {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        }
                      )}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </>
    
      );
    
}


export default Suspendidos;