const Product = require("../Product")

const productSeed = async()=> {
    return (
        await Promise.all([
            Product.create({ 
                name: 'Cat litter', 
                price: 20.00, 
                description: 'Scoop Away Complete Performance Fresh Scented Clumping Clay Cat Litter',
                stock: 100,
                imageUrl: 'https://image.chewy.com/is/image/catalog/157668_MAIN._AC_SL1200_V1663968055_.jpg',
                petType: 'cat',
                category: 'accessory'
             }),
            Product.create({ 
                name: 'Tylee human-grade chicken',
                price: 20.00, 
                description: 'Made with human-grade ingredients just like you’d find in your own kitchen—real, whole foods you can see, starting with USDA chicken.',
                stock: 100,
                imageUrl: 'https://image.chewy.com/is/image/catalog/108396_MAIN._AC_SL1200_V1619649161_.jpg',
                petType: 'dog',
                category: 'food'
             }),
            Product.create(
                { name: 'Cesar Fresh Chef Chicken Recipe',
                price: 20.00, 
                description: 'Treat your best friend to gourmet flavor with Cesar Fresh Chef Chicken Recipe with Peas & Carrots Dog Food. ',
                stock: 100,
                imageUrl: 'https://image.chewy.com/is/image/catalog/645990_MAIN._AC_SL1200_V1666120491_.jpg',
                petType: 'dog',
                category: 'food'
             }),
            Product.create(
                { name: 'Pedigree Grilled Steak & Vegetable Kibble',
                price: 27.80, 
                description: 'Give your furry friend a taste of the good life with the Pedigree Complete Nutrition Grilled Steak & Vegetable Flavor Dog Kibble Adult Dry Dog Food.',
                stock: 100,
                imageUrl: 'https://image.chewy.com/is/image/catalog/362455_MAIN._AC_SS348_V1643222802_.jpg',
                petType: 'dog',
                category: 'food'
             }),
            Product.create(
                { name: 'Pedigree Choice Cuts in Gravy Beef & Country Stew',
                price: 16.50, 
                description: 'The Pedigree Choice Cuts In Gravy Beef & Country Stew Canned Soft Wet Dog Food Variety Pack is loaded with tasty morsels of real beef in a delectable gravy sauce for paw-some flavor.',
                stock: 100,
                imageUrl: 'https://image.chewy.com/is/image/catalog/361347_MAIN._AC_SL600_V1649728906_.jpg',
                petType: 'dog',
                category: 'food'
             }),
            Product.create(
                { name: `Friskies Surfin' & Turfin' Favorites Dry Cat Food`,
                price: 14.99, 
                description: `Give your kitty a bowl of nutrition from land and sea with Friskies Surfin' & Turfin' Favorites Dry Cat Food.`,
                stock: 100,
                imageUrl:  'https://image.chewy.com/is/image/catalog/76421_MAIN._AC_SS348_V1663603680_.jpg',
                petType: 'cat',
                category: 'food'
             }),
            Product.create(
                { name: 'Friskies Classic Pate Variety Pack Canned Cat Food',
                price: 17.50, 
                description: 'Give your pal a bowlful of kitty-approved flavor and nutrition with the Friskies Classic Pate Variety Pack Canned Cat Food.',
                stock: 100,
                imageUrl: 'https://image.chewy.com/is/image/catalog/76219_MAIN._AC_SS348_V1657661022_.jpg',
                petType: 'cat',
                category: 'food'
             }),
            Product.create(
                { name: 'Frisco Bird Teaser with Feathers Cat Toy',
                price: 3.45, 
                description: 'This is no angry bird, but rather the perfect play buddy for your kitty from Frisco by Chewy.',
                stock: 147,
                imageUrl: 'https://image.chewy.com/is/image/catalog/161199_MAIN._AC_SS348_V1568240233_.jpg',
                petType: 'cat',
                category: 'toy' 
             }),
            Product.create(
                { name: 'KONG Cozie Baily the Blue Dog Toy',
                price: 5.99, 
                description: 'The KONG Cozies are cute, soft and cuddly plush toys made with an extra layer of material, so they’re extra tough.',
                stock: 1809,
                imageUrl: 'https://image.chewy.com/is/image/catalog/62764_MAIN._AC_SS348_V1588689679_.jpg',
                petType: 'dog',
                category: 'toy' 
             }),
            Product.create(
                { name: 'Frisco Rope Dog Leash with Padded Handle',
                price: 6.00, 
                description: 'Inspired by the gear used to climb the highest mountains, this leash is made with heavy-duty, braided polyester rope, with reflective accents, that’s designed to hold fast, even up against the strongest pullers!',
                stock: 1020,
                imageUrl: 'https://image.chewy.com/is/image/catalog/221212_MAIN._AC_SS348_V1596501663_.jpg',
                petType: 'dog',
                category: 'accessory' 
             }),
            Product.create(
                { name: 'Pet Fit For Life Basic Cat Harness, Small',
                price: 19.95, 
                description: 'Enjoy strolls with your lil’ sidekick even more knowing she’s safe and secure with a Pet Fit For Life Basic Cat Harness, Small.',
                stock: 100,
                imageUrl: 'https://image.chewy.com/is/image/catalog/326410_MAIN._AC_SS348_V1662586419_.jpg',
                petType: 'cat',
                category: 'accessory' 
             }),
             Product.create(
                { name: 'Bones & Chews Bully Stick 6" Dog Treats',
                price: 16.15, 
                description: 'Bones & Chews Bully Stick 6" Dog Treats deliver a protein-rich chewing experience dogs absolutely love.',
                stock: 100,
                imageUrl: 'https://image.chewy.com/is/catalog/102991_MAIN._AC_SL1200_V1475098196_.jpg',
                petType: 'dog',
                category: 'food' 
             }),
             Product.create(
                { name: 'American Journey Seafood Variety Pack Wet Cat Food',
                price: 13.80, 
                description: 'Indulge your cat with savory lickable broths from Landmark. Serve any of these seafood recipes as a tasty, flavor-boosting topper for their everyday meals or on its own as a special, satisfying treat.',
                stock: 100,
                imageUrl: 'https://image.chewy.com/is/image/catalog/219490_MAIN._AC_SL1200_V1611356812_.jpg',
                petType: 'cat',
                category: 'food' 
             }),
          
             Product.create({ 
                name: 'Frisco String Christmas Lights Dog & Cat Christmas Sweater', 
                price: 14.99, 
                description: `Light up your furry friend’s life with this string lights sweater!`,
                stock: 100,
                imageUrl: 'https://image.chewy.com/is/image/catalog/228886_MAIN._AC_SL1200_V1663948844_.jpg',
                petType: 'dog',
                category: 'accessory'
             }),

             Product.create({ 
                name: `Smarty Pear Leo's Loo Covered Automatic Self-Cleaning Cat Litter Box`, 
                price: 399.99, 
                description: `Upgrade your kitty’s litter box game with this innovative automatic self-cleaning litter appliance!`,
                stock: 600,
                imageUrl: 'https://image.chewy.com/is/image/catalog/257260_MAIN._AC_SL1200_V1657656397_.jpg',
                petType: 'cat',
                category: 'accessory'
             }),
             Product.create({ 
                name: 'ENABOT EBO SE Automatic Smart Robot Camera', 
                price: 119.00, 
                description: 'Interact and communicate with your furry friend from just about anywhere in real time with an ENABOT EBO SE Automatic Smart Robot Camera!',
                stock: 600,
                imageUrl: 'https://image.chewy.com/is/image/catalog/367422_PT3._AC_SL1200_V1647549992_.jpg',
                petType: 'cat',
                category: 'accessory'
             }),
             Product.create({ 
                name: 'Frisco Non-Skid Dog Socks, Black', 
                price: 7.00, 
                description: 'Everybody likes a pair of cozy socks, even dogs!',
                stock: 462,
                imageUrl: 'https://image.chewy.com/is/image/catalog/272491_MAIN._AC_SL1200_V1634828559_.jpg',
                petType: 'dog',
                category: 'accessory'
             }),

             Product.create({ 
                name: 'Frisco Plush, Teaser, Ball & Tri-Tunnel Cat Toy with Catnip', 
                price: 27.00, 
                description: 'Give your kitty all the excitement that comes with 20 assorted quality toys, bundled together into one fun-filled pack.',
                stock: 4545,
                imageUrl: 'https://image.chewy.com/is/image/catalog/178161_Main._AC_SL1200_V1573680524_.jpg',
                petType: 'cat',
                category: 'toy'
             }),
             
             Product.create({ 
                name: 'Tiki Cat King Kamehameha Grill Grain-Free Canned Cat Food', 
                price: 16.50, 
                description: `Feed your cat like a king with the Tiki Cat King Kamehameha Luau Variety Pack Grain-Free Canned Cat Food.`,
                stock: 3562,
                imageUrl: 'https://image.chewy.com/is/image/catalog/105266_MAIN._AC_SL1200_V1635535938_.jpg',
                petType: 'cat',
                category: 'food'
             }),

             Product.create ({
                name: 'Frisco Colorful Springs Cat Toy, 10 count',
                price: 4.70,
                description: 'Spring into playtime with a classic kitty playtime favorite! Some cats are all about the simple things, like a colorful, bouncy spring to chase and bat around the house.',
                stock: 9879,
                imageUrl: 'https://image.chewy.com/is/image/catalog/161807_MAIN._AC_SL1200_V1565795955_.jpg',
                petType: 'cat',
                category: 'toy'
             }),

             Product.create ({
                name: 'Pet Zone IQ Treat Dispenser Ball Dog Toy',
                price: 14.80,
                description: 'Have your pet work for his treats with the Pet Zone IQ Treat Ball Interactive Dog Toy.',
                stock: 245,
                imageUrl: 'https://image.chewy.com/is/image/catalog/115632_Main._AC_SL1200_V1583789884_.jpg',
                petType: 'dog',
                category: 'toy'
             }),

             Product.create ({
                name: 'Outward Hound Brick Puzzle Game Dog Toy',
                price: 14.00,
                description: `Who says learning can't be fun? With the Dog Brick Plastic Interactive Dog Toy, you can stimulate your pup's brain and have a blast at the same time!`,
                stock: 757,
                imageUrl: 'https://image.chewy.com/is/image/catalog/148599_MAIN._AC_SL1200_V1636516350_.jpg',
                petType: 'dog',
                category: 'toy'
             })


        ])
    )
}

module.exports = productSeed