import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext ([]);
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
    
    //Functions and states, now it'll be listed here instead on each component
    const [cart, setCart] = useState ([]);

    const addToCart = (objProd) => {
        
        let previousCart=[...cart];

        //Statements to check items in Cart, if already existis, it add more qty
        if (previousCart.some((item) => item.id === objProd.id)) {
            previousCart.find((item) => item.id === objProd.id).quantity += objProd.quantity;
            setCart(previousCart);
        } else {
            setCart([...cart, objProd])
        }
    }

    const emptyCart = () => setCart([]);

    const totalPrice = () => {

        let total = 0;

        cart.forEach((newProduct) => {
            total +=
                parseInt(newProduct.price) * parseInt(newProduct.quantity);
            })
        return parseInt(total);
    }

    const removeProduct = (id) => {
        setCart(cart.filter((newProduct) => newProduct.product.id !== id));
    }

    const iconCart = () => {
        return cart.reduce( (acum, value) => acum+ value.quantity, 0)
    }

    return (
        //Provider node that recibe childrens as prop and includes it on the context provider
        <CartContext.Provider
                value={{
                    cart,
                    addToCart,
                    emptyCart,
                    totalPrice,
                    removeProduct,
                    iconCart
                }}
            >
                {children}
        </CartContext.Provider>
    )
}