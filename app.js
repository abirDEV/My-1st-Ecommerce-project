const header = document.querySelector('header');

window.addEventListener('scroll' , function(){
    header.classList.toggle('sticky', window.scrollY > 200)
})

let nav = document.getElementById('nav');

document.getElementById('navBtn').addEventListener('click', function(){
    nav.classList.toggle('showNav');
})


// search form 
let searchForm = document.getElementById('form-search');

let x = document.querySelector('.ri-search-line');

x.addEventListener('click' , function(){
    searchForm.classList.toggle('showSearch');
    admin.classList.remove('showAdmin');
    cart.classList.remove('showCart');
})

// admin 
let admin = document.getElementById('admin');

console.log(admin);

document.querySelector('.ri-user-line').addEventListener('click', function(){
    searchForm.classList.remove('showSearch');
    admin.classList.toggle('showAdmin');
    cart.classList.remove('showCart');
})

// cart 
let cart = document.getElementById('cart');

document.querySelector('.ri-shopping-cart-line').addEventListener('click', function(){
    searchForm.classList.remove('showSearch');
    admin.classList.remove('showAdmin');
    cart.classList.toggle('showCart');
})



// hide Notification 

let ntfBox = document.querySelector('.notification');

document.getElementById('hide').addEventListener('click' , function(){
    ntfBox.classList.add('hideNtf')
})
