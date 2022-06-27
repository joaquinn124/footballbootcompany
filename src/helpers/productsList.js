
let productsList = [
    {
        id: '1',
        model: 'Adidas Predator Freak.1',
        series: 'Predator',
        colecction: 'limited',
        price: 120,
        stock: 5500,
        imageUrl: '/media/products/Adidas_Predator_Freak.1 SG.jpg',
        description: 'Every time you cross that white line, you enter a whole new world. An alternative reality where you call the shots. The pitch is yours to control. Set your inner freak free in adidas Predator.'
    },
    {
        id: '2',
        model: 'Nike Mercurial Vapor 14',
        series: 'Mercurial Vapor',
        colecction: 'regular',
        price: 70,
        stock: 2500,
        imageUrl: '/media/products/Nike_Mercurial_Vapor_14_Academy FG-MG.jpg',
        description: 'The Nike Mercurial Vapor 14 Elite FG features a new look with specialised components to let you play your fastest from start to finish.'
    },
    {
        id: '3',
        model: 'Puma Ultra 1.3',
        series: 'Ultra',
        colecction: 'regular',
        price: 160,
        stock: 5,
        imageUrl: '/media/products/Puma_Ultra_1.3 MxSG.jpg',
        description: 'Take your game to the next level in the lightest boots on the market, formidable ULTRA 1.4. Built specifically for unbeatable speed and control, the updated ULTRACUT upper provides multi-layered support.'
    },
];

export const getFetch = (id) => {
    return new Promise ( (res, rej) => {
        setTimeout(() => {
            if (id) {
                res(productsList.find(item => item.id === id))
            } else {
                res(productsList)
            }
        }, 2000)
    })
}

export default productsList;

let product = {
    id: '2',
    model: 'Nike Mercurial Vapor 14',
    series: 'Mercurial Vapor',
    colecction: 'regular',
    price: 70,
    stock: 2500,
    imageUrl: '/media/products/Nike_Mercurial_Vapor_14_Academy FG-MG.jpg',
    description: 'The Nike Mercurial Vapor 14 Elite FG features a new look with specialised components to let you play your fastest from start to finish.'
};

export const getFetchOne = () => {
    return new Promise ((res, rej) => {
        setTimeout( () => {
            res(product)
        }, 2000)
    })
}
