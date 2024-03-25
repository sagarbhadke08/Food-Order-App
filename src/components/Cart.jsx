import { useContext } from "react";

import Modal from "./UI/Modal.jsx";
import CartContext from "../Store/CartContext.jsx";
import userProgressContext from "../Store/UserProgressContext.jsx"
import { CurrencyFormatter } from "../util/Formatting.js";
import Button from "./UI/Button.jsx";
import CartItem from "./CartItem.jsx";


export default function Cart() {

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(userProgressContext);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );
    function handleCloseCart() {
        userProgressCtx.hideCart();
    }



    return (
        <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                    < CartItem key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                    />
                ))}
            </ul>
            <p className="cart-total">{CurrencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                <Button onClick={handleCloseCart}>Go to Checkout</Button>
            </p>
        </Modal>
    );
}