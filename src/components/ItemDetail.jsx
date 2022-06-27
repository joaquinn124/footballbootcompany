import "../css/ItemDetail.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({product}) => {

    return (
        <div className='itemDetailContainer'>
                <Card className='d-flex justify-content-center' style={{ width: '35rem' }}>
                    {<Card.Img variant="top" src={product.imageUrl}/>}
                    <Card.Title className='itemDetailTitle'>{product.model}</Card.Title>
                    <Card.Text className='card-detail-button cardDescText ps-1 pe-1'>
                    {product.description}</Card.Text>
                    <Button variant='light' className='cardPriceText ms-2 me-2 mb-1'>
                    Price ${product.price}
                    </Button>
                </Card>
        </div>
    )
} 

export default ItemDetail;