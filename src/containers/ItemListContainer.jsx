import '../css/ItemListContainer.css';
import { useEffect, useState } from "react";
import Titles from "../components/Titles";
import ItemList from './ItemList';
import ProductsList from '../helpers/productsList';
import ItemDetailList from './ItemDetailList';
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';

const ItemListContainter = () => {

    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            res(ProductsList);
        }, 2000);
    })
    
    const [products, setProducts] = useState([]);
    
    const { collectionClass } = useParams ();

    ///
    const {categoriaId} = useParams ();
    const [loading, setLoading] = useState(true);
    const queryCollectionFilter = query(queryCollection, where('collection', '==', categoriaId))

    useEffect(() => {

        ///
        const db = getFirestore()
        const queryCollection = collection(db, 'products')

        const queryCollectionFilter = categoriaId ? query(queryCollection, where('collection', '==', categoriaId)) : queryCollection

        getDocs(queryCollectionFilter)
        .then(data => setProducts(data.docs.map(item => ({id: item.id, ...item.data() }))))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))

    }, [categoriaId])


        /* if (collectionClass) {
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
    }, [collectionClass]) */

    
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