
let productsList = [
    {
        id: '1',
        model: 'Adidas Predator Freak.1',
        series: 'Predator',
        collection: 'limited',
        price: 180,
        stock: 5500,
        imageUrl: '/media/products/Adidas_Predator_Freak.1 SG.jpg',
        description: 'Every time you cross that white line, you enter a whole new world. An alternative reality where you call the shots. The pitch is yours to control. Set your inner freak free in adidas Predator.'
    },
    {
        id: '2',
        model: 'Nike Mercurial Vapor 14',
        series: 'Mercurial Vapor',
        collection: 'regular',
        price: 130,
        stock: 2500,
        imageUrl: '/media/products/Nike_Mercurial_Vapor_14_Academy FG-MG.jpg',
        description: 'The Nike Mercurial Vapor 14 Elite FG features a new look with specialised components to let you play your fastest from start to finish.'
    },
    {
        id: '3',
        model: 'Puma Ultra 1.3 MXSG Pro',
        series: 'Ultra',
        collection: 'regular',
        price: 160,
        stock: 5,
        imageUrl: '/media/products/Puma_Ultra_1.3 MxSG.jpg',
        description: 'Take your game to the next level in the lightest boots on the market, formidable ULTRA 1.4. Built specifically for unbeatable speed and control, the updated ULTRACUT upper provides multi-layered support.'
    },
    {
        id: '4',
        model: 'New Balance Tekela V3+',
        series: 'Tri Aura Pack',
        collection: 'limited',
        price: 190,
        stock: 10,
        imageUrl: '/media/products/New Balance_Tekela_V3+ Pro FG.jpg',
        description: 'The New Balance Tekela V3+ Pro FG cleats are ideal for the intelligent and calculated player whose sole purpose is to win. Featuring a redesigned Kinetic Stitch construction that offers durability and flexibility. Buy it for a impressive agility and control.'
    },
    {
        id: '5',
        model: 'Joma Top Flex 2202 In',
        series: 'Top Flex',
        collection: 'regular',
        price: 55,
        stock: 100,
        imageUrl: '/media/products/Joma_Top_Flex_2202_In.jpg',
        description: 'The upper part of these Joma futsal shoes is made of high quality and very flexible leather. This boots incorporate PROTECTION technology in the toecap to reinforce their resistance and stability when hitting.'
    },
    {
        id: '6',
        model: 'Diadora Pichichi 3 MG 14',
        series: 'Pichichi',
        collection: 'regular',
        price: 35,
        stock: 20,
        imageUrl: '/media/products/Diadora_Pichichi_3_MG 14.jpg',
        description: 'The perfect pair of boots for training and football matches with your friends. With water-resistant Suprell upper, anti-stretch lining and insole with flex points on the ball of the foot guarantee flexibility and control.'
    },
];

export const getFetch = (id) => {
    return new Promise ( (res, rej) => {
        setTimeout(() => {
            if (id) {
                res(productsList)
            } else {
                res(productsList)
            }
        }, 2000)
    })
}

export default productsList;