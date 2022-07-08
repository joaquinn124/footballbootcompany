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

    //
    const AddToCart = (item, quantity) => {
        if (IsInCart(item.id)){
            alert('The product already exist in Cart')
        } else {
            //"..." it's a split template that copy cart content + ítem on a new array
            setCart ([...cart, {item, quantity}])
            alert('Added to cart!')
        }
    }

    const IsInCart = (id) => {
        return cart&&cart.some((i) => i.item.id === id)
    }

    const emptyCart = () => {
        setCart([]);
    }

    const totalPrice = () => {
        return cart.reduce( (acum, i) => acum + i.item.quantity * i.item.price, 0)
    }

    /* const iconCart = () => {
        return cart.reduce( (acum, i) => acum+ i.item.quantity, 0)
    } */

    return (
        //Provider node that recibe childrens as prop and includes it on the context provider
        <CartContext.Provider
                value={{
                    cart,
                    addToCart,
                    emptyCart,
                    AddToCart,
                    totalPrice
                }}
            >
                {children}
        </CartContext.Provider>
    )
}