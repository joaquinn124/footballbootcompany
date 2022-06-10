import './ItemListContainer.css';
import Titulos from "../Titulos/Titulos";
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';


export default function ItemListContainter () {
    return (
        <>
            {/* Temp. object with shopping cart items adder */}
            <div className='containterBody'>
                <Titulos titulo={Titulos} />
                <ItemCount /* stock={'10'} onAdd={OnAdd} *//>
            </div>

            {/* ItemListContainer with items list and their descriptions */}
            <div className='cardStyle'>
                <ItemList />
            </div>
        </>
    )
}