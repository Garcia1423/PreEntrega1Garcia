import cart from "./imagenes/bag-heart.svg"

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-link position-relative">
            <img src={cart} alt={"carrito"} width={30} />
             <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> 19 </span>
        </button>
    )
}
export default CartWidget;