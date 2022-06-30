import '../css/ItemListContainer.css';
import { useEffect, useState } from "react";
import Titles from "../components/Titles";
import ItemList from './ItemList';
import ProductsList from '../helpers/productsList';
import ItemDetailList from './ItemDetailList';
import { useParams } from 'react-router-dom';

const ItemListContainter = () => {

    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            res(ProductsList);
        }, 2000);
    })

    const [products, setProducts] = useState([]);

    const { collectionClass } = useParams ();
    console.log(collectionClass);

    useEffect(() => {
        if (collectionClass) {
            promise.then((products) => {
                setProducts(products.filter(product => product.collection === collectionClass))
            }).catch(() => {
                console.log("Something went wrong!");
            })
        } else {
            promise.then((products) => {
                setProducts(products)
            }).catch(() => {
                console.log("Something went wrong!");
            })
        }
    }, [])

    
    return (
        <>
            {/* Header */}
            <div className='containterBody'>
                <Titles title={Titles} />
            </div>

            {/* ItemListContainer with items list and their descriptions */}
            <div className='cardStyle'>
                <ItemList products={products} />
            </div>
        </>
    )
}

export default ItemListContainter;