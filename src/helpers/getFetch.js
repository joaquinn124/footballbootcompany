import img from '../media/products/Adidas_Predator_Freak.1 SG.jpg';
import img2 from '../media/products/Nike_Mercurial_Vapor_14_Academy FG-MG.jpg';
import img3 from '../media/products/Puma_Ultra_1.3 MxSG.jpg';

let productsList = [
    {
        id: '1',
        type: 'Adidas Predator Freak.1',
        stock: 5500,
        imageUrl: img,
    },
    {
        id: '2',
        type: 'Nike Mercurial Vapor 14',
        stock: 2500,
        imageUrl: img2,
    },
    {
        id: '3',
        type: 'Puma Ultra 1.3',
        stock: 3000,
        imageUrl: img3,
    },
];

export const getFetch = () => {
    return new Promise ((resolve) => {
        setTimeout ( () => {
            resolve(productsList)
        }, 3000)
    })
}