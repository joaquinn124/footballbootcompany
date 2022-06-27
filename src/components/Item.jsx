import '../css/Card.css';
import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';

const Item = ({item}) => {
    
    const onAdd = (counter) => {
        alert ("Added to cart!");
        console.log(`${counter} items added`);
    }
       
    return (
        <>
            <Card className='d-flex justify-content-center pb-2 mb-2' style={{ width: '18rem' }} key={item.id}>
                {<Card.Img variant="top" src={item.imageUrl}/>}
                <Card.Body>
                    <Card.Title className='cardBsStyle'>{item.model}</Card.Title>
                    <div className='d-flex justify-content-center'>
                        <div className='flex-column justify-content-center'>
                            <Card.Text className='card-detail-button /* cardBsStyle */'>
                            <a className="card-detail-button" href="#"><i className="card-detail-cart-icon ion-bag"></i>${item.price}</a><a className="card-detail-button" href="#"><i className="card-detail-cart-icon ion-bag"></i>  See details</a>
                            {/* Stock {item.stock} u. */}
                            </Card.Text>
                        </div>
                    </div>
                </Card.Body>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </Card>        
        </>
    )
}

export default Item;