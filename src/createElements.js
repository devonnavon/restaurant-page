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

export {createElement, addHeading, addImage, addParagraph}