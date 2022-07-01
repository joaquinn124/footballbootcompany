
let productsList = [
    {
        id: '1',
        model: 'Nike Tiempo Legend 9 Elite',
        series: 'Tiempo',
        collection: 'regular',
        price: 231,
        stock: 5,
        imageUrl: '/media/products/Nike_Tiempo_Legend_9 Elite.jpg',
        description: 'One of our lightest Tiempos yet, the Nike Tiempo Legend 9 Elite FG lets you go forward in a low-top design that`s reimagined for attack.'
    },
    {
        id: '2',
        model: 'Nike Mercurial Vapor 14 FG',
        series: 'Mercurial Vapor',
        collection: 'regular',
        price: 130,
        stock: 2500,
        imageUrl: '/media/products/Nike_Mercurial_Vapor_14_Academy FG-MG.jpg',
        description: 'The Nike Mercurial Vapor 14 Elite FG features a new look with specialised components to let you play your fastest from start to finish.'
    },
    {
        id: '3',
        model: 'Puma Ultra 1.3 MXSG Pro FG',
        series: 'Ultra',
        collection: 'regular',
        price: 160,
        stock: 5,
        imageUrl: '/media/products/Puma_Ultra_1.3 MxSG.jpg',
        description: 'Take your game to the next level in the lightest boots on the market, formidable ULTRA 1.4. Built specifically for unbeatable speed and control, the updated ULTRACUT upper provides multi-layered support.'
    },
    {
        id: '4',
        model: 'New Balance Tekela V3+ Aura',
        series: 'Tri Aura Pack',
        collection: 'limited',
        price: 190,
        stock: 10,
        imageUrl: '/media/products/New Balance_Tekela_V3+ Pro FG.jpg',
        description: 'The New Balance Tekela V3+ Pro FG cleats are ideal for the intelligent and calculated player whose sole purpose is to win. Featuring a redesigned Kinetic Stitch construction that offers durability and flexibility. Buy it for a impressive agility and control.'
    },
    {
        id: '5',
        model: 'Adidas X Speedflow.1 FG AG',
        series: 'Speedflow',
        collection: 'regular',
        price: 130,
        stock: 10,
        imageUrl: '/media/products/Adidas_X_Speedflow.1 FG.jpg',
        description: 'Speedflow with laceless closure system, which provides a fine touch surface and a clean hit on the ball. Lightweight construction with Carbitex carbon fibers in the forefoot, which creates an efficient power discharge at high speed.'
    },
    {
        id: '6',
        model: 'Puma Future 1.2 FG Magenta',
        series: 'Future',
        collection: 'regular',
        price: 160,
        stock: 20,
        imageUrl: '/media/products/Puma_Future_1.2 FGAG Magenta.jpg',
        description: 'Unbeatable features, including PUMA FUZIONFIT compression band, ultra-lightweight materials, a textured upper for ball grip and the Dynamic Motion System outsole combine to keep your game as dynamic as can be.'
    },
    {
        id: '7',
        model: 'Nike The Nike Premier 1971',
        series: 'Premier',
        collection: 'limited',
        price: 170,
        stock: 50,
        imageUrl: '/media/products/Nike_The_Nike_Premier_1971.jpg',
        description: 'In 1971, the iconic Swoosh first appeared on the side of a boot, and 50 years later, Nike pays homage to the legacy of football with a remake. Completely unique and limited football boot, with an upper consisting of premium leather 1971 pairs worldwide.'
    },
    {
        id: '8',
        model: 'Adidas Predator Edge Crystal FG',
        series: 'Predator',
        collection: 'limited',
        price: 349,
        stock: 5,
        imageUrl: '/media/products/Adidas_Predator_Edge_Crystal FG.jpg',
        description: 'Design decorated with Swarovski crystal details, which creates an eye-catching and icy look on the court. Primeknit upper with innovative and revolutionary Zone Skin, which provides ultimate control and improved grip Forefoot with Powerfacet technology incorporated.'
    },
    {
        id: '9',
        model: 'Adidas Predator Edge Geometric FG',
        series: 'Predator',
        collection: 'limited',
        price: 255,
        stock: 15,
        imageUrl: '/media/products/Adidas_Predator_Edge_Geometric FG.jpg',
        description: 'Used by French midfield creator Paul Pogba and female star Toni Duggan. Primeknit upper with innovative and revolutionary Zone Skin, which provides ultimate control and improved grip Forefoot with Powerfacet technology incorporated.'
    },
    {
        id: '10',
        model: 'Lotto Solista 100 IV Gravity',
        series: 'Future',
        collection: 'limited',
        price: 160,
        stock: 20,
        imageUrl: '/media/products/Lotto_Solista_100_IV_Gravity.jpg',
        description: 'Laceless Lotto Solista with a synthetic upper for a comfortable fit. Clean and agile design for the paced player with PuntoFlex@ tech for full flexibility. Elastic sock for full lockdown.'
    },
    {
        id: '11',
        model: 'Nike Phantom GT Elite 3D FG',
        series: 'Phantom',
        collection: 'limited',
        price: 249,
        stock: 7,
        imageUrl: '/media/products/Nike_Phantom_GT_Elite 3D FG.jpg',
        description: 'Nike Phantom GT is the latest innovation that helps you unlock your full potential, giving you everything you need to finish off the games. Upper made from Generative Texture, that delivers extreme grip and control.'
    },
    {
        id: '12',
        model: 'Pantofola D´oro Del Duca White FG',
        series: 'Del Duca',
        collection: 'limited',
        price: 290,
        stock: 5,
        imageUrl: '/media/products/Pantofola_Dioro_Del_Duca_White FG.jpg',
        description: 'Exclusive Limited Edition of The Croc in the form of Superleggera with crocodile markings in the design. The upper consists of calf leather, which reduces water absorption and provides unsurpassed comfort.'
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