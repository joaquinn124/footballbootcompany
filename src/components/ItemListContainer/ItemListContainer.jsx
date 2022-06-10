import './ItemListContainer.css';
import Titulos from "../Titulos/Titulos";
import ItemCount from '../ItemCount/ItemCount';


export default function ItemListContainter () {
    return (
        <div className='containterBody'>
            <Titulos titulo={Titulos} />
            <ItemCount /* stock={'10'} onAdd={OnAdd} *//>
        </div>

    )
}