import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

const Navegacion = () => {
  return (
    <>
      <div className="header-container ">
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
                  <Link to="/" className="link-nav">
                    Inicio
                  </Link>

                  <Link to="/login" className="link-nav">
                    Aplicación
                  </Link>
                  <Link to="/contacto" className="link-nav">
                    Contáctanos
                  </Link>
                  <a
                    href="https://normograma.sena.edu.co/docs/resolucion_sena_0169_2022.htm"
                    className="link-nav"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Normatividad
                  </a>
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

export default Navegacion;
