import ItemDetailList from '../containers/ItemDetailList';
import ItemListContainter from '../containers/ItemListContainer';
import '../css/Body.css';


const Body = () => {
    return (
        <>
            <div className="bodyProp">
                <ItemListContainter />
                <ItemDetailList />
            </div>
        
        </>
    )
}

export default Body;