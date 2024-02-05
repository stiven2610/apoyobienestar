import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

const Navadministrador = ({ onLogin }) => {
  const handleLogout = () => {
    // Llama a onLogin con el parámetro false para indicar cierre de sesión
    onLogin(false);
  };

  return (
    <>
    <div className="header-container">
      <div className="logo-container">
        <img
          src="../../../public/images/logobienestar.png"
          alt="logo del Sena"
        />
      </div>
      <div className="sigaas-container">
        <h2 className="sigaas">SIGAAS</h2>
        <div className="navbar-container align-items-center ">

        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Link onClick={handleLogout} className="link-nav">
                Salir
              </Link>
              <Link to="/adjudicados" className="link-nav">
                Adjudicados
              </Link>
              <Link to="/cancelados" className="link-nav">
                Aprendices Cancelados
              </Link>
              <Link to="/creaciontaller" className="link-nav">
                Creación de taller
              </Link>
              <Link to="/novedadcomponent" className="link-nav">
                Novedades
              </Link>
              <Link to="/novedades" className="link-nav">
                Registro de novedades de taller mensual
              </Link>
              <Link to="/beneficio" className="link-nav">
                Creación de beneficio
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
      </div>
      <div className="logo-container">
          <img src="../../../public/images/logo SENA.png" alt="" />
        </div>
    </div>
    </>

  );
};

export default Navadministrador;
