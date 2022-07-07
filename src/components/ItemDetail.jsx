import "../css/ItemDetail.css";

import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';
import { useCartContext } from "../contexts/CartContext";

const ItemDetail = ({product}) => {
    
    const {cart, addToCart} = useCartContext();

    const onAdd = (counter) => {
        alert ("Added to cart!");
        console.log(`${counter} items added`);
        addToCart ({...product, quantity: counter})
    }

    console.log(cart);

    return (
        <div className='itemDetailContainer'>
                <Card className='d-flex justify-content-center' style={{ width: '25rem'}}>
                    {<Card.Img variant="top" src={product.imageUrl}/>}
                    <Card.Title className='itemDetailTitle'>{product.model} ${product.price}</Card.Title>
                    <Card.Text className='card-detail-button cardDescText ps-1 pe-1'>
                    {product.description}</Card.Text>
                    <div className='flex-column justify-content-center'>
                        <ItemCount stock={product.stock} onAdd={onAdd}/>
                    </div>
                </Card>
        </div>
    )
} 

export default ItemDetail;