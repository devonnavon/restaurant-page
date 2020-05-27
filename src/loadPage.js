//loadPage.js

import {createElement, addHeading, addImage, addParagraph} from './createElements'


const content = document.getElementById('content');

const loadPage = (option) => {
    clearContent()
    if(option === 'home') loadHome();
    if(option === 'location') loadLocation();
    if(option === 'menu') loadMenu();

}

const clearContent = () => {
    while (content.firstChild){
        content.removeChild(content.lastChild);
    }
    
}


const loadHome = () => {
    const home = createElement('home');
    
    const mainImage = createElement('main-image');
    const header = createElement('header');
    const mainDescription = createElement('main-description');
    
    addImage(mainImage,'img/koi.jpg', 'koi');
    addHeading(header, 'The Pond')
    addParagraph(mainDescription, 'We have some koi in our restaurant. Don\'t spell it coy or they\'ll get offended')

    home.appendChild(mainImage);
    home.appendChild(header);
    home.appendChild(mainDescription);
    content.appendChild(home)
}

const loadLocation = () => {
    const location = createElement('location');
    
    const image = createElement('location-image');
    const header = createElement('location-header');
    const mainDescription = createElement('location-description');
    
    addImage(image,'img/whereweat.jpg', 'the place to be');
    addHeading(header, 'The Pond')

    const text = 'We are located in the hills. It is quite nice up in the hills. Lots of greens.'

    addParagraph(mainDescription,text)

    location.appendChild(header);
    location.appendChild(mainDescription);
    location.appendChild(image);
    content.appendChild(location);
}

const loadMenu = () => {
    
    const menu = createElement('menu');
    
    const item1 = createElement('sushi')
    const item2 = createElement('burrito')
    const item3 = createElement('fish')
    const item4 = createElement('veggies')

    addHeading(item1, 'sushi')
    addParagraph(item1, 'we got sushi, dog.')


    addHeading(item2, 'burrito')
    addParagraph(item2, 'we\'re makin burritos out here' )


    addHeading(item3, 'fish')
    addParagraph(item3, 'we got fish, dog.')
    
    addHeading(item4, 'veggies')
    addParagraph(item4, 'veggies for you my lord...')
    
    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);
    menu.appendChild(item4);
    
    content.appendChild(menu);
}





export {loadPage}