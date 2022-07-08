import '../css/Card.css';
import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
           
    return (
        <>
            <Card className='d-flex justify-content-center pb-2 mb-2' style={{ width: '18rem' }} key={item.id}>
                {<Card.Img variant="top" src={item.imageUrl}/>}
                
                    <Card.Title className='cardBsStyle pt-2'>{item.model} ${item.price}</Card.Title>
                    <Card.Text>
                        <li>series: {item.series}
                        </li>
                        <li>collection: {item.collection}
                        </li>
                    </Card.Text>
                    <div className='d-flex justify-content-center'>
                        <Link to={`/details/${item.id}`}>
                            <Button variant='light' className='cardPriceText ms-2 me-2'>See details</Button>
                        </Link>  
                    </div>
            </Card>
        </>
    )
}

export default Item;