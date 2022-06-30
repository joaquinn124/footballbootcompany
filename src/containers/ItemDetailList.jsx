import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import Loader from '../components/Loader'
import ProductsList from "../helpers/productsList";
import { getFetch } from "../helpers/productsList";

const ItemDetailList = () => {

    const [product, setProduct] = useState({});

    const {id} = useParams ();
    
    useEffect(() => {
        getFetch()
            .then((resp) => setProduct(resp.find(item => item.id === id)))
            .catch(err => console.log(err))
    }, [])

    return <ItemDetail product={product}/>
}

export default ItemDetailList;