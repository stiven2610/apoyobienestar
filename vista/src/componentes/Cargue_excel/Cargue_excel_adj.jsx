import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Boton_cargue_exc from "../Boton_excel/Boton_excel";
const Cargue_excel_adj = () => {
    return (
        <>
         <Header/>
         <div className=" vh-100 d-flex justify-content-center align-items-center"> 
         <Boton_cargue_exc/>
         </div>
         <Footer/>
        </>
        
    );
}
export default Cargue_excel_adj;