import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";

import { getFetch } from "../helpers/productsList";

import {collection, getDoc, getFirestore} from 'firebase/firestore';

const ItemDetailList = () => {

    const [product, setProduct] = useState({});

    const {id} = useParams ();
    ///
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        const db = getFirestore()
        const queryItem = collection(db, 'products', id);

        getDoc(queryItem)
        .then(data => setProduct({id: data.id, ...data.data()}))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])

        /* const queryCollectionFilter = categoriaId ? query(queryCollection, where('collection', '==', categoriaId) )  */

        /* getFetch()
            .then((resp) => setProduct(resp.find(item => item.id === id)))
            .catch(err => console.log(err))
    }, []) */

    console.log(product);

    return <ItemDetail product={product}/>
}

export default ItemDetailList;