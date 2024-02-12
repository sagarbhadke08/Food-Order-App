import { useContext } from 'react';

import logoImg from '../assets/logo.jpg';
import Button from './UI/Button.jsx';
import CartContext from '../Store/CartContext.jsx';
import UserProgressContext from '../Store/UserProgressContext.jsx';

export default function Header() {

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {

        totalNumberOfItems + item.quantity;
    }, 0);

    console.log(cartCtx);
    // console.log(totalNumberOfItems);

    function handleShowCart() {
        userProgressCtx.showCart();
    }

    return (
        <>
            <header id='main-header'>
                <div id="title">
                    <img src={logoImg} alt="A restaurant" />
                    <h1>ReactFood</h1>
                </div>
                <nav>
                    <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
                </nav>
            </header>

        </>
    )
}