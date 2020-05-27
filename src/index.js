import {loadPage} from './loadPage'

loadPage('home')

const homeNav = document.getElementById('home-nav').querySelector('input')
const locationNav = document.getElementById('location-nav').querySelector('input')
const menuNav = document.getElementById('menu-nav').querySelector('input')

homeNav.addEventListener('click', e=>{
    // e.preventDefault()
    loadPage('home');
})

locationNav.addEventListener('click', e=>{
    // e.preventDefault()
    loadPage('location');
})

menuNav.addEventListener('click', e=>{
    // e.preventDefault()
    loadPage('menu');
})


