import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext ([]);
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
    
    //Functions and states, now it'll be listed here instead on each component
    const [cart, setCart] = useState ([]);

    const addToCart = (item) => {
        setCart([
            //"..." it's a split template that copy cart content + ítem on a new array
            ...cart,
            item
        ]);
    }

    const emptyCart = () => {
        setCart([]);
    }

    return (
        //Provider node that recibe childrens as prop and includes it on the context provider
        <CartContext.Provider
                value={{
                    cart,
                    addToCart,
                    emptyCart
                }}
            >
                {children}
        </CartContext.Provider>
    )
}