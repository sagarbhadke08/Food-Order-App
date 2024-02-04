import { createContext , useReducer} from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { },
});

function cartReducer(state, action){
    if(action.type==='ADD-ITEM'){
        //update the state item to a meal item
    }

    if(action.type==='REMOVE-ITEM'){
        //remove the state item from    
    }

    return state;
    
}

export function CartContextProvider({ children }) {

    useReducer();
    return <CartContext.Provider>{children}</CartContext.Provider>
}

export default CartContext;