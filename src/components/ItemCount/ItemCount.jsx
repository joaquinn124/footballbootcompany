import './ItemCount.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
/* import OnAdd from '../ItemListContainer/ItemListContainer'; */

export default function ItemCount () {
    
    const stock = 10;
    const initial = 1;
    const [counter, modifCount] = useState (initial);
    
    /*add qty. from an item to shoppin cart*/
    function addItems () {
        if (counter < stock) {
            modifCount(counter + 1);
        }
        
    }
    
    /*remove qty. from an item to shoppin cart*/
    function removeItems () {
        if (counter > stock) {
            modifCount(counter - 1);
        }
    }

    const OnAdd = () => {
        console.log (counter);
    }

    /*card DOM insertion with products detail*/
    return (
        <Card style={{ width: '13rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>Un producto</Card.Title>
                <Card.Text>
                    <Button variant="info" className='buttonsStyles' onClick={removeItems}> - </Button>
                    <InputGroup className="mb-3 inputSize" >
                        <Form.Control placeholder={counter}/>
                    </InputGroup>
                    <Button variant="info" className='buttonsStyles' onClick={addItems}> + </Button>        
                </Card.Text>
                <Button variant="outline-info" onClick={OnAdd}>Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}