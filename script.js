// DOM elements
const menu = document.getElementById('menu');
const recommended = document.getElementById('recommended');
const bigComercial = document.getElementById('big-comercial');
const smallComercial = document.getElementById('small-comercial');


// Database
const data = [
    {
        name: 'Telewizory i RTV',
        id: 1,
        items: [
            {name: 'TV1', price: '2000', id: 0},
            {name: 'TV2', price: '2800', id: 1},
            {name: 'TV3', price: '3500', id: 2},
            {name: 'TV4', price: '3800', id: 3},
            {name: 'TV5', price: '3800', id: 4},
            {name: 'TV6', price: '3800', id: 5},
            {name: 'TV7', price: '3800', id: 6},
            {name: 'TV8', price: '3800', id: 7},
            {name: 'TV9', price: '3800', id: 8},
            {name: 'TV10', price: '3800', id: 9},
            {name: 'TV11', price: '3800', id: 10}
        ]
    },
    {
        name: 'AGD',
        id: 2,
        items: [
            {name: 'Pralka', price: '', id: 0},
            {name: 'Suszarka', price: '', id: 1},
            {name: 'Golarka', price: '', id: 2},
            {name: 'Wykręcarka', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10}
        ]
    },
    {
        name: 'AGD do zabudowy',
        id: 3,
        items: [
            {name: '', price: '', id: 0},
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10}
        ]
    },
    {
        name: 'AGD małe',
        id: 4,
        items: [
            {name: '', price: '', id: 0},
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10}
        ]
    },
    {
        name: 'Komputery i tablety',
        id: 5,
        items: [
            {name: '', price: '', id: 0},
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10}
        ]
    },
    {
        name: 'Smartfony i zegarki',
        id: 6,
        items: [
            {name: '', price: '', id: 0},
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10}
        ]
    },
    {
        name: 'FOTO i kamert',
        id: 7,
        items: [
            {name: '', price: '', id: 0},
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10}
        ]
    },
    {
        name: 'Gaming',
        id: 8,
        items: [
            {name: '', price: '', id: 0},
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10}
        ]
    },
    {
        name: 'Rowery',
        id: 9,
        items: [
            {name: '', price: '', id: 0},
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10}
        ]
    },
    {
        name: 'Sport i rekreacja',
        id: 10,
        items: [
            {name: '', price: '', id: 0},
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10}
        ]
    },
    {
        name: 'Hulajnogi i deskorolki',
        id: 11,
        items: [
            {name: '', price: '', id: 0},
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10}
        ]
    },
    {
        name: 'Dom i ogród',
        id: 12,
        items: [
            {name: '', price: '', id: 0},
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10}
        ]
    },
    {
        name: 'Nauka i praca z domu',
        id: 13,
        items: [
            {name: '', price: '', id: 0},
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10}
        ]
    },
    {
        name: 'Outlet',
        id: 14,
        items: [
            {name: '', price: '', id: 0},
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10}
        ]
    },
    {
        name: 'Promocje',
        id: 15,
        items: [
            {name: '', price: '', id: 0},
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10}
        ]
    },
];

// FUNCTIONS

// Create menu on left side with data
function appendMenu() {
    data.forEach( el => {
        let menuLi = document.createElement('li');
        menuLi.innerText = el.name;
        menu.appendChild(menuLi)
    })
}

// Create short list of random products
function reccomendedForYou() {

    let recommendedContainer = document.createElement('div')
    recommendedContainer.classList.add('recommendedContainer')
    recommended.appendChild(recommendedContainer);

    for(let i = 0; i <= 1; i++){
        let num = Math.floor(Math.random() * data.length)
        // console.log(num)

        data.forEach( el => {
            
            for(let j = 0; j <= 1; j++){

                if(num === el.id){
                    let numItems = Math.floor(Math.random() * el.items.length)
                    // console.log(el.items.length)
                    // console.log(numItems)
                    el.items.forEach(item => {
                        if(numItems === item.id){
                            console.log(item)
                            let recommendedItem = document.createElement('div');
                            recommendedItem.classList.add('recommendedItem')

                            let recommendedName = document.createElement('p');
                            let recommendedPrize = document.createElement('p');
                            let recommendedImage = document.createElement('div');
                            recommendedImage.classList.add('recommendedImage');

                            
                            recommendedName.innerText = item.name;
                            recommendedPrize.innerText = item.price;

                            recommendedItem.appendChild(recommendedImage);
                            recommendedItem.appendChild(recommendedName);
                            recommendedItem.appendChild(recommendedPrize);
                            recommendedContainer.appendChild(recommendedItem);
                        }
                    })
                }
            }
            
        })
        
    }

    
}

function createComercial() {

    let num = Math.floor(Math.random() * data.length);
    
    //big comercial
    for(let i = 0; i <= 1; i++){
        data.forEach( el => {
            if(num === el.id){
                let bigComercialElement = document.createElement('div');
                bigComercialElement.innerText += el.name;
                bigComercial.appendChild(bigComercialElement);
            }
        })  
   }
    
}

appendMenu();
reccomendedForYou();
createComercial();