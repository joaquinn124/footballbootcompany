import '../css/ItemCount.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const ItemCount = ({stock, onAdd}) => {
    
    const [counter, setCounterItem] = useState(1);

    const addItems = () => {
        if (stock === 0) {
            alert ("Stock unavailable!");
            setCounterItem(0);
        } else {
            if (counter < stock) {
                setCounterItem(counter + 1);
            } else {
                alert ("You can't overpass the available stock")
            }
        }
    }

    const removeItems = () => {
        if (stock === 0) {
            alert ("Stock unavailable!");
            setCounterItem(0);
        } else {
            if (counter > 1) {
                setCounterItem (counter - 1);
            } else {
                alert ("You can't add less than 1 item!");
            }
        }
    }

    const onAddCart = () => {
        if (counter > 0) {
            onAdd(counter)
        }
    }

    const Reset = () => {
        setCounterItem(1);
    }


    /*card DOM insertion with products detail*/
    return (
        <>
            {
                stock > 0
                ?
                <>
                    <div className='d-flex justify-content-evenly'>
                        <Button variant="info" className='buttonsStyles' onClick={removeItems}> - </Button>
                        {counter}
                        <Button variant="info" className='buttonsStyles' onClick={addItems}> + </Button>
                    </div>
                    <div className='d-flex justify-content-center pt-1'>
                        <Button variant="outline-info" style={{ width: '65%' }} onClick={onAddCart}>Add to cart</Button>
                    </div>
                    <div className='d-flex justify-content-center pt-1'>
                        <Button variant="outline-info" style={{ width: '65%' }} onClick={Reset}>Reset</Button>
                    </div>
                 </>
                 :
                 <div>
                    <span>No stock</span>
                 </div>   
            }        
        </>
    )
}

export default ItemCount;