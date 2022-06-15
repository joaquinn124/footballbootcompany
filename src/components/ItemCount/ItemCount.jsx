import './ItemCount.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

export default function ItemCount (props) {
    
    const [counter, modifCount] = useState (parseInt(props.initial));

    function addItems () {
        if (counter < props.stock) {
            modifCount(counter + 1);
        }
    }

    function removeItems () {
        if (counter > 0 && counter >= counter)
            modifCount(counter - 1);
        }

    /*card DOM insertion with products detail*/
    return (
        <Card style={{ width: '13rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>Un producto</Card.Title>
                <Card.Text className='d-inline-flex'>
                    <Button variant="info" className='buttonsStyles' onClick={removeItems}> - </Button>
                    <InputGroup className="mb-3 inputSize">
                        <Button variant="light" placeholder={props.initial} className='buttonsStyles' onClick={addItems}> {counter} </Button>
                    </InputGroup>
                    <Button variant="info" className='buttonsStyles' onClick={addItems}> + </Button>        
                </Card.Text>
                <Button variant="outline-info" onClick={props.adderFunc}>Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}


/* const stock = 10;
    const initial = 1;
    const [counter, modifCount] = useState (initial);
    
    //add qty. from an item to shoppin cart
    function addItems () {
        if (counter < stock) {
            modifCount(counter + 1);
        }
        
    }
    
    //remove qty. from an item to shoppin cart
    function removeItems () {
        if (counter > stock) {
            modifCount(counter - 1);
        }
    }

    const OnAdd = () => {
        console.log (counter);
    } */