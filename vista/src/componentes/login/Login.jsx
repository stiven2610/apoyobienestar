import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AppRoutes/Authcontext";
import Boton from "../botones/Boton";
import "./styles.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    numero_documento_usuario: "",
    contrasenha_usuario: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onlogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://10.200.138.62:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          login();
          navigate("/adjudicados");
        }
      } else {
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
          <label htmlFor="numero_documento_usuario" className="subtitulos">
            Número documento usuario
          </label>
          <input
            name="numero_documento_usuario"
            onChange={handleChange}
            type="number"
            className="form-control"
            id="numero_documento_usuario"
            placeholder="Ingrese su número de documento"
            maxLength="10"
            required
          />

          <label htmlFor="Password" className="subtitulos">
            Contraseña
          </label>
          <input
            onChange={handleChange}
            name="contrasenha_usuario"
            placeholder="Ingrese su contraseña"
            type="password"
            className="form-control mb-2"
            id="Password"
            maxLength="10"
            required
          />

          <Boton texto="Ingresar" textcolor="#fefefe" color="#39A900" />
        </form>
      </div>
    </div>
  );
};

export default Login;
