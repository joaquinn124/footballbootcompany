import '../css/Card.css';
import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = ({item}) => {
    
    const onAdd = (counter) => {
        alert ("Added to cart!");
        console.log(`${counter} items added`);
    }
       
    return (
        <>
            <Card className='d-flex justify-content-center' style={{ width: '18rem' }} key={item.id}>
                {<Card.Img variant="top" src={item.imageUrl}/>}
                <Card.Body>
                    <Card.Title className='cardBsStyle'>{item.type}</Card.Title>
                    <Card.Text className='cardBsStyle'>
                    Stock {item.stock} u.
                    </Card.Text>
                    {/* <Button variant="outline-info">See details</Button> */}
                </Card.Body>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </Card>        
        </>
    )
}

export default Item;