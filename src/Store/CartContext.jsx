import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { },
});

function cartReducer(state, action) {
    if (action.type === 'ADD-ITEM') {
        //update the state item to a meal item
        const existingCartIndex = state.item.findIndex(
            (item) => state.id === action.item.id
        );

        const updatedItems = [...state.items];

        if (existingCartIndex > -1) {

            const existingItem = state.items[existingCartIndex];

            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
            }
            updatedItems[existingCartIndex]=updatedItem
        } else {
            updatedItems.push({...action.item, quantity:1})
        }

        return {...state, items:updatedItems}
    }

    if (action.type === 'REMOVE-ITEM') {
        //remove the state item from    
    }

    return state;

}

export function CartContextProvider({ children }) {

    useReducer(cartReducer, { items: [] });
    return <CartContext.Provider>{children}</CartContext.Provider>
}

export default CartContext;