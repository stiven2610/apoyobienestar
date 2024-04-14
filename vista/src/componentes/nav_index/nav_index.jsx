import { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../AppRoutes/Authcontext";
import Boton from "../botones/Boton";
import "./styles.css";

const Nav_index = () => {
  const { logout, isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {isAuthenticated ? (
        <div className="header-container">
          <div className="logo-container">
            <img
              src="../../../public/images/logobienestar.png"
              alt="logo del Sena"
            />
          </div>
          <div className="navbar-container align-items-center ">
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                <Nav.Link as={NavLink} to="/creacionbeneficio" className="link-nav" activeClassName="active">
                    Creación de beneficio
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/adjudicados" className="link-nav" activeClassName="active">
                    Adjudicados
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/novedades" className="link-nav" activeClassName="active">
                    Novedades
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/registronovedad" className="link-nav" activeClassName="active">
                    Novedades formato de seguimiento
                  </Nav.Link>
                 
                 
                  <Nav.Link as={NavLink} to="/talleres" className="link-nav" activeClassName="active">
                    Talleres
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/meritorios" className="link-nav" activeClassName="active">
                    Aprendices meritorios
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/cancelados" className="link-nav" activeClassName="active">
                    Aprendices Cancelados
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/suspendidos" className="link-nav" activeClassName="active">
                    Aprendices suspendidos
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className="container-boton" onClick={logout}>
            <Boton texto="Cerrar sesión" color="#39A900" textcolor="#ffffff" />
          </div>
        </div>
      ) : (
        <div className="header-container ">
          <div className="logo-container">
            <img
              src="../../../public/images/logobienestar.png"
              alt="logo del Sena"
            />
          </div>

          <div className="sigaas-container">
            <h2 className="sigaas">SIGAAS</h2>

            <div className="navbar align-items-center ">
              <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="">
                    <Nav.Link as={NavLink} exact to="/" className="link-nav" activeClassName="active">
                      Inicio
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/login" className="link-nav" activeClassName="active">
                      Aplicación
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/contacto" className="link-nav" activeClassName="active">
                      Contáctanos
                    </Nav.Link>
                    <Nav.Link href="https://normograma.sena.edu.co/docs/resolucion_sena_0169_2022.htm" className="link-nav">
                      Normatividad
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
          <div className="logo-container">
            <img src="../../../public/images/logo SENA.png" alt="" />
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Nav_index;
