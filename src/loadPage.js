//loadPage.js

import {createElement, addHeading, addImage, addParagraph} from './createElements'


const content = document.getElementById('content');

const loadPage = (option) => {
    clearContent()
    if(option === 'home') loadHome();

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



export {loadPage}