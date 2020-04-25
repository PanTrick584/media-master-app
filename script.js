// DOM elements
const menu = document.getElementById('menu');

// Database
const data = [
    {
        name: 'Telewizory i RTV',
        RTV: [
            {name: '', price: ''}
        ]
    },
    {
        name: 'AGD',
        AGD: [
            {name: '', price: ''}
        ]
    },
    {
        name: 'AGD do zabudowy',
        AGD_b: [
            {name: '', price: ''}
        ]
    },
    {
        name: 'AGD małe',
        AGD_s: [
            {name: '', price: ''}
        ]
    },
    {
        name: 'Komputery i tablety',
        PC: [
            {name: '', price: ''}
        ]
    },
    {
        name: 'Smartfony i zegarki',
        PHONE: [
            {name: '', price: ''}
        ]
    },
    {
        name: 'FOTO i kamert',
        FOTO: [
            {name: '', price: ''}
        ]
    },
    {
        name: 'Gaming',
        GAME: [
            {name: '', price: ''}
        ]
    },
    {
        name: 'Rowery',
        BIKE: [
            {name: '', price: ''}
        ]
    },
    {
        name: 'Sport i rekreacja',
        SPORT: [
            {name: '', price: ''}
        ]
    },
    {
        name: 'Hulajnogi i deskorolki',
        SKATE: [
            {name: '', price: ''}
        ]
    },
    {
        name: 'Dom i ogród',
        HOUSE: [
            {name: '', price: ''}
        ]
    },
    {
        name: 'Nauka i praca z domu',
        LEARN: [
            {name: '', price: ''}
        ]
    },
    {
        name: 'Outlet',
        OUTLET: [
            {name: '', price: ''}
        ]
    },
    {
        name: 'Promocje',
        SALE: [
            {name: '', price: ''}
        ]
    },
];

function appendMenu() {
    data.forEach( el => {
        let menuLi = document.createElement('li');
        menuLi.innerText = el.name;
        menu.appendChild(menuLi)
    })
}

appendMenu();