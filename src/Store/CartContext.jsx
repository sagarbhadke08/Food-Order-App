import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { },
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        //update the state item to a meal item
        const existingCartIndex = state.items.findIndex(
            (item) => state.id === action.item.id
        );

        const updatedItems = [...state.items];

        if (existingCartIndex > -1) { // bcz find index will return -1 if it does not find index value

            const existingItem = state.items[existingCartIndex];

            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
            updatedItems[existingCartIndex] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity: 1 })
        }

        return { ...state, items: updatedItems };
    }

    if (action.type === 'REMOVE_ITEM') {
        //remove the state item from    
        const existingCartIndex = state.items.findIndex(
            (item) => state.id === action.id
        );

        const existingCartItem = state.items[existingCartIndex];

        const updatedItems = [...state.items];
        if (existingCartIndex.quantity === 1) {

            updatedItems.splice(existingCartIndex, 1);
        } else {
            //if q is grater than 1

            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,
            };
            updatedItems[existingCartIndex] = updatedItem;
        }
        return { ...state, items: updatedItems };
    }

    return state;

}

export function CartContextProvider({ children }) {


    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });



    function addItem(item) {
        dispatchCartAction({ type: 'ADD_ITEM', item })
    }

    function removeItem(id) {
        dispatchCartAction({ type: 'REMOVE_ITEM', id })
    }

    const cartContext = {
        items: cart.items,
        addItem,// pointing to the function
        removeItem,
    }

   // console.log(cartContext);

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartContext;