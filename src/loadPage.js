//loadPage.js
const loadPage = () => {
    const content = document.getElementById('content');





    const mainImage = createElement('main-image');
    const header = createElement('header');
    const mainDescription = createElement('main-description');
    
    addImage(mainImage,'img/koi.jpg', 'koi');
    addHeading(header, 'The Pond')
    addParagraph(mainDescription, 'We have some koi in our restaurant. Don\'t spell it coy or they\'ll get offended')

    content.appendChild(mainImage);
    content.appendChild(header);
    content.appendChild(mainDescription);
}

const createElement = (id) => {
    const elem = document.createElement('div');
    elem.id = id;
    return elem;
}

const addImage = (parent, src, alt = '') => {
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
    parent.appendChild(img);
}

const addParagraph = (parent, text) => {
    const p = document.createElement('p');
    p.innerHTML = text;
    parent.appendChild(p)
}

const addHeading = (parent, text) => {
    const heading = document.createElement('h2');
    heading.innerHTML = text;
    parent.appendChild(heading)
}





export {loadPage}