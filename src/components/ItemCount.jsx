import '../css/ItemCount.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Loader from './Loader';
import InputCount from './InputCount';

const ItemCount = ({stock, price, onAdd}) => {
    
    const [counter, setCounterItem] = useState(1);
    const [inputType, setInputType] = useState('button');

    const addItems = () => {
        if (stock === 0) {
            alert ("Stock unavailable!");
            setCounterItem(0);
        } else {
            if (counter < stock) {
                setCounterItem(counter + 1);
            } else {
                alert ("You can't exceed the available stock")
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
            setInputType('input');
        }
    }

    const Reset = () => {
        setCounterItem(1);
    }

    /*card DOM insertion with products detail*/
    return (
        <>
            {
                /*Comparison logic to render ItemDetail if item stock >0 */
                stock > 0
                ?
                    <>
                        {
                            /*Comparison logic to re-render ItemDetail if user add items to cart*/
                            inputType === 'button'
                            ?
                                <>
                                    <div className='d-flex justify-content-evenly'>
                                        <Button variant='light' className='buttonsStyles' onClick={removeItems}> - </Button>
                                        <i>{counter}</i>
                                        <Button variant='light' className='buttonsStyles' onClick={addItems}> + </Button>
                                    </div>
                                    <div className='d-flex justify-content-center pt-1'>
                                        <Button variant='light' className='buttonsStyles' style={{ width: '65%' }} onClick={onAddCart}>Add to cart</Button>
                                    </div>
                                    <div className='d-flex justify-content-center pt-1'>
                                        <Button variant='light' className='buttonsStyles mb-1' style={{ width: '65%' }} onClick={Reset}>Reset</Button>
                                    </div>
                                </>
                            :
                                <InputCount />
                        }
                    </>
                :
                 <div>
                    <Loader />
                 </div>
            }        
        </>
    )
}

export default ItemCount;