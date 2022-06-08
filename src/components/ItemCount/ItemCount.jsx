import './ItemCount.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function itemCounter ({stock, initial, onAdd, onRemove}) {
    const [increase, modifCount] = useState (0);
    /* const [decrease, modifCount] = useState (increase); */
    stock = 10;
    initial = 1;
    onAdd = modifCount(increase + 1);

};

const ProductCard = () => {
    
    



    const [increase, modifCount] = useState (0);
    
    function addItems () {
        modifCount(increase + 1);
        console.log(increase);
    }
    const [decrease, modifCount2] = useState (increase);
    
    function removeItems () {
        modifCount2(decrease - 1);
        console.log(decrease);
    }

    return (
        <Card style={{ width: '13rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>Un producto</Card.Title>
                <Card.Text>
                    <Button variant="info" className='buttonsStyles' onClick={removeItems}> - </Button>
                    <input className='ms-1 me-1 inputSize' placeholder='1'></input>
                    <Button variant="info" className='buttonsStyles' onClick={addItems}> + </Button>        
                </Card.Text>
                <Button variant="outline-info">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;