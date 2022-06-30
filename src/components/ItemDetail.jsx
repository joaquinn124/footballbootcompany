import "../css/ItemDetail.css";
import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({product}) => {

    const onAdd = (counter) => {
        alert ("Added to cart!");
        console.log(`${counter} items added`);
    }

    return (
        <div className='itemDetailContainer'>
                <Card className='d-flex justify-content-center' style={{ width: '25rem'}}>
                    {<Card.Img variant="top" src={product.imageUrl}/>}
                    <Card.Title className='itemDetailTitle'>{product.model} ${product.price}</Card.Title>
                    <Card.Text className='card-detail-button cardDescText ps-1 pe-1'>
                    {product.description}</Card.Text>
                    {/* <Button variant='light' className='cardPriceText ms-2 me-2 mb-1'>
                    Price ${product.price}
                    </Button> */}
                    <div className='flex-column justify-content-center'>
                        <ItemCount stock={product.stock} onAdd={onAdd}/>
                    </div>
                </Card>
        </div>
    )
} 

export default ItemDetail;