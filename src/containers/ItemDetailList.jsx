import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import Loader from '../components/Loader'
import ProductsList, { getFetchOne } from "../helpers/productsList";
import { getFetch } from "../helpers/productsList";

const ItemDetailList = () => {

    /* const getItem = new Promise ((res, rej) => {
        setTimeout(() =>{
            res(ProductsList)
        }, 2000);
    }); */

    const [product, setProduct] = useState({});

    useEffect(() => {
        getFetchOne()
            .then((resp) => setProduct(resp))
            .catch(err => console.log(err))
        
        /* getItem.then((product) => {
            setProduct(product)
        }).catch(() => {
            console.log("Something went wrong!")
        })  */
    }, [])

    /* 
    Formato de importación para todo un array en vez del objeto "product"
    const [products, setProduct] = useState([]);
    useEffect(() => {
        getFetch()
            .then((resp) => setProduct(resp))
            .catch(err => console.log(err))
    }, []) */

    return <ItemDetail product={product}/>
}

export default ItemDetailList;