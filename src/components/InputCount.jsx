import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const InputCount = () => {
    
    return (
        <>
        <div className="d-flex justify-content-center mb-1">
            <Link to="/cart">
                <Button variant='light' className='buttonsStyles' style={{ width: '100%' }}
                    onClick={()=> console.log('go to cart')}
                    >Go to Cart
                </Button>
            </Link>
            <Link to="/">
                <Button variant='light' className='buttonsStyles ms-1' style={{ width: '100%' }}
                    onClick={()=> console.log('go to home')}
                    >Continue shopping!
                </Button>
            </Link>
        </div>
        </>
    )
}

export default InputCount;