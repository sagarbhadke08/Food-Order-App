import { CurrencyFormatter } from "../util/Formatting"

export default function CartItem({name, quantity, price}) {
    return (
        <li className='cart-item'>
            <p>
                {name} - {quantity} x {CurrencyFormatter.format(price)}
            </p>
            <p className='cart-item-actions'>
                <button>-</button>
                <button>{quantity}</button>
                <button>+</button>
            </p>
        </li>
    )
}
