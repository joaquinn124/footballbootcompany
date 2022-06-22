import '../css/ItemListContainer.css';
import { useEffect, useState } from "react";
import Titulos from "../components/Titulos";
import ItemList from './ItemList';


import img from '../media/products/Adidas_Predator_Freak.1 SG.jpg';
import img2 from '../media/products/Nike_Mercurial_Vapor_14_Academy FG-MG.jpg';
import img3 from '../media/products/Puma_Ultra_1.3 MxSG.jpg';


const ProductsList = [
    {
        id: '1',
        type: 'Adidas Predator Freak.1',
        stock: 120,
        imageUrl: img,
    },
    {
        id: '2',
        type: 'Nike Mercurial Vapor 14',
        stock: 250,
        imageUrl: img2,
    },
    {
        id: '3',
        type: 'Puma Ultra 1.3',
        stock: 3,
        imageUrl: img3,
    },
]


const ItemListContainter = () => {

    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            res(ProductsList);
        }, 2000);
    })

    const [products, setProducts] = useState([]);

    useEffect(() => {
        promise.then((products) => {
            setProducts(products)
        }).catch(() => {
            console.log("Something went wrong!");
        })
    }, [])

    
    return (
        <>
            {/* Header */}
            <div className='containterBody'>
                <Titulos titulo={Titulos} />
            </div>

            {/* ItemListContainer with items list and their descriptions */}
            <div className='cardStyle'>
                <ItemList products={products} />
            </div>
        </>
    )
}

export default ItemListContainter;