import { useContext } from 'react';

import logoImg from '../assets/logo.jpg';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';


export default function Header() {

    const cartCtx = useContext(CartContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {

        totalNumberOfItems + item.quantity;
    }, 0);
    console.log(cartCtx);
    // console.log(totalNumberOfItems);

    return (
        <>
            <header id='main-header'>
                <div id="title">
                    <img src={logoImg} alt="A restaurant" />
                    <h1>ReactFood</h1>
                </div>
                <nav>
                    <Button textOnly >Cart ({totalCartItems})</Button>
                </nav>
            </header>

        </>
    )
}