import "../css/Cart.css";

import React from "react";
import { Button, ListGroup } from 'react-bootstrap';
import { useCartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const {cart, emptyCart, totalPrice} = useCartContext();

    return (
        cart.length === 0
        ?
            <Link to="/" className='cartButtonsStyle ms-4'>Oops the cart it's empty</Link>
        :
            <>
                <div className="cartContainer">
                    {
                        
                        cart.map(item =>
                        
                        <ListGroup variant="flush" style={{width: '22rem'}} key={item.id} className="cardCart">
                                <ListGroup.Item>{item.model}</ListGroup.Item>
                                <ListGroup.Item>Unit. Price: {item.price}</ListGroup.Item>
                                <ListGroup.Item>Quantity: {item.quantity}</ListGroup.Item>
                        </ListGroup>
                        )
                    }
                </div>
                <div>
                    <Button variant='light' className='cartButtonsStyle ms-4'>Total: {totalPrice()}</Button>
                </div>
                <div>
                    <Button variant='light' className='cartButtonsStyle ms-4' onClick={emptyCart}>Empty Cart</Button>
                </div>
            </>
    )
}

export default Cart;