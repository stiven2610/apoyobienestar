import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AppRoutes/Authcontext";
import Boton from "../botones/Boton";
import "./styles.css";

const Login = () => {
  const [errorContrasenha, setErrorContrasenha] = useState("");
  const [errorCredenciales, setErrorCredenciales] = useState("");
  const [errorUsuario, setErrorUsuario] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();


const limpiarCampos =()=>{
  setErrorContrasenha("");
  setErrorCredenciales("");
  setErrorUsuario("");
}

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
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          localStorage.setItem("token", data.token);
          login();
          navigate("/adjudicados");
        }
      } else if (res.status === 400) {
        setErrorCredenciales("Credenciales incorrectas"); 
      }else if (res.status === 401 ){
        setErrorContrasenha("Contraseña incorrecta")
      }else{
        setErrorUsuario("Usuario no existe por favor verifique el número de documento")
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container-login">
      <div id="form-container"  className={`form_login ${errorCredenciales? 'error-credenciales' : ''}`}>
        <form onSubmit={onlogin} method="POST" >
          <h2 className="titulos">Iniciar Sesión</h2>
          <label htmlFor="numero_documento_usuario" className="subtitulos">
            Número documento usuario
          </label>
          <input
            name="numero_documento_usuario"
            onChange={handleChange}
            type="number"
            onFocus={limpiarCampos}
            className={`form-control mb-2 ${errorUsuario? 'error-container' : ''}`}
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
            onFocus={limpiarCampos}
            name="contrasenha_usuario"
            placeholder="Ingrese su contraseña"
            type="password"
            className={`form-control mb-2 ${errorContrasenha ? 'error-container' : ''}`}
            id="Password"
            maxLength="10"
            required
          />
          {errorContrasenha && <p style={{ color: "red" }}>{errorContrasenha}</p>}
          {errorUsuario && <p style={{ color: "red" }}>{errorUsuario}</p>}          {errorCredenciales && <p style={{ color: "red" }}>{errorCredenciales}</p>}
          <Boton texto="Ingresar" textcolor="#fefefe" color="#39A900" />
        </form>
      </div>
    </div>
  );
};

export default Login;
