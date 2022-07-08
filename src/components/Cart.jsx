import "../css/Cart.css";

import React from "react";
import { Button, ListGroup } from 'react-bootstrap';
import { useCartContext } from "../contexts/CartContext";

const Cart = () => {

    const {cart, emptyCart, totalPrice} = useCartContext();

    return (
        <>
            <div className="cartContainer">
                {
                    
                    cart.map(i =>
                    
                    <ListGroup variant="flush" style={{width: '22rem'}} key={i.item.id} className="cardCart">
                            <ListGroup.Item>{i.item.model}</ListGroup.Item>
                            <ListGroup.Item>Unit. Price: {i.item.price}</ListGroup.Item>
                            <ListGroup.Item>Quantity: {i.item.quantity}</ListGroup.Item>
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