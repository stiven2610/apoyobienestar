import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import Tabla_Adjudicados from "../tabla_adjudicados/Tabla_adjudicados";
import Buscador from "../Buscador/Buscador.jsx";
const Aprendices_adjudicados = () => {
    return (
        <>
        <Header/>
        <Buscador/>
        <Tabla_Adjudicados/>
        <Footer/>
        </>
    );
};
export default Aprendices_adjudicados;