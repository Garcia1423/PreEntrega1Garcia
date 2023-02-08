import CartWidget from "./CartWidget";
import logo from "./imagenes/apple-logo-black.png";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href={"/"}><img src={logo} alt={"Apple Gar"} width={50} /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href={"/"}>Apple</a>
                            <a className="nav-link" href={"/"}>Android</a>
                            <a className="nav-link" href={"/"}>Accesorios</a>
                        </div>
                        </div>
                    </div>
                    </nav>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget/>
                </div>
            </div>
        </div>
    )
}
export default NavBar;
