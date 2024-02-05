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



            const updatedItem = {
                ...state.items[existingCartIndex],
                quantity: state.items[existingCartIndex].quantity + 1;
            }
        } else {
            updatedItems.push(action.item)
        }
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