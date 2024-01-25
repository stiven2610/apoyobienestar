import Navbar from "../navbar/navbar";
import Footer from "../Footer/Footer";
import { Carousel } from "react-bootstrap"; // Importa el componente Carousel de Bootstrap
import "./styles.css";
const Padre = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4 py-5 " style={{ backgroundColor: "#f8f8f8" }}>
        <div className="row">
          <div className="col-md-12 text-center">
            <h4 className= ""style={{ color: "#39A900" }}>BIENESTAR AL APRENDIZ</h4>
            <p className="text-muted ">
              Es una estrategia institucional para contribuir en la permanencia
              y el desempeño exitoso de los aprendices de la entidad en su
              proceso formativo con enfoque territorial y diferencial.
            </p>
          </div>
        </div>

        <div className="row ">
          <div className="col-md-12 ">
            <Carousel interval={3000}>
              <Carousel.Item>
                <img
                  className="img-carousel "
                  src="https://www.wradio.com.co/resizer/cXRNhRWnP1qz5piF1R6Ulc-9_rc=/1024x0/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/QGJ6WGMV45GD7GPAV2CTEKCSME.png"
                  alt="Imagen 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-carousel "
                  src="https://www.sena.edu.co/es-co/comunidades/aprendices/PublishingImages/Paginas/bienestarAprendiz/bienestar_SENA_600.jpg"
                  alt="Imagen 2"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="row mt-3 text-center">
          <h1 className="m-3"style={{ color: "#39A900" }}>Equipo de Bienestar al Aprendiz</h1>
          <div className="col-md-4 mb-4 ">
            <div className="border rounded p-2 shadow">
              <img
                src="https://via.placeholder.com/150"
                alt="Persona 1"
                className="img-fluid"
              />
              <h5>Ella Johana</h5>
              <p>Lider de Bienestar</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="border rounded p-2 shadow">
              <img
                src="https://via.placeholder.com/150"
                alt="Persona 2"
                className="img-fluid"
              />
              <h5>Sandra mora</h5>
              <p>Trabajadora social</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="border rounded p-2 shadow">
              <img
                src="https://via.placeholder.com/150"
                alt="Persona 3"
                className="img-fluid"
              />
              <h5>Claudia Yunitsa</h5>
              <p>Secretaria</p>
            </div>
          </div>
        </div>

        <div className="row m-4 text-center">
          <h1 className="p-3"style={{ color: "#39A900" }}>Objetivos Plan de Bienestar al Aprendiz</h1>
          <div className="col-md-4 ">
            <div className="col-md-12 mt-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"style={{ color: "#39A900" }}>Objetivo estratégico 1</h5>
                  <p className="card-text">
                    Implementar estrategias de acompañamiento para el desarrollo
                    integral del aprendiz en su proceso formativo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="col-md-12 mt-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"style={{ color: "#39A900" }}>Objetivo estratégico 2</h5>
                  <p className="card-text">
                    Incentivar al aprendiz en su proceso de formación
                    profesional integral mediante la implementación de un
                    programa de estímulos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="col-md-12 mt-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"style={{ color: "#39A900" }}>Objetivo estratégico 3</h5>
                  <p className="card-text">
                    Entregar con oportunidad y calidad los servicios de
                    bienestar al aprendiz documentando procedimientos que
                    soporten una operación ágil y flexible.
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="row m-3 mt-4 text-center">
          <div className="col-md-12 ">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"style={{ color: "#39A900" }}>
                  ¿Quiénes pueden acceder al Plan de Bienestar al Aprendiz?
                </h5>
                <p className="card-text">
                  Aprendices matriculados en formación Laboral y Formación
                  tecnológica, de todos los niveles y jornadas, en sus
                  diferentes modalidades: presencial, virtual o a distancia. Los
                  Centros de Formación Profesional Integral incorporarán
                  estrategias para la inclusión de aprendices pertenecientes a
                  las comunidades minoritarias y vulnerables
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-3 mt-4 text-center">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"style={{ color: "#39A900" }}>
                  ¿Qué beneficios ofrece el Plan de Bienestar al Aprendiz?
                </h5>
                <p className="card-text">
                  Consolida proyectos de vida. Motiva la culminación exitosa del
                  proceso formativo. Promueve hábitos de vida saludables.
                  Fortalece las habilidades blandas de los aprendices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Padre;
