// DOM elements
const menu = document.getElementById('menu');
const recommended = document.getElementById('recommended');
const bigComercial = document.getElementById('big-comercial');
const smallComercial = document.getElementById('small-comercial');
const offers = document.getElementById('offers')

// Created DOM elements




// Database
const data = [
    {
        name: 'Telewizory i RTV',
        id: 1,
        comercial: "Najlepsze wrażenia obrazu",
        comercialSmall: 'Wybrane TV w niskich cenach',
        image: 'https://cdn.pixabay.com/photo/2015/02/07/20/58/tv-627876_1280.jpg',
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
        comercial: "Moc wolnego czasu",
        image: 'https://cdn.pixabay.com/photo/2016/10/26/21/05/modern-kitchen-1772638_1280.jpg',
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
        comercial: "Elegancja i funkcjonalność",
        image: 'https://cdn.pixabay.com/photo/2016/10/26/20/31/washing-machine-1772579_1280.jpg',
        items: [
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10},
            {name: '', price: '', id: 11}
        ]
    },
    {
        name: 'AGD małe',
        id: 4,
        comercial: "Mali, codzienni pomocnicy",
        image: 'https://images.pexels.com/photos/1287150/pexels-photo-1287150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        items: [
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10},
            {name: '', price: '', id: 11}
        ]
    },
    {
        name: 'Komputery i tablety',
        id: 5,
        comercial: "Centrum rozrywki wszędzie",
        image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        items: [
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10},
            {name: '', price: '', id: 11}
        ]
    },
    {
        name: 'Smartfony i zegarki',
        id: 6,
        comercial: "Cały świat w kieszeni",
        image: 'https://images.pexels.com/photos/3775147/pexels-photo-3775147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        items: [
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10},
            {name: '', price: '', id: 11}
        ]
    },
    {
        name: 'FOTO i kamery',
        id: 7,
        comercial: "Najlepsza jakość wspomnień",
        image: 'https://images.pexels.com/photos/3679525/pexels-photo-3679525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        items: [
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10},
            {name: '', price: '', id: 11}
        ]
    },
    {
        name: 'Gaming',
        id: 8,
        comercial: "Bezgraniczne możliwości",
        image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        items: [
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10},
            {name: '', price: '', id: 11}
        ]
    },
    {
        name: 'Rowery',
        comercial: "Aktywność dla każdego",
        image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        id: 9,
        items: [
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10},
            {name: '', price: '', id: 11}
        ]
    },
    {
        name: 'Sport i rekreacja',
        id: 10,
        comercial: "Zawsze aktywni razem",
        image: 'https://images.pexels.com/photos/287240/pexels-photo-287240.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        items: [
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10},
            {name: '', price: '', id: 11}
        ]
    },
    {
        name: 'Hulajnogi i deskorolki',
        id: 11,
        comercial: "Ruch w najlepszym wydaniu",
        image: 'https://images.pexels.com/photos/442585/pexels-photo-442585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        items: [
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10},
            {name: '', price: '', id: 11}
        ]
    },
    {
        name: 'Dom i ogród',
        id: 12,
        comercial: "Relaks obliczem natury",
        image: 'https://images.pexels.com/photos/5921/wood-holiday-vacation-garden.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        items: [
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10},
            {name: '', price: '', id: 11}
        ]
    },
    {
        name: 'Nauka i praca z domu',
        id: 13,
        comercial: "Bądż kreatywny taniej!",
        image: 'https://images.pexels.com/photos/935743/pexels-photo-935743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        items: [
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10},
            {name: '', price: '', id: 11}
        ]
    },
    {
        name: 'Outlet',
        id: 14,
        comercial: "Jeszcze taniej do 5000zł!",
        image: 'https://images.pexels.com/photos/1261373/pexels-photo-1261373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        items: [
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10},
            {name: '', price: '', id: 11}
        ]
    },
    {
        name: 'Promocje',
        id: 15,
        comercial: "Z nami zawsze taniej! Wszystko w zasięgu ręki",
        image: 'https://images.pexels.com/photos/975250/pexels-photo-975250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        items: [
            {name: '', price: '', id: 1},
            {name: '', price: '', id: 2},
            {name: '', price: '', id: 3},
            {name: '', price: '', id: 4},
            {name: '', price: '', id: 5},
            {name: '', price: '', id: 6},
            {name: '', price: '', id: 7},
            {name: '', price: '', id: 8},
            {name: '', price: '', id: 9},
            {name: '', price: '', id: 10},
            {name: '', price: '', id: 11}
        ]
    },
];

// Created DOM elements


// FUNCTIONS

// Create menu on left side with data
function appendMenu() {
    data.forEach( el => {
        let menuLi = document.createElement('li');
        menuLi.innerText += el.name;
        menu.appendChild(menuLi)
    })
}

// Create short list of random products
function reccomendedContainer() {

    // Container for all rendered elements
    let recommendedContainer = document.createElement('div')
    recommendedContainer.classList.add('recommendedContainer')
    // h1 with text for container
    let recommendedContainerH1 = document.createElement('h1')
    recommendedContainerH1.innerText = 'Rekomendowane dla Ciebie';
    // Add h1 to container
    recommendedContainer.appendChild(recommendedContainerH1);
    // Add container to main element 'recommended'
    recommended.appendChild(recommendedContainer);    
}

function recommendedElements() {
    
    for(let i = 0; i <= 1; i++){
        let num = Math.floor(Math.random() * data.length)

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

    
    
    //big comercial
    for(let i = 0; i <= 1; i++){
        let num = Math.floor(Math.random() * data.length);
        data.forEach( el => {
            if(num === el.id){
                let bigComercialElement = document.createElement('div');
                bigComercialElement.classList.add('big-comercial-element');
                bigComercialElement.style.backgroundImage = `linear-gradient(to right,rgba(255,255,255,1), rgba(255,255,255,0)), url(${el.image})`;
                bigComercialElement.innerText += el.name;
                bigComercial.appendChild(bigComercialElement);
            }
        })  
   }

   // small comercial
    for(let i = 0; i <= 3; i++){
        let num = Math.floor(Math.random() * data.length);
        data.forEach( el => {
            if(num === el.id){
                let smallComercialElement = document.createElement('div');
                smallComercialElement.classList.add('small-comercial-element');
                smallComercialElement.style.backgroundImage = `linear-gradient(to right,rgba(255,255,255,1), rgba(255,255,255,0)), url(${el.image})`;
                smallComercialElement.innerText += el.name;
                smallComercial.appendChild(smallComercialElement);
            }
        })  
   }
    
}

function chooseOffers() {

    for(let i = 0; i <=3; i++){
        let num = Math.floor(Math.random() * data.length);
        data.forEach(el => {
            if(num === el.id){

                //offers container
                let offersContainer = document.createElement('div');
                offersContainer.classList.add('offersContainer')

                // image element
                let offersImage = document.createElement('div');
                offersImage.classList.add('offersImage');
                offersImage.style.backgroundImage = `linear-gradient(to right,rgba(255,255,255,1), rgba(255,255,255,0)), url(${el.image})`;
                // offersImage.style.backgroundImage = ``;

                let offersImageH1 = document.createElement('h1');
                offersImageH1.classList.add('offersImageH1');
                offersImageH1.innerText = el.comercial;

                offersImage.appendChild(offersImageH1);

                //info element
                let offersInfo = document.createElement('div');
                offersInfo.classList.add('offersInfo')
               
                let offersInfoH1 = document.createElement('h1');
                let offersInfoContainer = document.createElement('div');
                let offersInfoBtn = document.createElement('div');

                offersInfoContainer.classList.add('offersInfoContainer');

                offersInfoH1.innerText = `Wybrane ${el.name.toUpperCase()} w niskich cenach!`;
                offersInfoBtn.innerText = `Zobacz ${el.name} w niskich cenach!`;

                

                offersInfo.appendChild(offersInfoH1);
                offersInfo.appendChild(offersInfoContainer);
                offersInfo.appendChild(offersInfoBtn);
                


                offersContainer.appendChild(offersImage);
                offersContainer.appendChild(offersInfo)

                offers.appendChild(offersContainer)

                
            }

            // for(let i = 0; i <2; i++){
            //     el.items.forEach( product => {
            //         let num = Math.floor(Math.random() * el.items.length);
            //         console.log(num)
            //         if(num === product.id){
            //             let offersInfoContainerEl = document.createElement('div');
            //             offersInfoContainerEl.classList.add('offersInfoContainerEl')

            //             let offersInfoContainerElImage = document.createElement('div');
            //             let offersInfoContainerElName = document.createElement('p');
            //             let offersInfoContainerElPrice = document.createElement('p');

            //             offersInfoContainerElName.innerText = product.name;
            //             offersInfoContainerElPrice.innerText = product.price;

            //             offersInfoContainerEl.appendChild(offersInfoContainerElImage);
            //             offersInfoContainerEl.appendChild(offersInfoContainerElName);
            //             offersInfoContainerEl.appendChild(offersInfoContainerElPrice);

            //             offersInfoContainer.appendChild(offersInfoContainerEl)
            //         }
            //     })
            // }
        })
    }
}


function createShop() {

    // Append menu with products categories
    appendMenu();
    // Create element of recommended products for customer
    reccomendedContainer();


    createComercial();

    chooseOffers()
}

// Create main elements of shop
createShop();