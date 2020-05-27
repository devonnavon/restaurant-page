import {loadPage} from './loadPage'

loadPage('home')

const homeNav = document.getElementById('home-nav')
const locationNav = document.getElementById('location-nav')
const menuNav = document.getElementById('menu-nav')

homeNav.addEventListener('click', e=>{
    e.preventDefault()
    loadPage('home');
})

locationNav.addEventListener('click', e=>{
    e.preventDefault()
    loadPage('location');
})

menuNav.addEventListener('click', e=>{
    e.preventDefault()
    loadPage('menu');
})


// locationNav.addEventListener('click', loadPage('location'))
// menuNav.addEventListener('click', loadPage('menu'))

// const homeClickEvent = (e, option) => {
//     e.preventDefault()
//     loadPage
// }