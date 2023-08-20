const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.navlink');
    const shade = document.querySelector('.shade');
    const readMore = document.querySelector('.readmore');

    menu.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //Burger Animation
        menu.classList.toggle('toggle');

        //Shade Animation
        shade.classList.toggle('shade-on');
        readMore.classList.toggle('shade-more');
    });

}

navSlide();
