import '../css/CartWidget.css';

import { Link } from 'react-router-dom';
import { useCartContext } from "../contexts/CartContext";
import { Badge, Button } from 'react-bootstrap';

const CartIcon = () => {
    
    const {cart, iconCart} = useCartContext();

    return (
        <>
            <Link to="/cart">
                <Button variant='light' className='buttonsStyles cartMobile'>
                    money expender 
                    {<Badge bg='danger' className='ms-1 cartCounter'>
                        {cart.length === 0
                        ?
                        ''
                        : iconCart()
                        }
                    </Badge>}
                </Button>
            </Link>
        </>
    )
}

export default CartIcon;