import '../css/CartWidget.css';

import { Link } from 'react-router-dom';

const CartIcon = () => {

    const cartLogo = '/media/Cart_PngItem_7368442_first_color.png';
    
    return (
        
            <Link to="/cart">
                <div className='cartIconProp'>
                    <img href="#" src={cartLogo}/>
                </div>                
            </Link>
    )
}

export default CartIcon;