import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { getFetch } from '../../helpers/getFetch';

export default function Item () {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect ( () => {
        getFetch ()
        .then((resp) => {
            setProducts(resp)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])
    
    return (
        <>
        {loading ?
                    <h3>Cargando...</h3>
                :
                    products.map(product =>
                            <Card className='d-inline-flex' style={{ width: '18rem' }} key={product.id}>
                                {<Card.Img variant="top" src={product.imageUrl}/>}
                                <Card.Body>
                                    <Card.Title>{product.type}</Card.Title>
                                    <Card.Text>
                                    Stock {product.stock} u.
                                    </Card.Text>
                                    <Button variant="outline-info">Ver detalles</Button>
                                </Card.Body>
                            </Card>
                        )}
        </>
    )
}
