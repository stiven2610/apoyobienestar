import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

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
    setErrors({ ...errors, [name]: "" });

    if (name === "numero_documento_usuario") {
      if (!/^\d{9,10}$/.test(value)) {
        setErrors({
          ...errors,
          [name]: "Código de usuario inválido. Debe ser de 9 o 10 números.",
        });
      } else {
        setErrors({
          ...errors,
          [name]: "",
        });
      }
    }

    if (name === "contrasenha_usuario") {
      if (value.length < 10) {
        setErrors({
          ...errors,
          [name]: "La contraseña debe tener al menos 10 caracteres.",
        });
      } else {
        setErrors({
          ...errors,
          [name]: "",
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
        onLogin();
        navigate("/navadmin");
      } else {
        const errorData = await res.json();

        if (errorData.field === "contrasenha_usuario") {
          setErrors({
            ...errors,
            contrasenha_usuario: "Contraseña incorrecta",
          });
        } else if (errorData.field === "numero_documento_usuario") {
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
      <div className="container-login">
        <div id="form-container" className="bg-light p-4 shadow col-md-4 text-center">
          <form onSubmit={handleSubmit} method="POST">
            <h2 className="titulo mb-4">Iniciar Sesión</h2>
            <label htmlFor="numero_documento_usuario" className="titulo form-label">
              Número documento usuario
            </label>
            <input
              name="numero_documento_usuario"
              onChange={handleChange}
              type="tel"
              className={`form-control ${errors.numero_documento_usuario ? "is-invalid" : ""}`}
              id="numero_documento_usuario"
              placeholder="Ingrese su número de documento"
              maxLength="10"
              required
            />
            {errors.numero_documento_usuario && (
              <div className="invalid-feedback">{errors.numero_documento_usuario}</div>
            )}
            <label htmlFor="Password" className="titulo form-label">
              Contraseña
            </label>
            <input
              onChange={handleChange}
              name="contrasenha_usuario"
              placeholder="Ingrese su contraseña"
              type="password"
              className={`form-control ${errors.contrasenha_usuario ? "is-invalid" : ""}`}
              id="Password"
              maxLength="10"
              required
            />
            {errors.contrasenha_usuario && (
              <div className="invalid-feedback">{errors.contrasenha_usuario}</div>
            )}
            <button type="submit" className="boton-iniciar btn-block">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
