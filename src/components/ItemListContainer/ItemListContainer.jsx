import './ItemListContainer.css';
import Titulos from "../Titulos/Titulos";
import ProductCard from '../ItemCount/ItemCount';

export default function ItemListContainter () {
    return (
        <div className='containterBody'>
            <Titulos titulo={Titulos} />
            <ProductCard />
        </div>

    )
}