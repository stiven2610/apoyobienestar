import { useState } from "react";
import Navbar from "../navbar/navbar";
import "./styles.css";
import Footer from "../Footer/Footer";
const FormRegistroAsistenciaTaller = () => {
  // Definir estados para los datos del formulario
  const [user, setUser] = useState({
    id_tipo_documento: "", // Puedes establecer un valor inicial adecuado aquí
    numero_documento_aprendiz: "",
    codigo_taller: "",
    contrasenha_taller: "",
  });
  const [errors, setErrors] = useState({
    id_tipo_documento: "",
    numero_documento_aprendiz: "",
    codigo_taller: "",
    contrasenha_taller: "",
  });

  // Función para manejar cambios en los campos del formulario
  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;

    const formContainer = document.getElementById("form-container");
    formContainer.classList.remove("error-container");
    // Borra el mensaje de error del campo de entrada correspondiente
    setErrors({
      ...errors,
      [name]: "", // Limpia el error cuando se realiza un cambio en el campo
    });

    // Validaciones de campos
    if (name === "numero_documento_aprendiz") {
      // Asegura que solo se ingresen números y no más de 10 dígitos
      const isValid = /^\d{0,10}$/.test(value);
      if (!isValid) {
        setErrors({
          ...errors,
          [name]: "Número de documento inválido",
        });
        return; // No actualices el estado si es inválido
      }
    } else if (name === "codigo_taller") {
      // Asegura que solo se ingresen números, al menos 4 dígitos y no más de 5
      const isValid = /^\d{0,5}$/.test(value);
      if (!isValid) {
        setErrors({
          ...errors,
          [name]: "Código de taller es de maximo 5 digitos",
        });
        return; // No actualices el estado si es inválido
      }
    } else if (name === "contrasenha_taller") {
      // Asegura que la contraseña tenga como máximo 10 caracteres
      if (value.length > 10) {
        setErrors({
          ...errors,
          [name]: "La contraseña es de máximo 10 caracteres",
        });
        return; // No actualices el estado si es inválido
      }
    }

    setUser({
      ...user,
      [name]: value,
    });
  };
  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizar una solicitud HTTP a tu API
      const res = await fetch("http://localhost:4000/asistenciataller", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        // La respuesta del servidor es exitosa (código de estado HTTP 200)

        // Puedes realizar alguna acción adicional, como redirigir al usuario
      } else {
        const errorData = await res.json(); // Lee el mensaje de error del servidor

        if (
          errorData.error === "Ya has registrado la asistencia a este taller."
        ) {
          // Agrega la clase de error al contenedor del formulario.
          const formContainer = document.getElementById("form-container");
          formContainer.classList.add("error-container");
          // Muestra el mensaje de error solo si es el error específico que buscas
          alert(errorData.error);
        }

        const fieldWithError = errorData.field;
        setErrors({
          ...errors,
          [fieldWithError]: errorData.error,
        });
        // Muestra el mensaje de error.
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center"style={{ minHeight: "70vh" }}>
          <div className="col-md-5" id="form-container">
            <div className="container_form bg-light p-4 rounded text-center">
              <p className="titulo_beneficio  font-weight-bold"style={{ color: "#084416" }}>
                REGISTRO ASISTENCIA
              </p>
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="form-group mb-2 text-center"></div>
                <div className="form-group mb-2 text-center">
                  <label
                    htmlFor="numero_documento_aprendiz"
                    className="form_label mb-3"style={{ color: "#39A900" }}
                  >
                    Número de Documento
                  </label>
                  <input
                    placeholder="Ingrese su número de documento"
                    name="numero_documento_aprendiz"
                    onChange={handleChange}
                    type="tel"
                    required
                    className={`form-control form_input ${errors.numero_documento_aprendiz && "is-invalid"
                      }`}
                    id="numero_documento_aprendiz"
                    value={user.numero_documento_aprendiz || ""} // Asignar el valor del estado al input
                  />
                  {errors.numero_documento_aprendiz && (
                    <span className="invalid-feedback">
                      {errors.numero_documento_aprendiz}
                    </span>
                  )}
                </div>
                <div className="form-group mb-2 text-center">
                  <label htmlFor="codigo_taller" className="form_label mb-3"style={{ color: "#39A900" }}>
                    Código del Taller
                  </label>
                  <input
                    placeholder="Ingrese el código del taller al cual va a registrar su asistencia"
                    name="codigo_taller"
                    onChange={handleChange}
                    type="tel"
                    required
                    className={`form-control form_input ${errors.codigo_taller && "is-invalid"
                      }`}
                    id="codigo_taller"
                    value={user.codigo_taller || ""} // Asignar el valor del estado al input
                  />

                  {errors.codigo_taller && (
                    <span className="invalid-feedback">
                      {errors.codigo_taller}
                    </span>
                  )}
                </div>
                <div className="form-group mb-2 text-center">
                  <label
                    htmlFor="contrasenha_taller"
                    className="form_label mb-3"style={{ color: "#39A900" }}
                  >
                    Contraseña del Taller
                  </label>
                  <input
                    placeholder="Ingrese la contraseña del taller"
                    name="contrasenha_taller"
                    onChange={handleChange}
                    type="password"
                    required
                    className={`form-control form_input ${errors.contrasenha_taller && "is-invalid"
                      }`}
                    id="contrasenha_taller"
                    value={user.contrasenha_taller || ""} // Asignar el valor del estado al input
                  />
                  {errors.contrasenha_taller && (
                    <span className="invalid-feedback">
                      {errors.contrasenha_taller}
                    </span>
                  )}
                </div>

                <button
                  className="btn boton_crear m-4 btn-success"style={{ background: "#39A900" }}
                  type="submit"
                >
                  Registrarse
                </button>
              </form>
            </div>
          </div>
        </div>
      <Footer/>
    </>
  );
};

export default FormRegistroAsistenciaTaller;
