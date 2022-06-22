import '../css/ItemList.css';
import Item from "../components/Item";
import Loader from "../components/Loader";


const ItemList = ({products}) => {
    return (
        <div className='itemList'>
            {
                products.length > 0
                ?
                    products.map((card) => (
                        <div key={card.id}>
                            <Item item={card}/>
                        </div>
                    ))
                :
                    (
                    <Loader />
                    )
            }            
        </div>
    )
}

export default ItemList;