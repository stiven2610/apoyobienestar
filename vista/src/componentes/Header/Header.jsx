import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  const linkStyle = { color: "white" };

  return (
    <nav className="navbar navbar-expand-lg" style={{ background: "#39A900" }}>
      <div className="container">
        <h1 className="navbar-brand">Bienestar</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/adjudicados" className="nav-link" style={linkStyle}>
                Beneficiarios
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/beneficio" className="nav-link" style={linkStyle}>
                Creación de Beneficio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tallermensual" className="nav-link" style={linkStyle}>
                Creación de Taller
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={linkStyle}
              >
                Filtros aprendiz
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/tablalectiva" className="dropdown-item">
                    A punto de cumplir etapa lectiva
                  </Link>
                </li>
                <li>
                  <Link to="/culminaformacion" className="dropdown-item">
                    A punto de culminar formación
                  </Link>
                </li>
                <li>
                  <Link to="/asistencia" className="dropdown-item">
                    Asistencia taller
                  </Link>
                </li>
                <li>
                  <Link to="/formatoseguimiento" className="dropdown-item">
                    Novedades Formato de seguimiento
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={linkStyle}
              >
                Usuario
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/datosusuario" className="dropdown-item">
                    Gestionar datos
                  </Link>
                </li>
                <li  style={{colorg:"#0000"}}>
                  <a className="dropdown-item" href="/">
                    Salir
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
