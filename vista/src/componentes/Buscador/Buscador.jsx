import "./styles.css"
const Buscador = () => {
    return (
        <div className="navbar">
            <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    );
};
export default Buscador;
