import "../css/Cart.css";

import React from "react";
import { Button, ListGroup } from 'react-bootstrap';
import { useCartContext } from "../contexts/CartContext";

const Cart = () => {

    const {cart, emptyCart} = useCartContext();

    return (
        <>
            <div className="cartContainer">
                {
                    cart.map(item => <ListGroup variant="flush" style={{width: '22rem'}} key={item.id} className="cardCart">
                            <ListGroup.Item>{item.model}</ListGroup.Item>
                            <ListGroup.Item>Unit. Price: {item.price}</ListGroup.Item>
                            <ListGroup.Item>Quantity: {item.quantity}</ListGroup.Item>
                        </ListGroup>
                    )
                }
            </div>
            <div>
                <Button variant='light' className='cartButtonsStyle ms-4' onClick={emptyCart}>Empty Cart</Button>
            </div>
        </>
    )
}

export default Cart;