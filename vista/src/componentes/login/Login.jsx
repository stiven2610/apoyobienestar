import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AppRoutes/Authcontext";
import "./styles.css";
import Boton from "../botones/Boton";

const Login = () => {
  const { login } = useContext(AuthContext); // Obtiene la función de login del contexto
  const navigate = useNavigate();

  const [user, setUser] = useState({
    numero_documento_usuario: "",
    contrasenha_usuario: "",
  });

  const [errors, setErrors] = useState({
    numero_documento_usuario: "",
    contrasenha_usuario: "",
    general: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, [name]: "" });

    if (name === "numero_documento_usuario") {
      if (!/^\d{9,10}$/.test(value)) {
        setErrors({
          ...errors,
          [name]: "Número de documento inválido. Debe ser de 9 o 10 números.",
        });
      }
    }

    if (name === "contrasenha_usuario") {
      if (value.length < 10) {
        setErrors({
          ...errors,
          [name]: "La contraseña debe tener al menos 10 caracteres.",
        });
      }
    }
  };

  const onlogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(res)
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          login();
          navigate("/adjudicados");
        } else {
          setErrors({
            ...errors,
            general: data.message, // Manejar mensajes de error generales
          });
        }
      } else {
        // Si la respuesta no es exitosa, manejar el error
        throw new Error("Error en la solicitud al servidor.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container-login">
      <div id="form-container" className="form_login">
        <form onSubmit={onlogin} method="POST">
          <h2 className="titulos">Iniciar Sesión</h2>
          {errors.general && (
            <div className="alert alert-danger">{errors.general}</div>
          )}
          <label htmlFor="numero_documento_usuario" className="subtitulos">
            Número documento usuario
          </label>
          <input
            name="numero_documento_usuario"
            onChange={handleChange}
            type="number"
            className={`form-control ${
              errors.numero_documento_usuario ? "is-invalid" : ""
            }`}
            id="numero_documento_usuario"
            placeholder="Ingrese su número de documento"
            maxLength="10"
            required
          />
          {errors.numero_documento_usuario && (
            <div className="invalid-feedback">
              {errors.numero_documento_usuario}
            </div>
          )}
          <label htmlFor="Password" className="subtitulos">
            Contraseña
          </label>
          <input
            onChange={handleChange}
            name="contrasenha_usuario"
            placeholder="Ingrese su contraseña"
            type="password"
            className={`form-control mb-2 ${
              errors.contrasenha_usuario ? "is-invalid" : ""
            }`}
            id="Password"
            maxLength="10"
            required
          />
          {errors.contrasenha_usuario && (
            <div className="invalid-feedback">
              {errors.contrasenha_usuario}
            </div>
          )}
          <Boton texto="Ingresar" textcolor="#fefefe" color="#39A900" />
        </form>
      </div>
    </div>
  );
};

export default Login;
