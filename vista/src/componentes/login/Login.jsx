import { useState } from "react";
import "./styles.css";

const Login = () => {

  const [user, setUser] = useState({
    numero_documento_usuario: "",
    contrasenha_usuario: "",
  });

  const [errors, setErrors] = useState({
    numero_documento_usuario: "",
    contrasenha_usuario: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Limpiar el error del campo actual

    // Validación del campo código de usuario
    if (name === " numero_documento_usuario") {
      if (!/^\d{11}$/.test(value)) {
        setErrors({
          ...errors,
          [name]: "Código de usuario inválido. Debe ser de 6 números.",
        });
      } else {
        setErrors({
          ...errors,
          [name]: "", // Limpiar el error si la validación es exitosa
        });
      }
    }

    // Validación del campo contraseña
    if (name === "contrasenha_usuario") {
      if (value.length < 10) {
        setErrors({
          ...errors,
          [name]: "La contraseña debe tener al menos 10 caracteres.",
        });
      } else {
        setErrors({
          ...errors,
          [name]: "", // Limpiar el error si la validación es exitosa
        });
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();               
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (res.ok) {
 

      } else {
        const errorData = await res.json(); // Lee el mensaje de error del servidor
        if (errorData.field === "contrasenha_usuario") {
          setErrors({
            ...errors,
            contrasenha_usuario: "Contraseña incorrecta",
          });
        } else if (errorData.field === " numero_documento_usuario") {
          setErrors({
            ...errors,
             numero_documento_usuario: "El usuario no existe",
          });
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
        <div id="form-container" className="bg-light p-4 shadow col-md-4 text-center">
          <form onSubmit={handleSubmit} method="POST">
            <h2 className="mb-4" style={{ color: "#39A900" }}>
              Iniciar Sesión
            </h2>
            <div className="mb-3">
              <label htmlFor="numerodocumento" className="form-label">
                Numero de  documento usuario
              </label>
              <input
                name=" numero_documento_usuario"
                onChange={handleChange}
                type="tel"
                className={`form-control ${errors. numero_documento_usuario ? "is-invalid" : ""}`}
                id="numerodocumento"
                maxLength="11"
                required
              />
              {errors. numero_documento_usuario && (
                <div className="invalid-feedback">
                  {errors. numero_documento_usuario}
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Contraseña
              </label>
              <input
                onChange={handleChange}
                name="contrasenha_usuario"
                type="password"
                className={`form-control ${errors.contrasenha_usuario ? "is-invalid" : ""}`}
                id="Password"
                maxLength="11"
                required
              />
              {errors.contrasenha_usuario && (
                <div className="invalid-feedback">
                  {errors.contrasenha_usuario}
                </div>
              )}
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-block" style={{ background: "#39A900" }}>
                Iniciar Sesión
              </button>
            </div>
          
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

