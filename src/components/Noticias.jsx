import SamsungS23 from "./imagenes/galaxy-s23-ultra.jpg"
const Noticias = () => {
    return(
       <div className="container-fluid">
        <div className="row">
            <div className="col">
                <img src={SamsungS23} alt={"noticia1"} className={"img-fluid"}/>
            </div>
        </div>
       </div>
    )
}
export default Noticias;