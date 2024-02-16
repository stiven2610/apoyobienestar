import React, { useState } from 'react';

const Registro_asistencia= () => {
  const [nombre, setNombre] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleRegistroAsistencia = () => {
    
  };

  return (
    <div>
      <h2>Registro de Asistencia a Taller Mensual</h2>
      {asistenciaRegistrada ? (
        <p>¡Asistencia registrada con éxito para: {nombre}!</p>
      ) : (
        <form>
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={handleNombreChange}
            />
          </label>
          <button type="button" onClick={handleRegistroAsistencia}>
            Registrar Asistencia
          </button>
        </form>
      )}
    </div>
  );
};

export default Registro_asistencia;
