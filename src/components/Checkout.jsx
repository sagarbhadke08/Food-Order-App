import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../Store/CartContext.jsx";
import { CurrencyFormatter } from "../util/Formatting.jsx";
CurrencyFormatter



export default function Checkout() {
    const cartCtx = useContext(CartContext)

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );


    return <Modal>
        <form action="">
            <h2>
                Checkout
            </h2>
            <p>Total Amount: {CurrencyFormatter.format(cartTotal)}</p>
        </form>
    </Modal>
}