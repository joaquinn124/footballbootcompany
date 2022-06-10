import img from '../Media/products/sifon_1.jpg';
import img2 from '../Media/products/bidon_10.jpg';
import img3 from '../Media/products/bidon_20.jpg';

let products = [
    {
        id: '1',
        type: 'Sifón de soda 500ml',
        stock: 5500,
        imageUrl: img,
    },
    {
        id: '2',
        type: 'Bidón agua mineral 10L',
        stock: 2500,
        imageUrl: img2,
    },
    {
        id: '3',
        type: 'Bidón agua mineral 20L',
        stock: 3000,
        imageUrl: img3,
    },
];

export const getFetch = () => {
    return new Promise ((resolve) => {
        setTimeout ( () => {
            resolve(products)
        }, 3000)
    })
}