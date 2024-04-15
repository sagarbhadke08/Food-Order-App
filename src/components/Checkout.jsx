import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../Store/CartContext.jsx";
import { CurrencyFormatter } from "../util/Formatting.js";
import Input from "./Input.jsx";
import UserProgressContext from "../Store/UserProgressContext.jsx";
import Button from "./UI/Button.jsx";




export default function Checkout() {
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    function handleClose() {
        userProgressCtx.hideCheckout();

    }

    return (
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
            <form action="">
                <h2>Checkout</h2>
                <p>Total Amount: {CurrencyFormatter.format(cartTotal)}</p>

                <Input label="Full Name" type="text" id="full-name" />
                <Input label="E-Mail Address" type="email" id="email" />
                <Input label="Street" type="text" id="street" />
                <div>
                    <Input label="Postal Code" type="text" id="postal code" />
                    <Input label="City" type="text" id="city" />
                </div>
                <p className="modal-actions">
                    <Button type="button" textOnly onClick={handleClose} >Close</Button>
                    <Button>Submit Order</Button>
                </p>
            </form>
        </Modal>
    );
}