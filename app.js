let openMenu = document.querySelector('.menu');
let closeMenu = document.querySelector('.close-icon')
let navMenu = document.querySelector('.nav-menu');


openMenu.addEventListener('click', function() {

    navMenu.style.display = 'block';
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none';

});


closeMenu.addEventListener('click', function() {

    navMenu.style.display = 'none';
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';

});


navMenu.addEventListener('click', function(e) {

    if (e.target == navMenu) {
        navMenu.style.display = 'none';
        closeMenu.style.display = 'none';
        openMenu.style.display = 'block';
    }

});